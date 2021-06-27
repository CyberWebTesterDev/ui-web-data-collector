import { dateParser } from '../../../services/helper';
import * as React from 'react';
import { closeModalDispatch } from './modal-actions';
import { cancelSelectPostDispatch } from '../../../actions/posts-form-actions';
import { mainConstants as mc, TPost } from '../../../lib/ui-serv-main-lib';

export const ModalLargePost = ({ post }: TPost) => {
  const handleCloseModal = React.useCallback(
    () => {
      closeModalDispatch();
      cancelSelectPostDispatch(post.id);
    },
    [post.id],
  );

  return (
      <div className={mc.CLASS_MODAL_PARENT_LARGE_DIMMER_MODAL}>
         <div className={mc.CLASS_MODAL_POST_DARK_GRAY_LARGE_VISIBLE_BLOCK}>
            <label className={mc.CLASS_MODAL_LABEL}>{post.title}</label>
            <label className={mc.CLASS_MODAL_LABEL}>
               <span>Дата создания: </span>
               {dateParser(post.creation_date)}
            </label>
            <p className={mc.CLASS_MODAL_TEXT_LARGE}>{post.text}</p>
            <button
               className={mc.CLASS_MODAL_BTN}
               onClick={handleCloseModal}
            >
               Закрыть
            </button>
         </div>
      </div>
  );
};
