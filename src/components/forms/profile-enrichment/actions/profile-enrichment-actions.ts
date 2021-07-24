/*Действия:
FETCH_VK_EN_PROFILE_DATA получение данных о профайле через VK API
FETCH_VK_EN_PROFILE_DATA_END_SUCCESS данные о профайле через VK API успешно загружены
FETCH_VK_EN_PROFILE_DATA_END_FAILURE прервана загрузка данных о профайле через VK API из-за возникшего исключения
GET_VK_EN_LOCAL_STORAGE_DATA получение данных из локального хранилища о профайле
GET_VK_EN_DB_PROFILE_DATA получение основных данных о наличии профайла в таблицах profiles и profiles_check
GET_VK_EN_DB_EXTENDED_PROFILE_DATA получение расширенных данных о профайле
INSERT_VK_EN_DB_PROFILE_DATA запись/перезапись профайла в БД
UPDATE_VK_EN_DB_PROFILE_DATA апдейт параметров профайла в БД
*/
import { TVKProfile } from '../../vk/vk-types';

interface IProfileEnrichmentActions {
  fetchVKEnrichmentProfile: {
    type: string;
    payload: TVKProfile;
  };
  fetchVKENProfileDataEndSuccess: {
    type: string;
    payload?: TVKProfile;
  };
}

export const fetchVKEnrichmentProfile = (
  id: string,
): IProfileEnrichmentActions['fetchVKEnrichmentProfile'] => ({
  type: 'FETCH_VK_EN_PROFILE_DATA',
  // @ts-ignore
  payload: id,
});

//функция для тестирования
export const stopLoad = () => ({ type: 'STOP_LOAD' });

export const fetchVKENProfileDataEndSuccess = (
  payload?: string,
): IProfileEnrichmentActions['fetchVKENProfileDataEndSuccess'] => {
  return {
    type: 'FETCH_VK_EN_PROFILE_DATA_END_SUCCESS',
    // @ts-ignore
    payload,
  };
};

export const fetchVKENProfileDataEndFailure = () => ({
  type: 'FETCH_VK_EN_PROFILE_DATA_END_FAILURE',
});

export const getVKENLocalStorageData = (
  payload: string,
): IProfileEnrichmentActions['fetchVKENProfileDataEndSuccess'] => {
  return {
    type: 'GET_VK_EN_LOCAL_STORAGE_DATA',
    // @ts-ignore
    payload,
  };
};

export const getVKENDBProfileData = (
  id: string,
): IProfileEnrichmentActions['fetchVKEnrichmentProfile'] => {
  return {
    type: 'GET_VK_EN_DB_PROFILE_DATA',
    // @ts-ignore
    payload: id,
  };
};

export const getVKENDBProfileDataEndSuccess = (
  payload?: { hasProfileRow: boolean;
    profileUpdateTime: any;
    hasProfileCheckRow: boolean;
    profileCheckUpdateTime: any;
    isInRelationship: any;
    estimation: any;
    hasChild: any;
    correlationEst: any; },
): IProfileEnrichmentActions['fetchVKENProfileDataEndSuccess'] => {
  return {
    type: 'GET_VK_EN_DB_PROFILE_DATA_SUCCESS',
    // @ts-ignore
    payload,
  };
};
// @ts-ignore
export const getVKENDBExtendedProfileData = (payload) => {
  return {
    type: 'GET_VK_EN_DB_EXTENDED_PROFILE_DATA',
    payload,
  };
};

export const insertVKENDBProfileData = () => {
  return {
    type: 'INSERT_VK_EN_DB_PROFILE_DATA',
  };
};

export const updateVKENDBProfileData = () => {
  return {
    type: 'UPDATE_VK_EN_DB_PROFILE_DATA',
  };
};
