import React from "react";
import { Button, Checkbox } from "semantic-ui-react";
import { CreateDivBlock } from "../../utils/bem-helper";
import * as actions from "../basic-form-actions/form-actions";
import { connect } from "react-redux";
import { YearPicker } from "./control-elements";
import { getFormNameSelector, getFormValuesSelector } from "./vk-en-selectors";

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
    console.log(`VKenControlPanelController.getFieldValueByName called with parameter: ${fieldName}`)
    const { values } = this.props;
    const object = values.find((object) => object.fieldName == fieldName);
    let result = object ? object.fieldValue : false;
    console.log(`VKenControlPanelController.getFieldValueByName will return value: ${result}`)
    return result;
  };

  render() {
    const { isEditable, updateFormValue } = this.props;

    return (
      <CreateDivBlock name={"VKenControlPanel"}>
        <Checkbox
          key={"addToFavorite"}
          checked={this.getFieldValueByName("addToFavorite")}
          name={"addToFavorite"}
          disabled={!isEditable}
          label={this.labels[0]}
          onChange={(e) =>
            updateFormValue("Checkbox", {
              fieldName: "addToFavorite",
              fieldValue: !e.target.value,
            })
          }
        />
        <YearPicker
            fieldValue={this.getFieldValueByName("yearPicker")}
          handleOnChange={updateFormValue}
        />
      </CreateDivBlock>
    );
  }
}

const mapStateToProps = ({ form }) => {
  return {
    name: getFormNameSelector(form),
    values: getFormValuesSelector(form),
  };
};

export default connect(mapStateToProps, actions)(VKenControlPanelController);
