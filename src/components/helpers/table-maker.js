import React from 'react';

export const THeadMaker = ({ obj }) => {
  let ths = [];
  for (let key in obj) {
    if (key === 'id') {
      ths.push(<th>Action</th>, <th>{key}</th>);
    } else {
      ths.push(<th>{key}</th>);
    }
  }
  return (
      <thead>
         <tr>{ths}</tr>
      </thead>
  );
};
export const TDMaker = (props) => {
  //здесь будут кнопки
  //console.log(props.onClickListener)
  //console.log(`TDMaker: type of props.onClickListener: ${typeof props.onClickListener}`)
  let tds = [
      <td>
         <button
            id={props.obj.id}
            onClick={(e) => props.onClickListener(e.target.id)}
         >
            Просмотр
         </button>
      </td>,
  ];
  for (let key in props.obj) {
    tds.push(<td>{props.obj[key]}</td>);
  }
  return tds;
};
export const TRTableFiller = ({ list, onClickListener }) => {
  if (list.length > 0) {
    return list.map((el) => {
      if (el) {
        return (
               <React.Fragment>
                  <tr key={el.id}>
                     <TDMaker obj={el} onClickListener={onClickListener} />
                  </tr>
               </React.Fragment>
        );
      }
    });
  }
  return false;
};
const TableRenderer = ({ list, onClickListener }) => {
  return (
      <React.Fragment>
         <table className="table" id="table-post-data">
            <THeadMaker obj={list[0]} />
            <tbody>
               <TRTableFiller list={list} onClickListener={onClickListener} />
            </tbody>
         </table>
      </React.Fragment>
  );
};
export default TableRenderer;
