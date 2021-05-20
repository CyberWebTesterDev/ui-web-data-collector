import * as mc from './main-constants';
import GetDataFromWeb from '../../services/service';

{
}
const db = new GetDataFromWeb();
export const estimateProfile = async (
   e,
   stateProfileId,
   setStateFunc,
   setPopupClassName,
   showPopupFunc,
   syncFunc = null,
) => {
   setStateFunc({ currentEstimation: e.target.value });
   console.log(
      `Profile ${stateProfileId} estimation with value: ${e.target.value}`,
   );
   const res = await db.updateEstimationProfile(e.target.value, stateProfileId);
   if (res.rowCount > 0) {
      showPopupFunc(mc.POPUP_CONTAINER_BOTTOM_RIGHT, setPopupClassName, 3000);
      await syncFunc();
   } else {
      alert(`Профайл не был обновлен`);
   }
};
export const corrEstimateProfile = async (
   e,
   stateProfileId,
   setStateFunc,
   setPopupClassName,
   showPopupFunc,
) => {
   setStateFunc({ currentCorrEstimation: e.target.value });
   console.log(
      `Profile ${stateProfileId} correlation estimation with value: ${e.target.value}`,
   );
   const res = await db.updateCorrelationEstimationProfile(
      e.target.value,
      stateProfileId,
   );
   if (res.rowCount > 0) {
      showPopupFunc(mc.POPUP_CONTAINER_BOTTOM_RIGHT, setPopupClassName, 3000);
   } else {
      alert(`Профайл не был обновлен`);
   }
};
export const setProfileFavorite = async (
   bool,
   stateProfileId,
   setPopupClassName,
   showPopupFunc,
) => {
   console.log(
      `Profile ${stateProfileId} set favorite mark with value: ${bool}`,
   );
   const res = await db.updateIsFavorite(bool, stateProfileId);
   if (res.returnCode === 'SUCCESS') {
      showPopupFunc(mc.POPUP_CONTAINER_BOTTOM_RIGHT, setPopupClassName, 3000);
      //await db.waitTimeout(500);
      //location.reload();
   } else {
      alert(`Профайл не был обновлен`);
   }
};
export const setProfileRelatedProperty = async (e, stateProfileId) => {
   console.log(
      `Profile ${stateProfileId} set related flag with value: ${e.target.value}`,
   );
   const res = await db.updateIsRelated(e.target.value, stateProfileId);
   if (res.returnCode === 'SUCCESS') {
      //await db.waitTimeout(500);
      //location.reload();
   } else {
      alert(`Профайл не был обновлен`);
   }
};
export const setProfileBirthYear = async (
   e,
   stateProfileId,
   setPopupClassName,
   showPopupFunc,
   syncFunc,
) => {
   console.log(
      `Profile ${stateProfileId} set birth year value: ${e.target.value}`,
   );
   const res = await db.updateBirthYear(e.target.value, stateProfileId);
   if (res.returnCode === 'SUCCESS') {
      //await db.waitTimeout(500);
      //location.reload();
      await syncFunc();
      showPopupFunc(mc.POPUP_CONTAINER_BOTTOM_RIGHT, setPopupClassName, 3000);
   } else {
      alert(`Профайл не был обновлен`);
   }
};
export const saveHasChildProperty = async (e) => {
   await this.setState({ currentHasChildProperty: e.target.value });
   console.log(
      `Profile ${this.state.profile.id} saveHasChildProperty with value: ${this.state.currentHasChildProperty}`,
   );
   const res = await this.db.updateHasChild(
      this.state.currentHasChildProperty,
      this.state.profile.id,
   );
   if (res.rowCount > 0) {
      this.props.showPopup(
         mc.POPUP_CONTAINER_BOTTOM_RIGHT,
         this.setPopupClassName,
         3000,
      );
   } else {
      alert(`Профайл не был обновлен`);
   }
};
export const saveIsInRelationshipProperty = async (e) => {
   await this.setState({ currentIsInRelationShipProperty: e.target.value });
   console.log(
      `Profile ${this.state.profile.id} saveIsInRelationshipProperty with value: ${this.state.currentIsInRelationShipProperty}`,
   );
   const res = await this.db.updateIsInRelationship(
      this.state.currentIsInRelationShipProperty,
      this.state.profile.id,
   );
   if (res.rowCount > 0) {
      this.props.showPopup(
         mc.POPUP_CONTAINER_BOTTOM_RIGHT,
         this.setPopupClassName,
         3000,
      );
   } else {
      alert(`Профайл не был обновлен`);
   }
};
