import React from "react";
import {
  VkPropFieldHeadLabel,
  VkPropFieldID,
  VkPropFieldPhotoLinks,
  VkPropFieldStandard,
} from "./vk-prop-fields";

export const VkMainPropsContainer = ({ profile }) => {
  return (
    <React.Fragment>
      <div className="main-parent-block">
        <VkPropFieldHeadLabel
          label={profile.first_name + " " + profile.last_name}
          imgSrc={profile.photo_max_orig}
        />
        <VkPropFieldID id={profile.id} />
        <PropsRenderer profile={profile} />
      </div>
    </React.Fragment>
  );
};

export const VkOtherPropsContainer = ({ profile }) => {
  return (
    <React.Fragment>
      <div className="main-parent-block">
        <VkPropFieldID id={profile.vk_id} />
        <PropsRenderer profile={profile} />
      </div>
    </React.Fragment>
  );
};

const PropsRenderer = ({ profile }) => {
  let propsArray = [];

  if (Object.keys(profile).length > 0) {
    for (let key in profile) {
      if (key !== "id" && key !== "first_name" && key !== "last_name") {
        if (
          key === "photo_100" ||
          key === "photo_max" ||
          key === "photo_max_orig"
        ) {
          propsArray.push(
            <VkPropFieldPhotoLinks propertyName={key} link={profile[key]} />
          );
        } else {
          propsArray.push(
            <VkPropFieldStandard propertyName={key} value={profile[key]} />
          );
        }
      }
    }
    return propsArray;
  } else return false;
};
