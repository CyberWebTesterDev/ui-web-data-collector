import React from "react";
import { withGDWClass } from "../../hoc/with-getdata-from-web";
import ProfilePropsEnrichment from "../lists/profile-props-enrichment";
//import Spinner from "../../spinner/spinner";
import { withRouter } from "react-router-dom";
import { ControlPanelButton } from "../../buttons/control-panel-button";
import {
  checkProfileInDB,
  getProfileDataExtended,
  ProfileEstimation,
  ProfileCorrEstimation,
  HasChildProperty,
  IsInRelationshipProperty,
  SetFavoriteButton,
  ProfileYearSetComponent,
  SetRelatedButton,
  IsRelatedPropertySelector,
} from "../../helpers/vk-service";
import { VkProfileLabelPresentation } from "../vk-presentation-components/vk-profile-label-presentation";
import RowPresentationContainer from "../containers/row-presentation-container";
import * as mc from "../../helpers/main-constants";
import { PopupFlexConfProd } from "../../helpers/popup-util";
import { VkMainPropsContainer } from "../styled-forms/vk-forms/vk-main-props-container";
import { VkProfileBlockPresentationCompareContainer } from "../styled-forms/vk-forms/vk-profile-data-presentation-container";
import {
  setEnrichmentLocalStorageItem,
  getEnrichmentLocalStorageItem,
} from "../../utils/local-storage-util";
import { FavoriteMarlPresentationLabel } from "./vk-is-favorite-presentation-label";
import * as lodash from "lodash";

//TO DO подключить к store Redux
class ProfileEnrichmentContainer extends React.Component {
  db = new this.props.GetDataFromWeb();

  state = {
    profile: {},
    profileInDB: {},
    compareProfileExtendedData: {},
    popupClassName: "",
    loading: false,
    label: "",
    label2: "",
    estimationLabel: "",
    currentEstimation: 0,
    currentCorrEstimation: 0,
    currentHasChildProperty: 0,
    currentIsInRelationShipProperty: 0,
    local: ""
  };

  setPopupClassName = (newClass) => {
    this.setState({ popupClassName: newClass });
  };

  saveHasChildProperty = async (e) => {
    await this.setState({ currentHasChildProperty: e.target.value });
    console.log(
      `Profile ${this.state.profile.id} saveHasChildProperty with value: ${this.state.currentHasChildProperty}`
    );
    const res = await this.db.updateHasChild(
      this.state.currentHasChildProperty,
      this.state.profile.id
    );
    if (res.rowCount > 0) {
      this.props.showPopup(
        mc.POPUP_CONTAINER_BOTTOM_RIGHT,
        this.setPopupClassName,
        3000
      );
      await this.synchronizeUIChangedData();
    } else {
      alert(`Профайл не был обновлен`);
    }
  };

  saveIsInRelationshipProperty = async (e) => {
    await this.setState({ currentIsInRelationShipProperty: e.target.value });
    console.log(
      `Profile ${this.state.profile.id} saveIsInRelationshipProperty with value: ${this.state.currentIsInRelationShipProperty}`
    );
    const res = await this.db.updateIsInRelationship(
      this.state.currentIsInRelationShipProperty,
      this.state.profile.id
    );
    if (res.rowCount > 0) {
      this.props.showPopup(
        mc.POPUP_CONTAINER_BOTTOM_RIGHT,
        this.setPopupClassName,
        3000
      );
      await this.synchronizeUIChangedData();
    } else {
      alert(`Профайл не был обновлен`);
    }
  };

  updateProfile = async () => {
    console.log(`updateProfile has been called`);
    if (Object.keys(this.state.profile).length > 0) {
      this.setState({ loading: true });
      let res = await this.props.GetDataFromWeb.enrichProfileToDBStatic(
        this.state.profile
      );
      if (res.returnCode === "SUCCESS") {
        this.setState({ loading: false });
        this.props.showPopup(
          mc.POPUP_CONTAINER_BOTTOM_RIGHT,
          this.setPopupClassName,
          3000
        );
        //await this.db.waitTimeout(100);
        //переделать на способ без обновления страницы
        await this.synchronizeUIChangedData();
        //alert(`Профайл ${this.state.profile.id} успешно обновлен`);
      } else {
        this.setState({ loading: false });
        alert(
          `При обновлении профайла ${this.state.profile.id} возникла проблема`
        );
      }
    } else {
      throw Error(`The profile data is not valid`);
    }
  };

