import React from "react";

const GetMatches = ({ onClickListenerGetMatches }) => {
  return (
    <div id="getmatches">
      <p>Начальный ID</p>
      <input type="text" id="startvkid" />
      <p>Количество аккаунтов</p>
      <input type="text" id="quan" />
      <button
        className="btn btn-info"
        id="getMatches"
        onClick={onClickListenerGetMatches}
      >
        Подобрать подходящих
      </button>
    </div>
  );
};

export default GetMatches;
