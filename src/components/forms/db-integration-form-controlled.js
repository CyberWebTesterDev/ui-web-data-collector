import React, { useState, Component } from "react";
import Service from "../../services/service";
import {
  popupClasses,
  PopupFlexConfProd,
  showPopup,
  PopupWindowTopLeft,
  CallPopUpFlex,
  PopupWindowTopLeftClass,
} from "../helpers/popup-util";
import Spinner from "../spinner/spinner";
import * as mc from "../helpers/main-constants";

//TO DO: переделать по принципу одностороннего связывания //DONE

class PostFormController extends Component {
  state = {
    labelTitle: ``,
    textArea: ``,
    errorTextVisibility: "hidden",
    isButtonSaveDisabled: true,
    loading: false,
    cursorStyle: "not-allowed",
    isSpanNeedToDisplay: true,
    doPopUpShow: false,
  };

  spanRef = React.createRef();

  showPopUp = () => {
    this.setState(({ doPopUpShow }) => {
      return {
        doPopUpShow: true,
      };
    });

    setTimeout(() => {
      this.setState(({ doPopUpShow }) => {
        return {
          doPopUpShow: false,
        };
      });
    }, 2000);
  };

  showHideSpan = () => {
    this.setState(({ isSpanNeedToDisplay }) => {
      return {
        isSpanNeedToDisplay: !isSpanNeedToDisplay,
      };
    });
  };

  inputLabelValidator = () => {
    if (this.state.labelTitle.length <= 5) {
      this.setState({
        errorTextVisibility: "visible",
        cursorStyle: "not-allowed",
        isButtonSaveDisabled: true,
      });
    } else {
      this.setState({
        errorTextVisibility: "hidden",
        cursorStyle: "pointer",
        isButtonSaveDisabled: false,
      });
    }
  };

  onChangeListener = (e) => {
    //колбэк так как setState асинхронна
    this.setState({ labelTitle: e.target.value }, () => {
      this.inputLabelValidator();
    });
  };

  onChangeTextArea = (e) => {
    this.setState({
      textArea: e.target.value,
    });
  };

  cleanInputFields = () => {
    this.setState({
      labelTitle: ``,
      textArea: ``,
      errorTextVisibility: "hidden",
      isButtonSaveDisabled: true,
    });
  };

  handleUnmount = () => {
    console.log(`REF: `);
    console.log(this.spanRef);
  };

  submitEventListener = async (e) => {
    e.preventDefault();
    console.log(`Attempt to save post data`);

    postData.title = this.state.labelTitle;
    postData.text = this.state.textArea;

    if (postData.title) {
      try {
        this.setState({ loading: true });
        const result = await serv.savePost(postData);
        this.setState({ loading: false });
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

  render() {
    return (
      <PostFormRenderer
        submitEventListener={this.submitEventListener}
        cleanInputFields={this.cleanInputFields}
        onChangeListener={this.onChangeListener}
        onChangeTextArea={this.onChangeTextArea}
        labelTitle={this.state.labelTitle}
        textArea={this.state.textArea}
        errorTextVisibility={this.state.errorTextVisibility}
        isButtonSaveDisabled={this.state.isButtonSaveDisabled}
        isLoading={this.state.loading}
        cursorStyle={this.state.cursorStyle}
        spanRef={this.spanRef}
        handleUnmount={this.handleUnmount}
        isSpanNeedToDisplay={this.state.isSpanNeedToDisplay}
        showHideSpan={this.showHideSpan}
        doPopUpShow={this.state.doPopUpShow}
        showPopUp={this.showPopUp}
      />
    );
  }
}

const PostFormRenderer = (props) => {
  const {
    submitEventListener,
    cleanInputFields,
    onChangeListener,
    onChangeTextArea,
    labelTitle,
    textArea,
    errorTextVisibility,
    isButtonSaveDisabled,
    isLoading,
    cursorStyle,
    spanRef,
    handleUnmount,
    isSpanNeedToDisplay,
    showHideSpan,
    doPopUpShow,
    showPopUp,
  } = props;

  console.log(`isLoading: ${isLoading}`);

  return (
    <div className="tpost-form">
      {isSpanNeedToDisplay && (
        <span ref={spanRef} style={{ fontSize: "50px" }}>
          Какой-то СПАН для удаления
        </span>
      )}
      {isLoading && <Spinner requestName="SavePostData" />}
      {doPopUpShow && <PopupWindowTopLeftClass text={"Modal text"} />}
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
          style={{ visibility: errorTextVisibility }}
        >
          Поле обязательно для заполнения. Не менее 5 символов.
        </font>
        <input
          value={labelTitle}
          className="form-control"
          id="headPost"
          type="text"
          onChange={(e) => onChangeListener(e)}
        />
        <label htmlFor="testText">Текст для сохранения</label>
        <textarea
          onChange={(e) => onChangeTextArea(e)}
          value={textArea}
          className="form-control"
          id="testText"
          wrap="physical"
        />
        <button
          type="submit"
          className="btn btn-primary"
          id="btnSaveTestText"
          disabled={isButtonSaveDisabled}
          style={{ cursor: cursorStyle }}
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
      <button
        onClick={() => showPopUp()}
        className="btn btn-primary"
        id="btnUnmount"
      >
        Показать PopUp
      </button>
    </div>
  );
};

export default PostFormController;