  synchronizeUIChangedData = async () => {
    const profileData = await this.props.GetDataFromWeb.getProfileInfoByIdStatic(
      this.state.profile.id
    );
    const profileDB = await checkProfileInDB(this.state.profile.id);
    const extendedProfile = await getProfileDataExtended(this.state.profile.id);
    this.setState({ compareProfileExtendedData: extendedProfile[0] });
    this.setState({
      profileInDB: profileDB,
    });
    this.setState({
      profile: profileData,
    });
    this.setState({
      label: `Профайл уже был записан в БД. Дата обновления: ${this.state.profileInDB.profileUpdateTime}`,
      label2: `Профайл был проверен, дата обновления: ${this.state.profileInDB.profileCheckUpdateTime}`,
      estimationLabel: `Профайл был оценен на: ${this.state.profileInDB.estimation} из 10`,
    });
  };

  updateProfileCheck = async () => {
    console.log(`updateProfileCheck has been called`);

    if (Object.keys(this.state.profile).length > 0) {
      this.setState({ loading: true });
      const { id, first_name, last_name } = this.state.profile;
      let res = await this.props.GetDataFromWeb.insertUpdateCheckedProfileSingleStatic(
        id,
        first_name,
        last_name
      );
      if (res.returnCode === "SUCCESS") {
        this.setState({ loading: false });
        this.props.showPopup(
          mc.POPUP_CONTAINER_BOTTOM_RIGHT,
          this.setPopupClassName,
          3000
        );
        //await this.db.waitTimeout(100);
        await this.synchronizeUIChangedData();
        //alert(`Профайл ${this.state.profile.id} успешно обновлен`);
      } else {
        this.setState({ loading: false });
        alert(
          `При обновлении профайла ${this.state.profile.id} возникла проблема`
        );
      }
    }
  };

  async componentDidMount() {
    console.log(`ProfileEnrichmentContainer.componentDidMount enter`);

    let id = this.props.match.params.id;
    let localStorage = "";
    localStorage = getEnrichmentLocalStorageItem(id);
    if (localStorage) {
      console.log(`Данные по профайлу найдены в локальном хранилище`);
      console.log(localStorage);
      await this.setState({ local: localStorage });
    }
    console.log(`ProfileEnrichmentContainer: id from URL params is ${id}`);
    if (!id) {
      id = "";
    }
    this.setState({ loading: true });
    const profileData = await this.props.GetDataFromWeb.getProfileInfoByIdStatic(
      id
    );
    const profileDB = await checkProfileInDB(id);
    const extendedProfile = await getProfileDataExtended(id);
    this.setState({ compareProfileExtendedData: extendedProfile[0] });

    if (profileDB.hasProfileRow) {
      console.log(
        `ProfileEnrichmentContainer: Profile ${id} exists in table profiles`
      );
      if (profileDB.hasProfileCheckRow) {
        console.log(
          `ProfileEnrichmentContainer: Profile ${id} exists in table profiles_check`
        );
        //обновление стейта разнесено, так как нужно чтобы profileInDB был уже записан на момент записи зависимых свойств
        this.setState({
          profileInDB: profileDB,
        });
        this.setState({
          label: `Профайл уже был записан в БД. Дата обновления: ${this.state.profileInDB.profileUpdateTime}`,
          label2: `Профайл был проверен, дата обновления: ${this.state.profileInDB.profileCheckUpdateTime}`,
          estimationLabel: `Профайл был оценен на: ${this.state.profileInDB.estimation} из 10`,
        });
      } else {
        this.setState({
          profileInDB: profileDB,
        });
        this.setState({
          label: `Профайл уже был записан в БД. Дата обновления: ${this.state.profileInDB.profileUpdateTime}`,
        });
      }
    } else {
      console.log(
        `ProfileEnrichmentContainer: Profile ${id} does not exist in DB`
      );
      this.setState({ label: `Профайл не найден в БД` });
    }
    console.log(
      `ProfileEnrichmentContainer: data for profile ${id} has been received`
    );
    console.log(profileData);
    profileData["last_seen.time"] = this.props.convertDateFromTimestamp(
      profileData["last_seen.time"]
    );
    await this.setState({
      profile: profileData,
      loading: false,
    });
    if (!localStorage) {
      setEnrichmentLocalStorageItem(this.state.profile.id, {
        id: this.state.profile.id,
        dateChecked: new Date().toISOString(),
      });
    }
  }

  // async componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (prevState !== lodash.isEqual(this.state)) {
  //     await this.synchronizeUIChangedData();
  //   }
  // }

