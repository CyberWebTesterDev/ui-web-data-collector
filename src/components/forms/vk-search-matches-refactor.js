import * as React from "react";
import { withMainProps } from "../hoc/with-main-props";
import {
  vkMatchProfilesMatchesRequested,
  vkMatchProfilesMatchesLoaded,
  vkMatchSearchFormChange,
  vkValidateSearchForm,
  spinnerShow,
  spinnerHide,
} from "../../actions/actions";
import { connect } from "react-redux";
import store from "../../store";
import { RenderForm } from "./vk-presentation-components/vk-searh-form";
import { TableAssmeble } from "./tables/table-simple";
import { popupShow } from "./popups/popup-actions";
import {
  POPUP_CONTAINER_CENTER_ERROR,
  POPUP_CONTAINER_CENTER_LARGE,
} from "../helpers/main-constants";
import {
  getMatchesSelector,
  getNotNullLengthMatchesSelector,
} from "./vk-search-matches-selectors";
import { isEmpty } from "lodash";

class GetMatchesFormController extends React.Component {
  componentDidMount() {
    this.props.vkValidateSearchForm();
    console.log(`GetMatchesFormController props after selection: ` + "\n");
    console.log(this.props);
  }

  componentDidUpdate() {
    console.log(`GetMatchesFormController props after update: ` + "\n");
    console.log(this.props.vkMatches);
  }

  onClickListener = async () => {
    //еще один вариант диспатча через store
    //store.dispatch({type: 'SPINNER_SHOW', payload: 'SHOW FROM STORE'});
    //store.dispatch(popupShow('TEST', 5000));

    const {
      service,
      spinnerShow,
      spinnerHide,
      vkMatches,
      searchForm,
      vkMatchProfilesMatchesLoaded,
    } = this.props;

    const {
      searchString,
      quantity,
      offset,
      pickedAgeFrom,
      pickedAgeTo,
      pickedYear,
      pickedCity,
      pickedMonth,
      pickedDay,
    } = searchForm;

    if (!(pickedYear || pickedAgeFrom || pickedAgeTo)) {
      store.dispatch(
        popupShow(POPUP_CONTAINER_CENTER_ERROR, "Задайте критерии поиска", 5000)
      );
      return;
    }

    try {
      spinnerShow(`Поиск подходящих профайлов`);
      let matches = await service.getMatchProfilesByQuery(
        searchString ? searchString : "null",
        quantity ? quantity : "0",
        offset ? offset : "0",
        pickedAgeFrom ? pickedAgeFrom : "0",
        pickedAgeTo ? pickedAgeTo : "0",
        pickedCity ? pickedCity : "0",
        pickedYear,
        pickedMonth ? pickedMonth : "0",
        pickedDay ? pickedDay : "0"
      );
      spinnerHide();
      vkMatchProfilesMatchesLoaded(matches);
    } catch (e) {
      spinnerHide();
      console.error(e);
      throw e;
    }
  };

  onChangeListener = (e) => {
    // console.log(`GetMatchesFormController: onChangeListener has been called with params:
    // ${e.target.id}, ${e.target.value}`);

    this.props.vkMatchSearchFormChange(e.target.id, e.target.value);
    this.props.vkValidateSearchForm();
  };

  render() {
    const { searchForm, vkMatches } = this.props;
    return (
      <div>
        {searchForm.searchString && <h2>{searchForm.searchString}</h2>}
        <RenderForm
          onChangeListener={this.onChangeListener}
          searchString={searchForm.searchString}
          quantity={searchForm.quantity}
          pickedAgeTo={searchForm.pickedAgeTo}
          pickedAgeFrom={searchForm.pickedAgeFrom}
          pickedYear={searchForm.pickedYear}
          isButtonDisabled={searchForm.fieldsValidation.isButtonDisabled}
          btnAdditionalClass={searchForm.fieldsValidation.btnAdditionalClass}
          isLabelErrorTextHidden={
            searchForm.fieldsValidation.isLabelErrorTextHidden
          }
          labelErrorText={searchForm.fieldsValidation.labelErrorText}
          isOffsetValid={searchForm.fieldsValidation.isOffsetValid}
          isPickedYearValid={searchForm.fieldsValidation.isPickedYearValid}
          isPickedAgeFromValid={
            searchForm.fieldsValidation.isPickedAgeFromValid
          }
          isPickedAgeToValid={searchForm.fieldsValidation.isPickedAgeToValid}
          onClickListener={this.onClickListener}
        />
        {isEmpty(vkMatches.matchedProfiles) && (
          <div className="vk-page-text">
            Не найдено подходящих {vkMatches.matchesLength}
          </div>
        )}
        <TableAssmeble data={vkMatches.matchedProfiles} />
      </div>
    );
  }
}

const mapStateToProps = ({ vkData }) => {
  console.log(vkData);
  return {
    vkMatches: {
      ...vkData.vkMatches,
      matchedProfiles: getMatchesSelector(vkData),
      matchesLength: getNotNullLengthMatchesSelector(vkData),
    },
    searchForm: vkData.searchForm,
    pageRenderDetails: vkData.pageRenderDetails,
  };
};
//с помощью mapDispatchToProps action creators связываются с dispatch
const mapDispatchToProps = {
  vkMatchProfilesMatchesRequested,
  vkMatchProfilesMatchesLoaded,
  vkMatchSearchFormChange,
  vkValidateSearchForm,
  spinnerShow,
  spinnerHide,
};

export default withMainProps(
  connect(mapStateToProps, mapDispatchToProps)(GetMatchesFormController)
);
