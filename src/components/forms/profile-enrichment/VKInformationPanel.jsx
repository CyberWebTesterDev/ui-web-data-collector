import React from "react";
import { has, get } from "lodash";

export const VKInformationPanel = ({ profileInDB }) => {
  if (has(profileInDB, "hasProfileCheckRow")) {
    return <InformationBlock optionalComment={"Профайл есть в БД"} />;
  } else if (has(profileInDB, "hasProfileRow")) {
    return (
      <InformationBlock optionalComment={"Профайл есть только в одной БД"} />
    );
  }
  return <div>Не обнаружено записей в БД по данному профайлу</div>;
};

const InformationBlock = ({ optionalComment = "" }) => {
  return <div className={"profile-info-label"}>{optionalComment}</div>;
};

const a = 1;
