import React from 'react';
import { Link } from 'react-router-dom';

const VkMainPage = () => {
   return (
      <div className="menu-container">
         <Link to="/vkdata/profile-enrichment">
            <nav className="navbar navbar-light bg-light">
               <span className="navbar-brand">Работа с профайлом</span>
            </nav>
         </Link>
         <Link to="/vkdata/search-by-id">
            <nav className="navbar navbar-light bg-light">
               <span className="navbar-brand">Поиск по диапазону ID</span>
            </nav>
         </Link>
         <Link to="/vkdata/search-matches">
            <nav className="navbar navbar-light bg-light">
               <span className="navbar-brand">Поиск подходящих</span>
            </nav>
         </Link>
         <Link to="/vkdata/db-enrichment">
            <nav className="navbar navbar-light bg-light">
               <span className="navbar-brand">Заполнение БД</span>
            </nav>
         </Link>
      </div>
   );
};
export default VkMainPage;
