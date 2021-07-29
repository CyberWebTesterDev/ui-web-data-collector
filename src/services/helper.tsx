import * as React from 'react';
import GetDataFromWeb from '../services/service';
import * as mc from '../components/helpers/main-constants';
import { showPopup, PopupFlexConfProd } from '../components/helpers/popup-util';
import { isEmpty } from 'lodash';
import { TVKProfile } from '../components/forms/vk/vk-types';

export function callerName() {
  try {
    throw new Error();
  } catch (e) {
    try {
      return e.stack; //.split('at ')[3].split(' ')[0];
    } catch (e) {
      return '';
    }
  }
}

export const getIndexInArrayOfObjectsById = (id: string, array: Record<string, any>[]): number => {
  if (array.length > 0) {
    return array.findIndex((el, idx) => {
      let foundIndex = 0;
      for (let key in el) {
        if (key === 'id') {
          if (el[key] === id) {
            foundIndex = idx;
          }
        }
      }
      return Boolean(foundIndex);
    });
  }
  return -1;
};

export const intersectIdChecker = (sourceArray: TVKProfile[], targetArray: Record<string, any>[]) => {
  sourceArray.forEach((el, idx) => {
    if (el) {
      //console.log(`intersectIdChecker: checking for intersection ${el.id}(${typeof (el.id).toString()})`);

      let findIdx = targetArray.findIndex((element) => {
        //console.log(`intersectIdChecker: comparing
        // ${el.id}(${typeof (el.id).toString()}) with ${element.vk_id}(${typeof element.vk_id})`);
        return element.vk_id === el.id.toString();
      });
      if (findIdx !== -1) {
        console.log(
               `intersectIdChecker: intersection for ${el.id} has been found with ${targetArray[findIdx].vk_id}`,
        );
        sourceArray[idx].is_checked = targetArray[findIdx].is_checked;
        sourceArray[idx].first_checked = targetArray[findIdx].first_checked;
        sourceArray[idx].check_update = targetArray[findIdx].check_update;
        sourceArray[idx].estimation = targetArray[findIdx].estimation;
        sourceArray[idx].has_child = targetArray[findIdx].has_child;
        sourceArray[idx].is_in_relationship =
               targetArray[findIdx].is_in_relationship;
        sourceArray[idx].correlation_est =
               targetArray[findIdx].correlation_est;
      } //console.log(`intersectIdChecker: intersection for ${el.id} was not found`);
    }
  });
};

export const getIndexInArrayOfObjectsById2 = (id: string, array: Record<string, string | {}>[]): number | boolean => {
  if (id) {
    if (array.length > 0) {
      return array.findIndex((object) => object.id === id);
    }
  }
  return false;
};

export const dateParser = (dateString: string): string => {
  if (dateString) {
    return dateString.replace('T', ' ').replace('Z', '');
  } else {
    throw new Error('The passed parameter is empty or has not string type');
  }
};

const countNonNullElementsInArray = (arr: any[]): number => {
  if (isEmpty(arr)) {return 0;}
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== undefined && arr[i] !== null) {
      count++;
    }
  }
  return count;
};

type TnullArrayIndicator = (param: any[]) => boolean;

export const nullArrayIndicator: TnullArrayIndicator = (checkData) => {
  if (Array.isArray(checkData)) {
    if (checkData.length == 0) {
      return true;
    } else {
      return false;
    }
  } else {
    throw new Error(
         `nullArrayIndicator: Not an array passed in function but: ${typeof checkData}`,
    );
  }
};

export const convertDateFromTimestamp = (ts: number) => {
  if (ts) {
    return new Date(ts * 1000)
      .toISOString()
      .replace('T', ' ')
      .replace('Z', ' ');
  }
  return;
};

const vkDataMapper = (value: number, prop: string) => {
  if (prop === 'relation') {
    switch (value) {
      case 1:
        return 'not married';
      case 2:
        return 'has friend';
      case 3:
        return 'engagement';
      case 4:
        return 'married';
      case 5:
        return 'complex';
      case 6:
        return 'active search';
      case 7:
        return 'in love';
      case 8:
        return 'unofficial marriage';
      case 0:
        return 'not reported';
      default:
        return 'unknown value';
    }
  }

  if (prop === 'sex') {
    switch (value) {
      case 1:
        return 'female';
      case 2:
        return 'male';
      default:
        return 'unknown value';
    }
  }

  return 'unknown value';
};

export const RatingRings = () => {
  return (
      <React.Fragment>
         <span id="10">o</span>
         <span id="9">o</span>
         <span id="8">o</span>
         <span id="7">o</span>
         <span id="6">o</span>
         <span id="5">o</span>
         <span id="4">o</span>
         <span id="3">o</span>
         <span id="2">o</span>
         <span
            // @ts-ignore
            onClick={(e) => console.log(`span with id ${e.target.id}`)}
            id="1"
         >
            o
         </span>
      </React.Fragment>
  );
};

