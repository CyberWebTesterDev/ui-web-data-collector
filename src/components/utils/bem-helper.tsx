import * as React from 'react';
import { ObjectHTMLAttributes } from 'react';

const prefix = 'prx_';
const blockNameToElementNameDelimiter = '__';
const elementNameToModifierDelimiter = ' ';

interface IDivBlockObject {
   name: string;
   modifiers?: Array<string>;
   other?: ObjectHTMLAttributes<string>;
}

interface INestedBlock {
   nameParentBlock: string;
   blockName: string;
   modifiers?: Array<string>;
}

interface IChildElement {
   parentClassName: string;
   elementName: string;
   modifiers: string[];
   blockName?: string;
}

// TO DO
export const CreateDivBlock = ({
   name,
   modifiers = [],
   ...other
}: IDivBlockObject): JSX.Element => {
   let className = `${prefix}${transformElementName(name)}`;
   if (modifiers.length > 0) {
      modifiers.forEach((modifier) => {
         className += elementNameToModifierDelimiter + modifier;
      });
   }
   return <div className={className}></div>;
};

export const NestedBlock = ({
   nameParentBlock,
   blockName,
   modifiers = [],
}: INestedBlock): JSX.Element => {
   let className = `${
      prefix +
      transformElementName(nameParentBlock) +
      blockNameToElementNameDelimiter +
      transformElementName(blockName)
   }`;
   if (modifiers.length > 0) {
      modifiers.forEach((modifier) => {
         className += elementNameToModifierDelimiter + modifier;
      });
   }
   return <div className={className}></div>;
};

export const ChildElement = ({
   parentClassName,
   elementName,
   modifiers = [],
}: IChildElement): JSX.Element => {
   let className = `${
      prefix +
      transformElementName(parentClassName) +
      blockNameToElementNameDelimiter +
      transformElementName(elementName)
   }`;
   if (modifiers.length > 0) {
      modifiers.forEach((modifier) => {
         className += elementNameToModifierDelimiter + modifier;
      });
   }
   return <div className={className}></div>;
};

export const getBEMClassName = ({
   blockName,
   elementName = '',
   modifiers = [],
}: IChildElement): string => {
   let className = `${prefix}${transformElementName(blockName)}`;
   if (elementName) {
      className +=
         blockNameToElementNameDelimiter +
         transformElementName(elementName, 'element');
   }
   if (modifiers.length > 0) {
      modifiers.forEach((modifier) => {
         className += elementNameToModifierDelimiter + modifier;
      });
   }
   return className;
};

const transformElementName = (
   blockName: string,
   type: string = 'block',
): string => {
   let splitArrayByUpperCase = blockName.split(/(?=[A-Z])/);
   splitArrayByUpperCase.forEach((word, idx) => {
      splitArrayByUpperCase[idx] = word.toLowerCase() + '_';
      if (idx == splitArrayByUpperCase.length - 1) {
         switch (type) {
            case 'block':
               splitArrayByUpperCase[idx] = word.toLowerCase() + '_block';
               break;
            case 'mod':
               splitArrayByUpperCase[idx] = word.toLowerCase();
               break;
            case 'element':
               splitArrayByUpperCase[idx] = word.toLowerCase();
               break;
            default:
               break;
         }
      }
   });
   return splitArrayByUpperCase.join('');
};

const createModifierName = (key: string, value: string): string => {
   return transformElementName(key, 'mod') + '_' + value;
};
