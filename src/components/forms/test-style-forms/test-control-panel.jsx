import React from "react";
import "./control-panel.css";

export const TestControlPanel = () => {
  return (
    <div className="control-panel-container">
      <TestLabelControlBlock />
      <TestButtonContainer />
      <TestSelectContainer />
    </div>
  );
};

const TestLabelControlBlock = () => {
  return (
    <div className="label-control">
      <span>Панель управления</span>
    </div>
  );
};

const TestButtonContainer = ({ buttonsArray }) => {
  let btnArrExample = [
    {
      label: "Button 1",
      onClickListener: (e) => alert(e.target),
    },
    {
      label: "Button 2",
      onClickListener: () => alert("Hi this is button 2"),
    },
  ];

  let btnToRender = btnArrExample.map((el) => {
    return (
      <TestButtonBlock label={el.label} onClickListener={el.onClickListener} />
    );
  });

  return <div className="button-container">{btnToRender}</div>;
};

const TestButtonBlock = ({ label, onClickListener }) => {
  return (
    <div className="controller-button-block">
      <button className="btn-primary" onClick={onClickListener}>
        {label}
      </button>
    </div>
  );
};

const TestSelectContainer = () => {
  return (
    <div className="select-container">
      <TestSelectBlock />
    </div>
  );
};

const TestSelectBlock = () => {
  return (
    <React.Fragment>
      <div className="select-container">
        <div className="select-block">
          <div className="label-select">
            <label>Блок выбора</label>
          </div>
          <TestSelectBlockChild
            value="1"
            optionName="Name 1"
            id="1"
            name="name1"
          />
        </div>
        <div className="select-block">
          <div className="label-select">
            <label>Блок выбора</label>
          </div>
          <TestSelectBlockChild
            value="1"
            optionName="Name 1"
            id="1"
            name="name1"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

const TestSelectBlockChild = ({
  optionName,
  value,
  id,
  name,
  onChangeListener,
}) => {
  return (
    <div className="select-block-child">
      <select name={name} id={id} onChange={onChangeListener}>
        <option value={value}>{optionName}</option>
      </select>
    </div>
  );
};
