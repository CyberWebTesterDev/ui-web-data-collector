import React, { useState, useEffect } from "react";
import GetTestData from "../../services/service-test";
import Srv from "../../services/service";
import {
  RatingRingsTest,
  SimpleRating,
  SimpleEstimation,
  ComplexEstimation,
} from "../../services/helper";
import "./test-detail.css";
import TestPostSaveForm from "../forms/db-integration-form";
import {
  showPopup,
  PopupWindowCenter,
  PopupWindowTopLeft,
  popupClasses,
  PopupFlexConfProd,
} from "../helpers/popup-util";
import {
  ModalUi,
  ModalWithButton,
  ModalWithButtonDarkLarge,
  showModal,
  ModalWithButtonDarkLargeForPost,
} from "../helpers/modal-ui";
import { SimpleCheckerChild } from "../helpers/helper-vk-matches";
import * as mc from "../helpers/main-constants";
import Spinner from "../spinner/spinner";
import { connectWS } from "../../services/testws";

const TestDataRender = ({ obj }) => {
  const GTD = new GetTestData();

  console.log(`TestDataRender has been called`);
  console.log(obj);

  let Objkeysval = [];

  for (let key in obj) {
    Objkeysval.push(
      <span key={GTD.idGenerator()}>
        <font>{key}: </font> {JSON.stringify(obj[key])}
      </span>
    );
  }

  return <div className="test-block-details">{Objkeysval}</div>;
};

const GetTestDataComp = () => {
  const [obj, setObj] = useState({});
  const [id, setId] = useState(null);
  const [popUpType, setPopUpType] = useState();
  const [isModalVisible, setModalVisibility] = useState(false);
  const [messages, setMessage] = useState([]);

  const onClickListener = () => {
    let GTD = new GetTestData();
    let data = GTD.getTestProfileData();
    console.log("Test data has been received: ");
    console.log(data);
    setObj(data);
  };

  useEffect(() => {
    let messageContainer = [];
    connectWS().then((server) => {
      console.log(`Connection to server has been established`);

      server.onmessage = (e) => {
        console.log(`Received message from server ${e.data}`);
        messageContainer.push(<span>{e.data}</span>);
        setMessage(messageContainer);
        console.log(messages);
      };
      server.send("test");
    });
  }, []);

  const generateId = () => {
    const srv = new Srv();
    const id = srv.idGenerator();
    setId(id);
  };

  const textModal =
    "Привет! Это тестовое модальное большое окно. Немного информации о React: При разработке React-приложений обычным является способ разбиения различных компонент на отдельные блоки и последующей композиции их в более сложную структуру. Часто разбивают как компоненты интерфейса, так и вспомогательные компоненты, реализующие определенную логику приложения. React использует препроцессор JSX, который удобен тем, что можно смешивать код JavaScript и язык разметки в одном файле.";

  const textModal2 = `JavaScript движок: это программа, или, другими словами, интерпретатор, выполняющий код, написанный на JavaScript. Движок может быть реализован с использованием различных подходов: в виде обычного интерпретатора, в виде динамического компилятора (или JIT-компилятора), который, перед выполнением программы, преобразует исходный код на JS в байт-код некоего формата.`;

  useEffect(() => {
    console.log("Current obj in GetTestDataComp is: ");
    console.log(obj);
  });

  if (id) {
    return (
      <React.Fragment>
        <div>{messages}</div>

        <TestRenderData
          obj={obj}
          onClickListener={onClickListener}
          setPopup={setPopUpType}
          generateId={generateId}
          setModal={setModalVisibility}
        />
        {/* <ModalWithButton 
                visible={isModalVisible} 
                setVisible={setModalVisibility}
            /> */}
        <ModalWithButtonDarkLarge
          visible={isModalVisible}
          setVisible={setModalVisibility}
          text={textModal}
        />
        <PopupFlexConfProd className={popUpType} text={popUpType} />
        <span className="test-id-span">{btoa(id)}</span>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <div>{messages}</div>
      <TestRenderData
        obj={obj}
        onClickListener={onClickListener}
        generateId={generateId}
        setModal={setModalVisibility}
        setPopup={setPopUpType}
      />
      {/* <ModalWithButton 
                visible={isModalVisible} 
                setVisible={setModalVisibility}
        />  */}
      <ModalWithButtonDarkLarge
        visible={isModalVisible}
        setVisible={setModalVisibility}
        text={textModal}
      />
      <ModalWithButtonDarkLargeForPost
        visible={false}
        setVisible={setModalVisibility}
        label="Краткие сведения в движках JS"
        creationDate="2020-05-10T15:25:37.602Z"
        text={textModal2}
      />
      <PopupFlexConfProd className={popUpType} text={popUpType} />
    </React.Fragment>
  );
};

const TestRenderData = (props) => {
  const { obj, onClickListener, generateId, setPopup, setModal } = props;

  return (
    <div className="test-block">
      Страница для тестирования
      <button id="getIdBtn" onClick={() => generateId()}>
        Сгенерировать ID
      </button>
      <button id="getTestProfile" onClick={() => onClickListener()}>
        Получить тестовые данные
      </button>
      <button
        id="getTestPopup"
        onClick={() => showPopup(mc.POPUP_CONTAINER_CENTER, setPopup)}
      >
        Всплывающее окно по центру
      </button>
      <button
        id="getTestPopup2"
        onClick={() => showPopup(mc.POPUP_CONTAINER_TOP_LEFT, setPopup)}
      >
        Всплывающее окно по левому краю
      </button>
      <button
        id="getTestPopup3"
        onClick={() => showPopup(mc.POPUP_CONTAINER_CENTER_ERROR, setPopup)}
      >
        Всплывающее окно ошибка
      </button>
      <button
        id="getTestPopup3"
        onClick={() => showPopup(mc.POPUP_CONTAINER_BOTTOM_RIGHT, setPopup)}
      >
        Всплывающее окно тест
      </button>
      <button id="getModalUI" onClick={() => showModal(setModal)}>
        Модальное окно
      </button>
      <button id="getModalUI" onClick={() => showModal(setModal)}>
        Модальное окно большое
      </button>
      <TestDataRender obj={obj} />
      <div id="tdChild">
        <span>{true ? "V" : "-"}</span>
        <SimpleCheckerChild id="283081264" />
      </div>
    </div>
  );
};

export default GetTestDataComp;
