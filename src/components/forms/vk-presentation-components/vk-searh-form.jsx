import React from 'react';

export const RenderForm = ({
   onChangeListener,
   searchString,
   quantity,
   pickedYear,
   pickedAgeFrom,
   pickedAgeTo,
   isButtonDisabled,
   btnAdditionalClass,
   isLabelErrorTextHidden,
   labelErrorText,
   isOffsetValid,
   isPickedYearValid,
   isPickedAgeFromValid,
   isPickedAgeToValid,
   onClickListener,
}) => {
   let daysSelectOption = [];
   for (let i = 1; i <= 31; i++) {
      daysSelectOption.push(<option value={`${i}`}> {i} </option>);
   }
   return (
      <div id="divMatchesByQuery" className="search-matches-container">
         <span> Строка поиска (опционально):</span>
         <input
            onChange={onChangeListener}
            type="text"
            id="searchString"
            value={searchString}
         />
         <span>Количество (по умолчанию 15)</span>
         <input
            onChange={onChangeListener}
            type="text"
            id="quantity"
            value={quantity}
         />
         <span>Offset (по умолчанию 0)</span>
         <input
            className={!isOffsetValid ? `red-border` : ''}
            onChange={onChangeListener}
            type="text"
            id="offset"
         />
         <span>Возраст от (по умолчанию 20)</span>
         <input
            type="text"
            id="pickedAgeFrom"
            onChange={onChangeListener}
            value={pickedAgeFrom}
            className={!isPickedAgeFromValid ? `red-border` : ''}
         />
         <span>Возраст до (по умолчанию 36)</span>
         <input
            type="text"
            id="pickedAgeTo"
            onChange={onChangeListener}
            value={pickedAgeTo}
            className={!isPickedAgeToValid ? `red-border` : ''}
         />
         <label htmlFor="pickedCity">Выберите город: </label>
         <select onChange={onChangeListener} id="pickedCity">
            <option value="0">Не выбрано</option>
            <option value="1">Москва</option>
            <option value="39">Владимир</option>
            <option value="122">Рязань</option>
            <option value="246">Тула</option>
            <option value="62">Калуга</option>
            <option value="141">Тверь</option>
            <option value="627">Симферополь</option>
            <option value="991">Можайск</option>
            <option value="107">Орехово-Зуево</option>
            <option value="69">Коломна</option>
            <option value="185">Севастополь</option>
            <option value="155">Химки</option>
         </select>
         <label htmlFor="pickedMonth">Выберите месяц: </label>
         <select onChange={onChangeListener} id="pickedMonth">
            <option value="0">Не выбрано</option>
            <option value="1">Январь</option>
            <option value="2">Февраль</option>
            <option value="3">Март</option>
            <option value="4">Апрель</option>
            <option value="5">Май</option>
            <option value="6">Июнь</option>
            <option value="7">Июль</option>
            <option value="8">Август</option>
            <option value="9">Сентябрь</option>
            <option value="10">Октябрь</option>
            <option value="11">Ноябрь</option>
            <option value="12">Декабрь</option>
         </select>
         <label htmlFor="pickedDay">Выберите день: </label>
         <select onChange={onChangeListener} id="pickedDay">
            <option value="0">Не выбрано</option>
            {daysSelectOption}
         </select>
         <label htmlFor="pickedYear">Выберите год: </label>
         <select
            id="pickedYear"
            onChange={onChangeListener}
            value={pickedYear}
            className={!isPickedYearValid ? `red-border` : ''}
         >
            <option value="0">Не выбрано</option>
            <option value="1980">1980</option>
            <option value="1981">1981</option>
            <option value="1982">1982</option>
            <option value="1983">1983</option>
            <option value="1984">1984</option>
            <option value="1985">1985</option>
            <option value="1986">1986</option>
            <option value="1987">1987</option>
            <option value="1988">1988</option>
            <option value="1989">1989</option>
            <option value="1990">1990</option>
            <option value="1991">1991</option>
            <option value="1992">1992</option>
            <option value="1993">1993</option>
            <option value="1994">1994</option>
            <option value="1995">1995</option>
            <option value="1996">1996</option>
            <option value="1997">1997</option>
            <option value="1998">1998</option>
            <option value="1999">1999</option>
            <option value="2000">2000</option>
            <option value="2001">2001</option>
            <option value="2002">2002</option>
            <option value="2003">2003</option>
            <option value="2004">2004</option>
            <option value="2005">2005</option>
            <option value="2006">2006</option>
         </select>
         <label className={`error-label-search-from ${isLabelErrorTextHidden}`}>
            {labelErrorText}
         </label>
         <button
            className={`btn btn-info ${btnAdditionalClass}`}
            id="getInfobyId"
            onClick={onClickListener}
         >
            Подобрать подходящих
         </button>
      </div>
   );
};
