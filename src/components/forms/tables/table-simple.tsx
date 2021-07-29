import * as React from 'react';
import {
  columnNamesMatchProfilesMap,
  keysProfileToExcludeInTable,
} from '../../helpers/column-names-mapper';
import { omit, values } from 'lodash';
import { TVKProfile } from '../vk/vk-types';

type TData = {
  data: TVKProfile[];
};
export const TableAssembler = ({ data }: TData): boolean | JSX.Element => {
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
const TableHeadSimple: React.FC<{item: TVKProfile | null;}> = ({ item }) => {
  let mappedKeys = [];
  if (item) {
    for (let key in omit(item, keysProfileToExcludeInTable)) {
      mappedKeys.push(columnNamesMatchProfilesMap[key]);
    }
  }
  return (
      <thead>
         <tr key={item?.id}>
            {' '}
            {mappedKeys.map((key) => (
               <th>{key}</th>
            ))}
         </tr>
      </thead>
  );
};

const TableBodySimple: React.FC<{data: TVKProfile[] | null;}> = ({ data }): JSX.Element => {
  let trs = data?.map((item) => {
    if (item) {
      // @ts-ignore
      return (
            <tr>
              {/*// @ts-ignore*/}
               <TdSimple item={item} />
            </tr>
      );
    }
    return <tr></tr>;
  });
  return <tbody>{trs}</tbody>;
};
// @ts-ignore
const TdSimple: React.FC<{ item: TVKProfile; }> = ({ item }): JSX.Element[] => {
  return values(omit(item, keysProfileToExcludeInTable)).map((value) => (
     <>
       <td>{value}</td>
     </>
  ));
};