  render() {
    const { id } = this.props.match.params;
    const { showPopup } = this.props;
    return !this.state.loading && id ? (
      <React.Fragment>
        <div className="profile-detail-header">
          <h4>Данные о профайле с ID {this.state.profile.id}</h4>
          {this.state.local && (
            <h3>Данные из локального хранилища: {this.state.local}</h3>
          )}
          <VkProfileLabelPresentation
            label={this.state.label}
            label2={this.state.label2}
            estimationLabel={this.state.estimationLabel}
            hasChild={this.state.profileInDB.hasChild}
            isInRelationship={this.state.profileInDB.isInRelationship}
          />
        </div>
        <ControlPanelButton
          handler={this.updateProfile}
          buttonLabel={
            this.state.profileInDB.hasProfileRow
              ? "Перезаписать в БД"
              : "Записать в БД"
          }
        />
        {this.state.profileInDB.hasProfileCheckRow && (
          <SetFavoriteButton
            bool={!this.state.compareProfileExtendedData.is_favorite}
            id={this.state.profile.id}
            setPopupClassName={this.setPopupClassName}
            showPopupFunc={showPopup}
            buttonLabel={
              this.state.compareProfileExtendedData.is_favorite
                ? "Убрать из избранных"
                : "Добавить в избранные"
            }
          />
        )}
        {!this.state.profileInDB.hasProfileCheckRow &&
          this.state.profileInDB.hasProfileRow && (
            <ControlPanelButton
              handler={this.updateProfileCheck}
              buttonLabel="Записать в БД проверок"
            />
          )}
        {this.state.profileInDB.hasProfileCheckRow && (
          <ProfileEstimation
            stateProfileId={this.state.profile.id}
            stateCurrentEstimation={this.state.currentEstimation}
            setStateFunc={this.setState.bind(this)}
            setPopupClassName={this.setPopupClassName}
            showPopupFunc={showPopup}
            syncFunc={this.synchronizeUIChangedData}
          />
        )}
        {this.state.profileInDB.hasProfileCheckRow && (
          <ProfileCorrEstimation
            stateProfileId={this.state.profile.id}
            stateCurrentCorrEstimation={this.state.currentCorrEstimation}
            setStateFunc={this.setState.bind(this)}
            setPopupClassName={this.setPopupClassName}
            showPopupFunc={showPopup}
          />
        )}
        {this.state.profileInDB.hasProfileCheckRow && (
          <HasChildProperty
            currentHasChildProperty={this.state.currentHasChildProperty}
            onChangeListener={this.saveHasChildProperty}
          />
        )}
        {this.state.profileInDB.hasProfileCheckRow && (
          <IsInRelationshipProperty
            currentIsInRelationShipProperty={
              this.state.currentIsInRelationShipProperty
            }
            onChangeListener={this.saveIsInRelationshipProperty}
          />
        )}
        {this.state.profileInDB.hasProfileCheckRow && (
          <ProfileYearSetComponent
            stateProfileId={this.state.profile.id}
            setStateFunc={this.setState.bind(this)}
            setPopupClassName={this.setPopupClassName}
            showPopupFunc={showPopup}
            syncFunc={this.synchronizeUIChangedData}
          />
        )}
        {this.state.profileInDB.hasProfileCheckRow && (
          <IsRelatedPropertySelector profileId={this.state.profile.id} />
        )}
        {this.state.compareProfileExtendedData && (
          <FavoriteMarlPresentationLabel
            isFavorite={this.state.compareProfileExtendedData.is_favorite}
          />
        )}
        {this.state.profileInDB.hasProfileCheckRow && (
          <VkProfileBlockPresentationCompareContainer
            profile={this.state.profile}
            compareProfile={this.state.compareProfileExtendedData}
          />
        )}
        {!this.state.profileInDB.hasProfileCheckRow && (
          <VkProfileBlockPresentationCompareContainer
            profile={this.state.profile}
          />
        )}
        {/*<RowPresentationContainer label="Текущие данные по профайлу из БД">*/}
        {/*    <ProfilePropsEnrichment profile={this.state.profile} />*/}
        {/*    <ProfilePropsEnrichment profile={this.state.compareProfileExtendedData} />*/}
        {/*</RowPresentationContainer>*/}
        <PopupFlexConfProd
          className={this.state.popupClassName}
          text="Данные успешно обновлены"
        />
      </React.Fragment>
    ) : id ? (
      // <Spinner requestName='Получение данных о профайле' />
      <div> Получение данных профайла </div>
    ) : (
      <span>Не передан ID профайла</span>
    );
  }
}

//props
// GetDataFromWeb={GetDataFromWeb}
// nullArrayIndicator={nullArrayIndicator}
// convertDateFromTimestamp={convertDateFromTimestamp}
// showPopup={showPopup}
//children
//PopupFlexConfProd
//Spinner
export default withRouter(
  withGDWClass(ProfileEnrichmentContainer, "Получение данных о профайле")
);
