import { getInfobyId } from "../../helpers/vk-service";
import {
  fetchVKENProfileDataEndFailure,
  fetchVKENProfileDataEndSuccess,
  fetchVKEnrichmentProfile,
} from "../../forms/profile-enrichment/actions/profile-enrichment-actions";
import { hideSpinner, showSpinner } from "../../../actions/actions";

type TAction = {
  type: string;
  payload?: any;
};
// middleware для асинхронного запроса на получение данных по профайлу через VK API
export const getVKProfileById = () => (dispatch: (action: TAction) => void) => (
  action: TAction
) => {
  if (action.type == "FETCH_VK_EN_PROFILE_DATA") {
    dispatch(showSpinner("Получение данных о профайле"));
    //dispatch(fetchVKEnrichmentProfile());
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
  return dispatch(action);
};
