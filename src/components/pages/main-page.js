import React from 'react';

const MainPage = () => {
  return (
    <div className="main-block">
      <div className="text-area">
        Эта UI-приложение для работы с Web Scraper сервером и базой данных.
        Данные собираются из различных интернет источников (на текущий момент
        kinopoisk и VK) и внутренней БД на PostgreSQL. Для проверки перейдите на
        одну из вкладок Movies, VK data, DB work.
      </div>
    </div>
  );
};

export default MainPage;
