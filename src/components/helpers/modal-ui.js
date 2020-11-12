// @flow
import React from "react";
import { dateParser } from "../../services/helper";

// type TModalProps = {
//   visible: boolean;
//   setVisible: (flag: boolean) => void;
//   text?: string;
//   className?: string;
//   label?: string;
//   creationDate?: string;
// };


export const showModal = (setFunc) => {
  setFunc(true);
};

export const closeModal = (setFunc) => {
  setFunc(false);
};

export const ModalUi = (props) => {
  if (props.visible) {
    return (
      <div className="modal-parent dimmer">
        <div className="modal visible-block">Модальное окно</div>
      </div>
    );
  }

  return false;
};

export const ModalWithButton = (props) => {
  if (props.visible) {
    return (
      <div className="modal-parent dimmer">
        <div className="modal visible-block">
          Модальное окно
          <button
            className="modal-btn"
            onClick={() => closeModal(props.setVisible)}
          >
            Закрыть
          </button>
        </div>
      </div>
    );
  }

  return false;
};

export const ModalWithButtonDarkLarge = (props) => {
  if (props.visible) {
    return (
      <div className="modal-parent-large dimmer-modal">
        <div className="modal-dark-gray-large visible-block">
          <label className="modal-label">Большое модальное окно</label>
          <p className="text-modal">{props.text}</p>
          <button
            className="modal-btn"
            onClick={() => closeModal(props.setVisible)}
          >
            Закрыть
          </button>
        </div>
      </div>
    );
  }

  return false;
};

export const ModalWithButtonDarkLargeForPost = (props) => {
  if (props.visible) {
    return (
      <div className="modal-parent-large dimmer-modal">
        <div className="modal-post-dark-gray-large visible-block">
          <label className="modal-label">{props.label}</label>
          <label className="modal-second-label">
            <span>Дата создания: </span>
            {dateParser(props.creationDate)}
          </label>
          <p className="text-modal-large">{props.text}</p>
          <button
            className="modal-btn"
            onClick={() => closeModal(props.setVisible)}
          >
            Закрыть
          </button>
        </div>
      </div>
    );
  }

  return false;
};

export const ModalWithButtonDarkLargeFlexible = (props) => {
  if (props.visible) {
    return (
      <div className="modal-parent-large dimmer-modal">
        <div className={props.className}>
          <label className="modal-label">Большое модальное окно</label>
          <p className="text-modal">{props.text}</p>
          <button
            className="modal-btn"
            onClick={() => closeModal(props.setVisible)}
          >
            Закрыть
          </button>
        </div>
      </div>
    );
  }

  return false;
};
