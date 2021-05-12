import * as React from 'react';
import './styled.css';
import { getBlobFromUrl } from '../../../utils/binary-util';
import type { TImageProp, TPropertyStructure, TVKid } from './vk-forms-types';

export const VkPropFieldHeadLabel = (
   props: TImageProp,
): React.ReactFragment => {
   // const image = new Image();
   // image.src = props.imgSrc;
   // const ShowImage = image.onload = () => <img src={image.src}/>;

   // getBlobFromUrl(props.imgSrc).then( (blob) => {
   //     //alert('blob данные изображения получены!');
   //     const img = document.getElementById('avatar_img');
   //     const objURL = URL.createObjectURL(blob);
   //     img.src = objURL;
   // })
   return (
      <React.Fragment>
         <label className="head-label"> {props.label} </label>
         <div className="image-container">
            <img src={props.imgSrc} />
         </div>
      </React.Fragment>
   );
};

export const VkPropFieldID = ({ id }: TVKid): React.ReactFragment => {
   return (
      <React.Fragment>
         <div className="property-child-block">
            <div className="label-div">ID</div>
            <div className="value-div">
               <a href={`https://vk.com/id${id}`} target="_blank">
                  {id}
               </a>
            </div>
         </div>
      </React.Fragment>
   );
};

export const VkPropFieldStandard = ({
   propertyName,
   value,
}: TPropertyStructure): React.ReactFragment => {
   return (
      <React.Fragment>
         <div className="property-child-block">
            <div className="label-div">{propertyName}</div>
            <div className="value-div">
               {value === true ? (
                  <span style={{ color: '#3aeb88' }}>&#10003;</span>
               ) : value === false ? (
                  <span style={{ color: 'red' }}>false</span>
               ) : (
                  value
               )}
            </div>
         </div>
      </React.Fragment>
   );
};

export const VkPropFieldPhotoLinks = ({
   propertyName,
   link,
}: TPropertyStructure): React.ReactFragment => {
   return (
      <React.Fragment>
         <div className="property-child-block">
            <div className="label-div">{propertyName}</div>
            <div className="value-div">
               <a href={link} target="_blank">
                  Ссылка на фото
               </a>
            </div>
         </div>
      </React.Fragment>
   );
};
