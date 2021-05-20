import * as React from 'react';
import "./control-panel.css";

export const TestControlPanel = React.memo<undefined>(() => {
   let btnArrExample: TButton[] = [
      {
         label: 'Button 1',
         onClickListener: (e: React.MouseEvent<HTMLButtonElement>) =>
            alert(e.target),
      },
      {
         label: 'Button 2',
         onClickListener: () => alert('Hi this is button 2'),
      },
   ];
   const TestLabelControlBlock = () => {
      return (
         <div className="label-control">
            <span>Панель управления</span>
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
   return (
      <div className="control-panel-container">
         <TestLabelControlBlock />
         <TestButtonContainer {...btnArrExample} />
         <TestSelectContainer />
      </div>
   );
});
type TButton = {
   label: string;
   onClickListener: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
const TestButtonContainer = React.memo<TButton[]>((arr) => {
   let btnToRender = arr.map((el) => {
      return (
         <TestButtonBlock
            label={el.label}
            onClickListener={el.onClickListener}
         />
      );
   });
   return <div className="button-container">{btnToRender}</div>;
});
const TestButtonBlock = React.memo<TButton>(({ label, onClickListener }) => (
   <div className="controller-button-block">
      <button className="btn-primary" onClick={onClickListener}>
         {label}
      </button>
   </div>
));
type TTestSelectBlockChildProps = {
   optionName: string;
   value: string | number;
   id: string;
   name: string;
   onChangeListener?: () => void;
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
const TestSelectBlockChild = React.memo<TTestSelectBlockChildProps>(
   ({ optionName, value, id, name, onChangeListener }) => {
      return (
         <div className="select-block-child">
            <select name={name} id={id} onChange={onChangeListener}>
               <option value={value}>{optionName}</option>
            </select>
         </div>
      );
   },
);
