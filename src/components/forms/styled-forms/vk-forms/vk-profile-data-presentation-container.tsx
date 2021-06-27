import * as React from 'react';
import {
  VkMainPropsContainer,
  VkOtherPropsContainer,
} from './vk-main-props-container';

interface TProfilesCompareObject {
  [key: string]: IProfile;
}

interface IProfile {
  firstName: string;
  lastName: string;
  isClosed: boolean;
  canAccessClosed: boolean;
  sex: number;
  hasPhoto?: number;
  id: string;
  first_name: string;
  photo_max_orig: string;
  last_name: string;
  photo_100: string;
  vk_id: string;
  photo_max: string;
  [key: string]: string | number | boolean | undefined;
}

export const VkProfileBlockPresentationCompareContainer = ({
  profile,
  compareProfile,
}: TProfilesCompareObject) => {
  return (
      <React.Fragment>
         <div className="main-block-props-container">
            <VkMainPropsContainer profile={profile} />
            {compareProfile && (
               <VkOtherPropsContainer profile={compareProfile} />
            )}
         </div>
      </React.Fragment>
  );
};
