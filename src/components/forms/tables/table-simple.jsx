import React from "react";
import {
  columnNamesMatchProfilesMap,
  keysProfileToExcludeInTable,
} from "../../helpers/column-names-mapper";
import { omit, keys, values } from "lodash";

export const TableAssmeble = ({ data }) => {
  if (data.length < 1) {
    return false;
  }
  let idx = 0;
  data.forEach((item, i) => {
    if (item) {
      idx = i;
      return;
    }
  });

  return (
    <table className="table">
      <TableHeadSimple item={data[idx]} />
      <TableBodySimple data={data} />
    </table>
  );
};

const TableHeadSimple = ({ item }) => {
  let mappedKeys = [];

  if (item) {
    for (let key in omit(item, keysProfileToExcludeInTable)) {
      mappedKeys.push(columnNamesMatchProfilesMap[key]);
    }
  }

  return (
    <thead>
      <tr key={item.id}>
        {" "}
        {mappedKeys.map((key) => (
          <th>{key}</th>
        ))}
      </tr>
    </thead>
  );
};

const TableBodySimple = ({ data }) => {
  let trs = data.map((item) => {
    if (item) {
      return (
        <tr>
          <TdSimple item={item} />
        </tr>
      );
    }
  });

  return <tbody>{trs}</tbody>;
};

const TdSimple = ({ item }) => {
  if (item) {
    return values(omit(item, keysProfileToExcludeInTable)).map((value) => (
      <td>{value}</td>
    ));
  }
  return false;
};
