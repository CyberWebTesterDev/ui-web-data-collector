import React from 'react';
import GetDataFromWeb from '../../services/service';
import * as popUps from '../helpers/popup-util';
import Spinner from '../spinner/spinner';
import * as localStorage from '../utils/local-storage-util';
import * as mc from '../helpers/main-constants';

export const withMainProps = (Wrapped) => {
  return (props) => {
    return (
      <Wrapped
        {...props}
        service={new GetDataFromWeb()}
        popUps={popUps}
        spinner={Spinner}
        localStorage={localStorage}
        mainConstants={mc}
      />
    );
  };
};
