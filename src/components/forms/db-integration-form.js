import React, { useState } from "react";
import Service from "../../services/service";
import {
  popupClasses,
  PopupFlexConfProd,
  showPopup,
} from "../helpers/popup-util";
import Spinner from "../spinner/spinner";
import * as mc from "../helpers/main-constants";

//TO DO: переделать по принципу одностороннего связывания

//OLD

const TestPostSaveForm = () => {
  const serv = new Service();

  const [loading, setLoading] = useState(false);
  const [popUpType, setPopUpType] = useState();

  const headPostValidator = (text) => {
    if (text) {
      return text.length < 5 ? false : true;
    }

    return false;
  };

  let postData = {
    title: "",
    text: "",
  };

  const submitEventListener = async (e) => {
    e.preventDefault();
    console.log(`Attempt to save post data`);
    postData.title = document.getElementById("headPost").value;
    postData.text = document.getElementById("testText").value;

    if (postData.title) {
      try {
        setLoading(true);
        const result = await serv.savePost(postData);
        setLoading(false);
        if (result.rowCount) {
          showPopup(mc.POPUP_CONTAINER_BOTTOM_RIGHT, setPopUpType);
        }
      } catch (e) {
        console.error(e);
        console.error(e.stack);
      }
    } else {
      throw Error("The title has not been passed");
    }
  };

  const onChangeListener = (e) => {
    e.preventDefault();
    postData.title = document.getElementById("headPost").value;
    let vText = document.getElementById("validationText");
    const btn = document.getElementById("btnSaveTestText");
    headPostValidator(postData.title)
      ? (vText.style.display = "none")
      : (vText.style.display = "block");
    headPostValidator(postData.title)
      ? (btn.disabled = false)
      : (btn.disabled = true);
  };

  const cleanInputFields = () => {
    document.getElementById("headPost").value = "";
    document.getElementById("testText").value = "";
    document.getElementById("validationText").style.display = "none";
    document.getElementById("btnSaveTestText").disabled = true;
  };

  if (loading) {
    return (
      <React.Fragment>
        <Spinner requestName="SavePostData" />
        <PostFormRenderer
          submitEventListener={submitEventListener}
          cleanInputFields={cleanInputFields}
          onChangeListener={onChangeListener}
        />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <PopupFlexConfProd
        className={popUpType}
        text="Данные успешно сохранены"
      />
      <PostFormRenderer
        submitEventListener={submitEventListener}
        cleanInputFields={cleanInputFields}
        onChangeListener={onChangeListener}
      />
    </React.Fragment>
  );
};

const PostFormRenderer = (props) => {
  const { submitEventListener, cleanInputFields, onChangeListener } = props;

  return (
    <div className="tpost-form">
      {/* <div className="b-popup">
                <div class="b-popup-content">
                    Text in Popup
                </div>
            </div> */}
      <form className="post-form" onSubmit={(e) => submitEventListener(e)}>
        <label htmlFor="headPost">Заголовок</label>
        <font
          className="validation-text-font"
          color="red"
          id="validationText"
          style={{ display: "none" }}
        >
          Поле обязательно для заполнения. Не менее 5 символов.
        </font>
        <input
          className="form-control"
          id="headPost"
          type="text"
          onChange={(e) => onChangeListener(e)}
        />
        <label htmlFor="testText">Текст для сохранения</label>
        <textarea className="form-control" id="testText" wrap="physical" />
        <button
          type="submit"
          className="btn btn-primary"
          id="btnSaveTestText"
          disabled={true}
        >
          Сохранить
        </button>
      </form>
      <button
        onClick={() => cleanInputFields()}
        className="btn btn-primary"
        id="btnSaveTestText"
      >
        Очистить
      </button>
    </div>
  );
};

export default TestPostSaveForm;
