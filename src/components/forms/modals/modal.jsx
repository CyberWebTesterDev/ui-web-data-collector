import { dateParser } from "../../../services/helper";
import React from "react";
import { closeModal } from "../../helpers/modal-ui";
import {
  CLASS_MODAL_BTN,
  CLASS_MODAL_LABEL,
  CLASS_MODAL_PARENT_LARGE_DIMMER_MODAL,
  CLASS_MODAL_POST_DARK_GRAY_LARGE_VISIBLE_BLOCK,
  CLASS_MODAL_SECOND_LABEL,
  CLASS_MODAL_TEXT_LARGE,
} from "../../helpers/main-constants";
import { closeModalDispatch } from "./modal-actions";
import { cancelSelectPostDispatch } from "../../../actions/posts-form-actions";

export const ModalLargePost = ({ post }) => {
  const handleCloseModal = (postId) => {
    closeModalDispatch();
    cancelSelectPostDispatch(postId);
  };

  return (
    <div className={CLASS_MODAL_PARENT_LARGE_DIMMER_MODAL}>
      <div className={CLASS_MODAL_POST_DARK_GRAY_LARGE_VISIBLE_BLOCK}>
        <label className={CLASS_MODAL_LABEL}>{post.title}</label>
        <label className={CLASS_MODAL_SECOND_LABEL}>
          <span>Дата создания: </span>
          {dateParser(post.creation_date)}
        </label>
        <p className={CLASS_MODAL_TEXT_LARGE}>{post.text}</p>
        <button
          className={CLASS_MODAL_BTN}
          onClick={() => handleCloseModal(post.id)}
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};
