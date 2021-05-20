import React from 'react';

export const VkProfileLabelPresentation = (props) => {
   return (
      <div className="label-profile-check">
         <label>{props.label}</label>
         <label>{props.label2}</label>
         <label>{props.estimationLabel}</label>
         <span id="hasChild">
            {props.hasChild === false
               ? 'Нет детей'
               : !props.hasChild
               ? 'Неизвестно есть ли дети'
               : 'Есть ребенок'}
         </span>
         <span id="isInRelationship">
            {props.isInRelationship === false
               ? 'Не в отношениях'
               : !props.isInRelationship
               ? 'Неизвестно об отношениях'
               : 'В отношениях'}
         </span>
      </div>
   );
};
