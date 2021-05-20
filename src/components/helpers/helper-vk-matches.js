import React from 'react';
import GetDataFromWeb from '../../services/service';

const serviceHandler = async (profileId, val, key) => {
   if (profileId && val) {
      let res;
      if (key === 'child') {
         try {
            const gdf = new GetDataFromWeb();
            res = gdf.updateHasChild(val, profileId);
         } catch (e) {
            throw e;
         }
         if (res.rowCount) {
            console.log(
               `Child check of profile with id ${profileId} has been successfully processed`,
            );
         } else {
            console.warn(`Check the child property in DB for ${profileId}`);
         }
      }
      if (key === 'relationship') {
         try {
            const gdf = new GetDataFromWeb();
            res = gdf.updateIsInRelationship(val, profileId);
         } catch (e) {
            throw e;
         }
         if (res.rowCount) {
            console.log(
               `Relationship check of profile with id ${profileId} has been successfully processed`,
            );
         } else {
            console.warn(
               `Check the relationship property in DB for ${profileId}`,
            );
         }
      }
   } else {
      throw Error(`serviceHandler: profileId or val is not valid`);
   }
};
export const SimpleCheckerChild = ({ id }) => {
   return (
      <React.Fragment>
         <select
            id={id}
            onChange={(e) =>
               serviceHandler(e.target.id, e.target.value, 'child')
            }
         >
            <option value="0">-</option>
            <option value="true">Да</option>
            <option value="false">Нет</option>
         </select>
      </React.Fragment>
   );
};
export const SimpleCheckerRelationship = ({ id }) => {
   return (
      <React.Fragment>
         <select
            id={id}
            onChange={(e) =>
               serviceHandler(e.target.id, e.target.value, 'relationship')
            }
         >
            <option value="0">-</option>
            <option value="true">Да</option>
            <option value="false">Нет</option>
         </select>
      </React.Fragment>
   );
};
