import { checkProfileInDB, getInfobyId } from "../../helpers/vk-service";
import {
  fetchVKENProfileDataEndFailure,
  fetchVKENProfileDataEndSuccess,
  getVKENDBProfileDataEndSuccess,
} from "../../forms/profile-enrichment/actions/profile-enrichment-actions";
import { hideSpinner, showSpinner } from "../../../actions/actions";

type TAction = {
  type: string;
  payload?: string;
};
// middleware для асинхронного запроса на получение данных по профайлу через VK API
// перехватывает объект action с типами FETCH_VK_EN_PROFILE_DATA GET_VK_EN_DB_PROFILE_DATA
// затем осуществляет вызов асинхронных функций, после получения результата
// передает его дальше в редьюсер
export const getVKProfileById = () => (dispatch: (action: TAction) => void) => (
  action: TAction
) => {
  if (action.type == "FETCH_VK_EN_PROFILE_DATA") {
    dispatch(showSpinner("Получение данных о профайле"));
    return getInfobyId(action.payload)
      .then((profile) => {
        dispatch(hideSpinner());
        return dispatch(fetchVKENProfileDataEndSuccess(profile));
      })
      .catch((e) => {
        dispatch(fetchVKENProfileDataEndFailure());
        throw new Error(e);
      });
  }
  if (action.type == "GET_VK_EN_DB_PROFILE_DATA") {
    dispatch(showSpinner("Получение данных о профайле из БД"));
    return checkProfileInDB(action.payload)
      .then((data) => {
        dispatch(hideSpinner());
        return dispatch(getVKENDBProfileDataEndSuccess(data));
      })
      .catch((e) => {
        dispatch(fetchVKENProfileDataEndFailure());
        throw new Error(e);
      });
  }
  return dispatch(action);
};
