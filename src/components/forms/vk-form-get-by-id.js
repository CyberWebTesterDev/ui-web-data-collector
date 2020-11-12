import React from "react";
import { onClickListenerGetById } from "../helpers/vk-service";

const GetInfobyIdOld = () => {
  return (
    <div id="divGetInfoById">
      <input type="text" id="vkid" />
      <button
        className="btn btn-info"
        id="getInfobyId"
        onClick={onClickListenerGetById}
      >
        Получить данные по ID
      </button>
    </div>
  );
};

const GetInfobyId = () => {
  if (document.getElementById("vkid")) {
    const vkId = document.getElementById("vkid").innerText;

    return (
      <div id="divGetInfoById">
        <input type="text" id="vkid" />
        <a
          href={`http://192.168.1.236:3000/vkdata/profile-enrichment/${vkId}`}
          role="button"
        >
          Получить данные по ID
        </a>
      </div>
    );
  }

  return (
    <div id="divGetInfoById">
      <input type="text" id="vkid" />
      <a
        href={`http://192.168.1.236:3000/vkdata/profile-enrichment/${vkId}`}
        role="button"
      >
        Получить данные по ID
      </a>
    </div>
  );
};

export default GetInfobyId;
