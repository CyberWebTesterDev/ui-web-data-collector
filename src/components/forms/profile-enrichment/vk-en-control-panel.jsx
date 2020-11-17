import React from "react";
import { Button, Checkbox } from "semantic-ui-react";
import { CreateDivBlock } from "../../utils/bem-helper";
import * as actions from "../basic-form-actions/form-actions";
import { connect } from "react-redux";

class VKenControlPanelController extends React.Component {
  formName = "vk-en-control-panel";
  isChecked = false;
  fieldNames = ["addToFavorite"];
  labels = ["Добавить в избранные"];
  componentDidMount() {
    console.log(`VKenControlPanelController: mounted`);
    const { selectFormName, updateFormValue } = this.props;
    selectFormName(this.formName);
    this.fieldNames.forEach((fieldName) => {
      updateFormValue({
        fieldName,
        fieldValue: false,
      });
    });
  }
  componentWillUnmount() {
    const { cleanForm } = this.props;
    cleanForm();
  }
  selectFieldValueByName = (fieldName) => {
    const { form } = this.props.form;
    const idx = form.values.findIndex((value) => value.fieldName == fieldName);
    if (idx != -1) {
      return form.values[idx].fieldValue;
    }
    return false;
  };

  render() {
    const { isEditable, updateFormValue } = this.props;

    return (
      <CreateDivBlock name={"VKenControlPanel"}>
        {this.fieldNames.map((fieldName, idx) => {
          return (
            <Checkbox
              key={fieldName}
              checked={this.selectFieldValueByName(fieldName)}
              name={fieldName}
              disabled={!isEditable}
              label={this.labels[idx]}
              onChange={() =>
                updateFormValue({
                  fieldName,
                  fieldValue: !this.selectFieldValueByName(fieldName),
                })
              }
            />
          );
        })}
      </CreateDivBlock>
    );
  }
}

const CheckBoxHandler = ({ name, isEditable, label, onChange, checked }) => {
  const handleOnChange = () => {
    onChange({
      fieldName: name,
      fieldValue: !checked,
    });
  };
  return (
    <Checkbox
      checked={checked}
      name={name}
      disabled={!isEditable}
      label={label}
      onChange={handleOnChange}
    />
  );
};

const mapStateToProps = ({ form }) => {
  return { form };
};

export default connect(mapStateToProps, actions)(VKenControlPanelController);
