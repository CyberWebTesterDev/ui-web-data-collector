import React from "react";
import { SConsumer } from "../../services/context-provider";
import GetDataFromWeb from "../../services/service";
import {
  nullArrayIndicator,
  convertDateFromTimestamp,
} from "../../services/helper";
import { showPopup } from "../helpers/popup-util";
import Spinner from "../spinner/spinner";
import { useParams } from "react-router-dom";

const withGetDataFromWeb = (Wrapped) => {
  return (props) => {
    return (
      <SConsumer>
        {(getDatafromWeb) => {
          return <Wrapped {...props} getDatafromWeb={getDatafromWeb} />;
        }}
      </SConsumer>
    );
  };
};

export default withGetDataFromWeb;

export const withGDWClass = (Wrapped, requestNameSpinner = null) => {
  return (props) => {
    return (
      <Wrapped
        {...props}
        GetDataFromWeb={GetDataFromWeb}
        nullArrayIndicator={nullArrayIndicator}
        convertDateFromTimestamp={convertDateFromTimestamp}
        showPopup={showPopup}
      />
    );
  };
};
