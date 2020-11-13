const initialState = {
  profile: {},
  profileInDB: {},
  compareProfileExtendedData: {},
  popupClassName: "",
  loading: false,
  label: "",
  label2: "",
  estimationLabel: "",
  currentEstimation: 0,
  currentCorrEstimation: 0,
  currentHasChildProperty: 0,
  currentIsInRelationShipProperty: 0,
  local: "",
};
/*Действия:
FETCH_VK_EN_PROFILE_DATA получение данных о профайле через VK API
FETCH_VK_EN_PROFILE_DATA_END_SUCCESS данные о профайле через VK API успешно загружены
FETCH_VK_EN_PROFILE_DATA_END_FAILURE прервана загрузка данных о профайле через VK API из-за возникшего исключения
GET_VK_EN_LOCAL_STORAGE_DATA получение данных из локального хранилища о профайле
GET_VK_EN_DB_PROFILE_DATA получение основных данных о наличии профайла в таблицах profiles и profiles_check
GET_VK_EN_DB_PROFILE_DATA_SUCCESS данные получены
GET_VK_EN_DB_EXTENDED_PROFILE_DATA получение расширенных данных о профайле
INSERT_VK_EN_DB_PROFILE_DATA запись/перезапись профайла в БД
UPDATE_VK_EN_DB_PROFILE_DATA апдейт параметров профайла в БД
*/

export const vkEnrichmentProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_VK_EN_PROFILE_DATA":
      return { ...state, loading: true };
    case "STOP_LOAD":
      return { ...state, loading: false };
    case "FETCH_VK_EN_PROFILE_DATA_END_SUCCESS":
      return { ...state, loading: false, profile: action.payload };
    case "GET_VK_EN_DB_PROFILE_DATA_SUCCESS":
      return { ...state, loading: false, profileInDB: action.payload };
    default:
      return state;
  }
};
