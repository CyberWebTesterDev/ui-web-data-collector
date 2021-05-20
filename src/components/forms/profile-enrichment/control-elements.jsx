import React from 'react';

export const YearPicker = ({ handleOnChange }) => {
   let years = [];
   for (let i = 0; i < 25; i++) {
      if (i > 0) {
         years.push(1980 + i);
      } else {
         years.push('');
      }
   }
   years = years.map((year) => year.toString());
   let options = years.map((year, idx) => (
      <option key={idx} value={year}>
         {year}
      </option>
   ));
   return (
      <>
         <label htmlFor={'years-picker'}>Укажите год рождения</label>
         <select onChange={handleOnChange} id={'years-picker'}>
            {options}
         </select>
      </>
   );
};