export const RatingRingsTest = () => {

  return (
      <React.Fragment>
         <span id="10">o</span>
         <span id="9">o</span>
         <span id="8">o</span>
         <span id="7">o</span>
         <span id="6">o</span>
         <span id="5">o</span>
         <span id="4">o</span>
         <span id="3">o</span>
         <span id="2">o</span>
         <span
            // @ts-ignore
            onClick={(e) => console.log(`span with id ${e.target.id}`)}
            id="1"
         >
            o
         </span>
      </React.Fragment>
  );
};

export const SimpleRating = ({ rating }: {rating: string;}) => {
  return (
      <div className="simple-rating">
         <span>{rating}</span>
         <span>/10</span>
      </div>
  );
};

export const SimpleEstimation = ({ id }: {id: string;}) => {
  return (
      <React.Fragment>
         <select
            id={id}
            onChange={(e) => console.log(e.target.value, e.target.id)}
         >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
         </select>
      </React.Fragment>
  );
};

export const ComplexEstimation = ({ id, rating }: {id: string; rating?: string;}) => {
  const gdf = new GetDataFromWeb();

  //const [stateRating, setStateRating] = useState(null);
  const [popUpType, setPopUpType] = React.useState();

  const estimateProfile = async (estimation: string, profileId: string) => {
    //setStateRating(estimation);
    try {
      let res = await gdf.updateEstimationProfile(estimation, profileId);
      if (res.rowCount) {
        console.log(
               `Estimation of profile with id ${profileId} has been successfully processed`,
        );
        showPopup(mc.POPUP_CONTAINER_BOTTOM_RIGHT, setPopUpType, 1000);
      } else {
        console.warn(`Check the estimation in DB for ${profileId}`);
        showPopup(mc.POPUP_CONTAINER_CENTER_ERROR, setPopUpType, 1000);
      }
    } catch (e) {
      throw e;
    }
  };

  return (
      <React.Fragment>
         <select
            className="select-rating"
            id={id}
            onChange={(e) => estimateProfile(e.target.value, e.target.id)}
         >
            <option value="0">-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="4.5">4.5</option>
            <option value="5">5</option>
            <option value="5.5">5.5</option>
            <option value="6">6</option>
            <option value="6.5">6.5</option>
            <option value="7">7</option>
            <option value="7.5">7.5</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
         </select>
         <div className="simple-rating">
            <span>{rating ? rating : '-'}</span>
            <span>/10</span>
         </div>
         <PopupFlexConfProd
            className={popUpType}
            text="Профайл успешно оценен"
         />
      </React.Fragment>
  );
};

export const ComplexCorrelationEstimation = ({ id, corrEst }: Record<string, string | undefined>) => {
  const gdf = new GetDataFromWeb();

  //const [stateRating, setStateRating] = useState<string>('');
  const [popUpType, setPopUpType] = React.useState<string>();

  const corrEstimateProfile = async (corrEst: string, profileId: string) => {
    //setStateRating(corrEst);
    try {
      let res = await gdf.updateCorrelationEstimationProfile(
        corrEst,
        profileId,
      );
      if (res.rowCount) {
        console.log(
               `Correlation estimation of profile with id ${profileId} has been successfully processed`,
        );
        showPopup(mc.POPUP_CONTAINER_BOTTOM_RIGHT, setPopUpType, 1000);
      } else {
        console.warn(
               `Check the correlation estimation in DB for ${profileId}`,
        );
        showPopup(mc.POPUP_CONTAINER_CENTER_ERROR, setPopUpType, 1000);
      }
    } catch (e) {
      throw e;
    }
  };

  return (
      <React.Fragment>
         <select
            className="select-rating-correlation"
            id={id}
            onChange={(e) => corrEstimateProfile(e.target.value, e.target.id)}
         >
            <option value="0">-</option>
            <option value="0.1">0.1</option>
            <option value="0.2">0.2</option>
            <option value="0.3">0.3</option>
            <option value="0.4">0.4</option>
            <option value="0.5">0.5</option>
            <option value="0.55">0.55</option>
            <option value="0.6">0.6</option>
            <option value="0.65">0.65</option>
            <option value="0.7">0.7</option>
            <option value="0.75">0.75</option>
            <option value="0.8">0.8</option>
            <option value="0.9">0.9</option>
         </select>
         <div className="simple-rating">
            <span>{corrEst ? corrEst : '-'}</span>
            <span>/1</span>
         </div>
         <PopupFlexConfProd
            className={popUpType}
            text="Профайл успешно оценен"
         />
      </React.Fragment>
  );
};

export { vkDataMapper, countNonNullElementsInArray };
