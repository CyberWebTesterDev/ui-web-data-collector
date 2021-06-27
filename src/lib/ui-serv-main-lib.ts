import { TSearchVKProfileMatchesProps as TVKState } from '../components/forms/vk/vk-types';

export declare const mainConstants: {
  readonly SUCCESS_POPUP_MESSAGE: 'Данные с сервера успешно загружены',
  readonly ERROR_POPUP_MESSAGE: 'При выполнении запроса произошла ошибка',
  readonly POPUP_MESSAGE_SUCCESS_LOAD_VK_MATCHES: 'Запрос получения подходящих профилей VK успешно обработан',
  readonly TEXT_ERROR_LABEL_MATCHES_FORM_OFFSET_IS_BIGGER_THAN_MAX: 'Offset не должен превышать предел',
  readonly CLASS_MODAL_PARENT_LARGE_DIMMER_MODAL: 'modal-parent-large dimmer-modal',
  readonly CLASS_MODAL_POST_DARK_GRAY_LARGE_VISIBLE_BLOCK: 'modal-post-dark-gray-large visible-block',
  readonly CLASS_MODAL_BTN: 'modal-btn',
  readonly CLASS_MODAL_LABEL: 'modal-label',
  readonly CLASS_MODAL_SECOND_LABEL: 'modal-second-label',
  readonly CLASS_MODAL_TEXT_LARGE: 'text-modal-large',
  readonly MODAL_DARK_GRAY_LARGE: 'modal-dark-gray-large',
  readonly POPUP_CONTAINER_CENTER: 'popup-container-center',
  readonly POPUP_CONTAINER_TOP_LEFT: 'popup-container-top-left',
};

export interface IBasicActionObject {
  type: string;
  payload?: string | { [key: string]: string | number };
}

export type TPopUpActionFunction = (
  className: string,
  text: string,
  duration: string | number,
) => IBasicActionObject;

export type TPopUpActionFunctionWithoutArgumentsDispatch = (
  className: string,
  text: string,
  duration: string | number,
) => void;

export type TPopUpActionFunctionDispatch = (
  className: string,
  text: string,
  duration: string | number,
) => void;

export type TProfileInDB = {
  hasProfileRow: boolean;
  hasProfileCheckRow: boolean;
  isInRelationship: boolean;
  hasChild: boolean;
  isEditable: boolean;
  estimation: string | undefined;
  correlationEst: string | undefined;
};

export type TPost = {
  post: {
    id: string;
    title: string;
    text: string;
    creation_date: string;
    change_date: string;
    author: string;
  };
};

export type TState = {
  vkData: TVKState;
  loaders: any;
  popups: any;
  postForm: any;
  modal: any;
  profileEnrichmentData: any;
  form: any;
};
