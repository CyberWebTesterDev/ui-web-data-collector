import * as React from 'react';
import { getLocalStorageItem } from '../../utils/local-storage-util';
import { VK_BASE_STRING_CONSTANTS } from './vk-constants';
import styles from '../../../../static/main2.css';

const VkBaseCitiesOption = React.memo(() => {
  return (
     <>
       <label htmlFor="city">{VK_BASE_STRING_CONSTANTS.PICK_CITY} </label>
       <select id="city">
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
         <option value="151">Уфа</option>
       </select>
     </>
  );
});

const VkSearchFormOpt: React.FC<{}> = () => {
  // @ts-ignore
  const days = React.useMemo(() => {
    return new Array(31).fill(0).map((_, i) => i + 1);
  }, []);
  const years = React.useMemo(() => {
    return new Array(26).fill(1980).map((year, i) => year + i);
  }, []);
  const months = React.useMemo(() => {
    return new Array(12).fill(0).map((_, i) => i + 1);
  }, []);
  const yearsOptions = React.useMemo(() => {
    return years.map(year => <option value={year}>{year}</option>);
  }, [years]);
  const monthsOptions = React.useMemo(() => {
    return months.map(month => <option value={month}>{month}</option>);
  }, [months]);

  return (
     <>
       <label>
         {VK_BASE_STRING_CONSTANTS.FRESH_SEARCH_DATA}: <br />
         {getLocalStorageItem('searchParams')}
       </label>
       <div id="divMatchesByQuery" className={styles.searchMatchesContainer}>
         <span> {VK_BASE_STRING_CONSTANTS.SEARCH_STRING}:</span>
         <input type="text" id="vkquery" />
         <span>{VK_BASE_STRING_CONSTANTS.QUANTITY} ({VK_BASE_STRING_CONSTANTS.QUANTITY_DEFAULT})</span>
         <input type="text" id="vkquantity" />
         <span>Offset ({VK_BASE_STRING_CONSTANTS.OFFSET_DEFAULT})</span>
         <input type="text" id="vkoffset" />
         <span>{VK_BASE_STRING_CONSTANTS.AGE_FROM} ({VK_BASE_STRING_CONSTANTS.AGE_FROM_DEFAULT})</span>
         <label htmlFor="city">{VK_BASE_STRING_CONSTANTS.PICK_CITY} </label>
         <select id="city">
           <VkBaseCitiesOption />
         </select>
         <div/>
         <select id="month">
           {monthsOptions}
         </select>
         <select id="year">
           {yearsOptions}
         </select>
       </div>
     </>
  );
};

export const VkSearchForm = React.memo(VkSearchFormOpt);