import React from 'react';
import ProfileProp from '../items/profile-prop';

const ProfilePropsEnrichment = ({ profile }) => {
  let profilePropsArray = [];

  if (profile.id) {
    profilePropsArray = [
      <img src={profile.photo_max_orig} width="200" height="200" />,
      <a href={profile.photo_max_orig} target="_blank">
        ссылка на фото
      </a>,
    ];
  }

  for (let key in profile) {
    profilePropsArray.push(
      <React.Fragment>
        <div className="profile-details">
          <ProfileProp propName={key} value={profile[key]} />
        </div>
      </React.Fragment>,
    );
  }
  return profilePropsArray;
};

export default ProfilePropsEnrichment;
