import React from 'react';

export const showPopup = (type, setFunc, delay = 2000) => {
  setFunc(type);
  setTimeout(() => {
    setFunc(null);
  }, delay);
};
export const callPopUp = (type, setFunc, delay = 2000) => {
  setFunc(type);
  setTimeout(() => {
    setFunc(null);
  }, delay);
};
export const showPopupClass = (type, setStateFunc, delay = 2000) => {
  setStateFunc((type) => {
    return {
      popupClassName: type,
    };
  });
  setTimeout(() => {
    setStateFunc(() => {
      return {
        popupClassName: null,
      };
    });
  }, delay);
};
export const closePopup = (setFunc) => {
  setFunc(null);
};
const PopupFlexConf = (props) => {
  return (
      <div className={`${props.className}`} id="popUpContTest">
         <span id="popupTextHolder">
            !! Всплывающее окно с классом {props.text}
         </span>
      </div>
  );
};
//просто для сравнения синтаксиса
const PopupFlexConfProd = (props) => {
  if (props.className) {
    return (
         <div className={`${props.className}`} id="popUpContTest">
            <span id="popupTextHolder">{props.text}</span>
         </div>
    );
  }
  return null;
};
export const PopupCenterLarge = ({
  className = '',
  text = '',
  show = false,
}) => {
  if (show) {
    return (
         <div className={`${className}`} id="popUpContTest">
            <span id="popupTextHolder">{text}</span>
         </div>
    );
  }
  return false;
};
export const PopupFlexConfProdLarge = ({
  className = '',
  header = '',
  text = '',
  show = false,
}) => {
  if (show) {
    return (
         <div className={`${className}`} id="popUpContTest">
            <span id="popupTextHolder">{header}</span>
            <p id="textHolder">{text}</p>
         </div>
    );
  }
  return false;
};
const CallPopUpFlex = (delay) => {
  let doPopUpShow = true;
  setTimeout(() => {
    doPopUpShow = false;
  }, delay);
  return doPopUpShow && <PopupWindowTopLeft text="SavePostData" />;
};

export class PopupWindowTopLeftClass extends React.Component {
  componentDidMount() {
    console.log('componentDidMount()');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount()');
  }

  render() {
    console.log('render()');
    return (
         <div className="popup-container-top-left" id="popUpContTest">
            <div id="popupTextHolder">{this.props.text}</div>
         </div>
    );
  }
}

const PopupWindowTopLeft = (props) => {
  return (
      <div className="popup-container-top-left" id="popUpContTest">
         <div id="popupTextHolder">{props.text}</div>
      </div>
  );
};
export const popupDefaultTextMessages = [
  'Данные с сервера успешно загружены',
  'При выполнении запроса произошла ошибка',
];
const popupClasses = [
  'popup-container-center',
  'popup-container-top-left',
  'popup-container-center-error',
  'popup-container-bottom-right',
];
const showPopup_old = (popupClassName, delay = 0) => {
  let popupHTML = document.getElementById('popUpContTest');
  let popupClass;
  if (popupHTML && popupHTML.className) {
    popupClass = popupHTML.className;
    if (delay > 0) {
      popupClass === popupClassName
        ? (popupHTML.className = `${popupClassName} invinsible`)
        : (popupHTML.className = popupClassName);
      setTimeout(() => {
        showPopup_old(popupClassName);
      }, delay);
    }
    if (delay === 0) {
      popupClass === popupClassName
        ? (popupHTML.className = `${popupClassName} invinsible`)
        : (popupHTML.className = popupClassName);
    }
  }
};
export {
  showPopup_old,
  popupClasses,
  PopupWindowTopLeft,
  PopupFlexConf,
  PopupFlexConfProd,
  CallPopUpFlex,
};
