import React from "react";
import { PopupWindowCenter } from "./popup";
import { connect } from "react-redux";
import { popupHide, popupShow } from "./popup-actions";

class PopupController extends React.Component {
  componentDidUpdate() {
    const { popups, popupHide } = this.props;
    console.log(`PopupController: componentDidUpdate()` + "\n");
    console.log(popups);

    if (popups.duration > 0) {
      setTimeout(() => {
        popupHide();
      }, popups.duration);
    }
  }

  render() {
    const { popups } = this.props;
    if (popups.isVisible && popups.duration > 0) {
      return (
        <PopupWindowCenter
          text={popups.data.text}
          className={popups.className}
        />
      );
    }
    return false;
  }
}

const mapStateToProps = ({ popups }) => {
  console.log(popups);
  return {
    popups: popups,
  };
};

const mapDispatchToProps = {
  popupShow,
  popupHide,
};

export const PopupMain = connect(
  mapStateToProps,
  mapDispatchToProps
)(PopupController);
