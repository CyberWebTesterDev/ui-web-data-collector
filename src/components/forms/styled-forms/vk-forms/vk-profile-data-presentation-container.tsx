import * as React from 'react';
import {
   VkMainPropsContainer,
   VkOtherPropsContainer,
} from './vk-main-props-container';

interface TProfilesCompareObject {
   [key: string]: TProfile;
}

interface TProfile {
   firstName: string;
   lastName: string;
   isClosed: boolean;
   canAccessClosed: boolean;
   sex: number;
   hasPhoto?: number;
}

export const VkProfileBlockPresentationCompareContainer = ({
   profile,
   compareProfile,
}: TProfilesCompareObject): React.ReactElement => {
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
