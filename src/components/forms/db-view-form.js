import React, { useState, useEffect } from "react";
import Spinner from "../spinner/spinner";
import { showPopup, PopupFlexConfProd } from "../helpers/popup-util";
import {
  ModalWithButtonDarkLargeForPost,
  showModal,
} from "../helpers/modal-ui";
import * as mc from "../helpers/main-constants";
import TableRenderer from "../helpers/table-maker";
import SRV from "../../services/service";
import { getIndexInArrayOfObjectsById2 } from "../../services/helper";

const DBViewLogic = () => {
  const srv = new SRV();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [popUpType, setPopUpType] = useState("");
  const [popupMessage, setPopUpMessage] = useState("");
  const [isModalVisible, setModalVisibility] = useState(false);
  const [choosenPostIdForModal, setChoosenPostIdForModal] = useState(null);

  const getPostTextById = (id) => {
    if (id) {
      const idx = getIndexInArrayOfObjectsById2(id, posts);
      const postText = posts[idx].text;
      return postText;
    }
    return;
  };

  useEffect(() => {
    console.log(`DBViewLogic: starting to collect posts data`);
    setLoading(true);
    srv
      .searchPosts()
      .then((postList) => {
        console.log(`post list has been received`);
        console.log(postList);
        setPosts(postList);
        setLoading(false);
        setPopUpMessage(mc.SUCCESS_POPUP_MESSAGE);
        showPopup(mc.POPUP_CONTAINER_BOTTOM_RIGHT, setPopUpType, 3000);
      })
      .catch((e) => {
        setLoading(false);
        setPopUpMessage(mc.ERROR_POPUP_MESSAGE);
        showPopup(mc.POPUP_CONTAINER_CENTER_ERROR, setPopUpType, 3000);
      });
  }, []);
  //отслеживаем изменилось ли id выбранного поста choosenPostIdForModal для передачи в модальное окно
  useEffect(() => {
    if (choosenPostIdForModal) {
      setModalVisibility(true);
    }
  }, [choosenPostIdForModal]);

  if (loading) {
    return (
      <React.Fragment>
        <Spinner requestName={mc.SPINNER_MESSAGE_GET_POSTS} />
      </React.Fragment>
    );
  }

  if (choosenPostIdForModal) {
    return (
      <React.Fragment>
        <ModalWithButtonDarkLargeForPost
          visible={isModalVisible}
          setVisible={setModalVisibility}
          label={
            posts[getIndexInArrayOfObjectsById2(choosenPostIdForModal, posts)]
              .title
          }
          creationDate={
            posts[getIndexInArrayOfObjectsById2(choosenPostIdForModal, posts)]
              .creation_date
          }
          text={getPostTextById(choosenPostIdForModal)}
        />
        <TableRenderer
          list={posts}
          onClickListener={setChoosenPostIdForModal}
        />
        <PopupFlexConfProd className={popUpType} text={popupMessage} />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <TableRenderer list={posts} onClickListener={setChoosenPostIdForModal} />
      <PopupFlexConfProd className={popUpType} text={popupMessage} />
    </React.Fragment>
  );
};

export default DBViewLogic;
