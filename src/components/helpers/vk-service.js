import React from "react";
import GetDataFromWeb from "../../services/service";
import {
  estimateProfile,
  corrEstimateProfile,
  setProfileFavorite,
  setProfileBirthYear,
  setProfileRelatedProperty,
} from "./profile-enrichment-helper";

export const onClickListenerGetById = (e) => {
  e.preventDefault();
  let profileId = document.getElementById("vkid").value;
  if (profileId === "" || profileId === null || isNaN(profileId)) {
    alert("Введите ID. Должен содержать цифры");
    return;
  }
  getInfobyId(profileId).then((data) => {
    console.log(data);
    return data;
  });
};

export const getInfobyId = async (id) => {
  const gdf = new GetDataFromWeb();

  const data = await gdf.getProfileInfoById(id);
  return data;
};

export const checkProfileInDB = async (profileId) => {
  if (profileId) {
    try {
      let res1 = await GetDataFromWeb.getProfileFromDBStatic(profileId);
      let res2 = await GetDataFromWeb.getProfileCheckByIdStatic(profileId);
      GetDataFromWeb.formatDataExtLightStatic(
        res1,
        GetDataFromWeb.dateFieldsStatic
      );
      GetDataFromWeb.formatDataExtLightStatic(
        res2,
        GetDataFromWeb.dateFieldsStatic
      );
      if (res1.length > 0) {
        if (res2.length > 0) {
          return {
            hasProfileRow: true,
            profileUpdateTime: res1[0].update_time,
            hasProfileCheckRow: true,
            profileCheckUpdateTime: res2[0].check_update,
            isInRelationship: res2[0].is_in_relationship,
            estimation: res2[0].estimation,
            hasChild: res2[0].has_child,
            correlationEst: res2[0].correlation_est,
          };
        }
        return {
          hasProfileRow: true,
          profileUpdateTime: res1[0].update_time,
          hasProfileCheckRow: false,
        };
      }
      return { hasProfileRow: false };
    } catch (e) {
      throw Error(e);
    }
  }
};

export const getProfileDataExtended = async (profileId) => {
  if (profileId) {
    try {
      let res = await GetDataFromWeb.getProfileDataExtendedStatic(profileId);
      GetDataFromWeb.formatDataExtLightStatic(
        res,
        GetDataFromWeb.dateFieldsStatic
      );
      if (res.length > 0) {
        return res;
      }
      return res;
    } catch (e) {
      throw Error(e);
    }
  }
};

export const SetFavoriteButton = ({
  bool,
  id,
  buttonLabel,
  setPopupClassName,
  showPopupFunc,
}) => {
  return (
    <div id="controlPanel">
      <button
        className="btn-primary"
        onClick={() =>
          setProfileFavorite(bool, id, setPopupClassName, showPopupFunc)
        }
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export const IsRelatedPropertySelector = ({ profileId }) => {
  return (
    <label>
      Была/есть какая-либо личная связь?
      <select
        value=""
        onChange={(e) => {
          setProfileRelatedProperty(e, profileId);
        }}
      >
        <option value="0">-</option>
        <option value="true">Да</option>
        <option value="false">Нет</option>
      </select>
    </label>
  );
};

export const ProfileEstimation = ({
  stateProfileId,
  stateCurrentEstimation,
  setStateFunc,
  setPopupClassName,
  showPopupFunc,
  syncFunc,
}) => {
  return (
    <label>
      Оцените профайл:
      <select
        value={stateCurrentEstimation}
        onChange={(e) =>
          estimateProfile(
            e,
            stateProfileId,
            setStateFunc,
            setPopupClassName,
            showPopupFunc,
            syncFunc
          )
        }
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
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
    </label>
  );
};

export const ProfileYearSetComponent = ({
  stateProfileId,
  setStateFunc,
  setPopupClassName,
  showPopupFunc,
    syncFunc
}) => {
  return (
    <label>
      Укажите год рождения:
      <select
        value="-"
        onChange={(e) =>
          setProfileBirthYear(
            e,
            stateProfileId,
            setPopupClassName,
            showPopupFunc,
              syncFunc
          )
        }
      >
        <option value="0">-</option>
        <option value="1985">1985</option>
        <option value="1986">1986</option>
        <option value="1987">1987</option>
        <option value="1988">1988</option>
        <option value="1989">1989</option>
        <option value="1990">1990</option>
        <option value="1991">1991</option>
        <option value="1992">1992</option>
        <option value="1993">1993</option>
        <option value="1994">1994</option>
        <option value="1995">1995</option>
        <option value="1996">1996</option>
        <option value="1997">1997</option>
        <option value="1998">1998</option>
        <option value="1999">1999</option>
        <option value="2000">2000</option>
        <option value="2001">2001</option>
        <option value="2002">2002</option>
      </select>
    </label>
  );
};

export const ProfileCorrEstimation = ({
  stateProfileId,
  stateCurrentCorrEstimation,
  setStateFunc,
  setPopupClassName,
  showPopupFunc,
}) => {
  return (
    <label>
      Оцените вероятность отношений:
      <select
        className="select-rating-correlation"
        value={stateCurrentCorrEstimation}
        onChange={(e) =>
          corrEstimateProfile(
            e,
            stateProfileId,
            setStateFunc,
            setPopupClassName,
            showPopupFunc
          )
        }
      >
        <option value="0">-</option>
        <option value="0.1">0.1</option>
        <option value="0.2">0.2</option>
        <option value="0.3">0.3</option>
        <option value="0.4">0.4</option>
        <option value="0.45">0.45</option>
        <option value="0.5">0.5</option>
        <option value="0.55">0.55</option>
        <option value="0.6">0.6</option>
        <option value="0.65">0.65</option>
        <option value="0.7">0.7</option>
        <option value="0.75">0.75</option>
        <option value="0.8">0.8</option>
        <option value="0.9">0.9</option>
      </select>
    </label>
  );
};

export const HasChildProperty = (props) => {
  return (
    <label>
      Есть ребенок/дети?:
      <select
        value={props.currentHasChildProperty}
        onChange={(e) => props.onChangeListener(e)}
      >
        <option value="0">-</option>
        <option value="true">Да</option>
        <option value="false">Нет</option>
      </select>
    </label>
  );
};

export const IsInRelationshipProperty = (props) => {
  return (
    <label>
      Состоит в отношениях?
      <select
        value={props.currentIsInRelationShipProperty}
        onChange={(e) => props.onChangeListener(e)}
      >
        <option value="0">-</option>
        <option value="true">Да</option>
        <option value="false">Нет</option>
      </select>
    </label>
  );
};
