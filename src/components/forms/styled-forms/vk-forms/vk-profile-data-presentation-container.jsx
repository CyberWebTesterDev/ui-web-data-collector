import React from "react";
import {
  VkMainPropsContainer,
  VkOtherPropsContainer,
} from "./vk-main-props-container";

export const VkProfileBlockPresentationCompareContainer = ({
  profile,
  compareProfile,
}) => {
  return (
    <React.Fragment>
      <div className="main-block-props-container">
        <VkMainPropsContainer profile={profile} />
        {compareProfile && <VkOtherPropsContainer profile={compareProfile} />}
      </div>
    </React.Fragment>
  );
};
