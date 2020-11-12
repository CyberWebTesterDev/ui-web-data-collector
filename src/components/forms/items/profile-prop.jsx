import React from "react";

const ProfileProp = ({ propName, value }) => {
  return Boolean(propName === "id" || propName === "vk_id") ? (
    <span>
      <font>{propName}: </font>
      <a href={`https://vk.com/id${value}`} target="_blank">
        {value.toString()}
      </a>
    </span>
  ) : (
    <span>
      <font>{propName}: </font>
      {value !== null ? value.toString() : "unknown"}
    </span>
  );
};

export default ProfileProp;
