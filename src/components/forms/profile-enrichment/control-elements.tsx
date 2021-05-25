import * as React from 'react';

const YearPickerFn = ({ handleOnChange }: { handleOnChange: () => void }) => {
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

export const YearPicker = React.memo(YearPickerFn);
