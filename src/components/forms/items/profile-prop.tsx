import * as React from 'react';

type TProfilePropProps = {
  propName: string;
  value: number;
}

const ProfileProp = ({ propName, value }: TProfilePropProps) => {
  return Boolean(propName === 'id' || propName === 'vk_id') ? (
      <span>
         <text>{propName}: </text>
         <a href={`https://vk.com/id${value}`} target="_blank">
            {value.toString()}
         </a>
      </span>
  ) : (
      <span>
         <text>{propName}: </text>
         {value !== null ? value.toString() : 'unknown'}
      </span>
  );
};

export default ProfileProp;
