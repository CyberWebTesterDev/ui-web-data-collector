import React from "react";
import { Button, Checkbox } from "semantic-ui-react";
import { CreateDivBlock } from "../../utils/bem-helper";
import * as actions from "../basic-form-actions/form-actions";
import { connect } from "react-redux";
import { YearPicker } from "./control-elements";
import {
  getCurrentFavoriteCheckBoxValueSelector,
  getCurrentFormValuesSelector,
  getInitialFormValuesSelector,
} from "./vk-en-selectors";

class VKenControlPanelController extends React.Component {
  formName = "vk-en-control-panel";
  isChecked = false;
  labels = ["Добавить в избранные"];
  componentDidMount() {
    console.log(`VKenControlPanelController: mounted. Props: \n`);
    console.log(this.props);
  }
  componentWillUnmount() {
    const { cleanForm } = this.props;
    cleanForm();
  }
  componentDidUpdate() {
    console.log(`VKenControlPanelController: updated. Props: \n`);
    console.log(this.props);
  }

  getFieldValueByName = (fieldName = null) => {
    console.log(
      `VKenControlPanelController.getFieldValueByName called with parameter: ${fieldName}`
    );
    const { currentValues } = this.props;
    const object = currentValues.find(
      (object) => object.fieldName == fieldName
    );
    let result = object ? object.fieldValue : undefined;
    console.log(
      `VKenControlPanelController.getFieldValueByName will return value: ${result}`
    );
    return result;
  };

  render() {
    const {
      isEditable,
      updateFormValue,
      isFormChanged,
      initialValues,
      currentFavoriteCheckBoxValue
    } = this.props;

    return (
      <CreateDivBlock name={"VKenControlPanel"}>
        <Checkbox
          key={"addToFavorite"}
          checked={
            this.getFieldValueByName("addToFavorite") === undefined
              ? initialValues[0].fieldValue
              : currentFavoriteCheckBoxValue
          }
          name={"addToFavorite"}
          disabled={!isEditable}
          label={this.labels[0]}
          onChange={(e) =>
            updateFormValue("Checkbox", {
              fieldName: "addToFavorite",
              fieldValue:
                this.getFieldValueByName("addToFavorite") === undefined
                  ? !initialValues[0].fieldValue
                  : !currentFavoriteCheckBoxValue,
            })
          }
        />
        <YearPicker
          fieldValue={
            !isFormChanged
              ? initialValues[1].fieldValue
              : this.getFieldValueByName("yearPicker")
          }
          handleOnChange={(e) =>
            updateFormValue("yearPicker", {
              fieldName: "yearPicker",
              fieldValue: e.target.value
            })
          }
        />
      </CreateDivBlock>
    );
  }
}

const mapStateToProps = ({ form }) => {
  return {
    initialValues: getInitialFormValuesSelector(form),
    currentValues: getCurrentFormValuesSelector(form),
    isFormChanged: form.VKenControlPanel.isFormChanged,
    currentFavoriteCheckBoxValue: getCurrentFavoriteCheckBoxValueSelector(form),
  };
};

export default connect(mapStateToProps, actions)(VKenControlPanelController);
