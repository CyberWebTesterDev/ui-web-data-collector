import React from "react";

const prefix = "prx_";
const blockNameToElementNameDelimiter = "__";
const elementNameToModifierDelimiter = " ";

export const CreateDivBlock = ({ name, modifiers = [], ...other }) => {
  let className = `${prefix}${transformElementName(name)}`;
  if (modifiers.length > 0) {
    modifiers.forEach((modifier) => {
      className += elementNameToModifierDelimiter + modifier;
    });
  }
  return <div className={className} {...other}></div>;
};

export const NestedBlock = ({ nameParentBlock, blockName, modifiers = [] }) => {
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
}) => {
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

export const getBEMClassName = (
  blockName,
  elementName = "",
  modifierName = []
) => {
  let className = `${prefix}${transformElementName(blockName)}`;
  if (elementName) {
    className +=
      blockNameToElementNameDelimiter +
      transformElementName(elementName, "element");
  }
  if (modifierName.length > 0) {
    modifierName.forEach((modifier) => {
      className += elementNameToModifierDelimiter + modifier;
    });
  }
  return className;
};

const transformElementName = (blockName, type = "block") => {
  let splitArrayByUpperCase = blockName.split(/(?=[A-Z])/);
  splitArrayByUpperCase.forEach((word, idx) => {
    splitArrayByUpperCase[idx] = word.toLowerCase() + "_";
    if (idx == splitArrayByUpperCase.length - 1) {
      switch (type) {
        case "block":
          splitArrayByUpperCase[idx] = word.toLowerCase() + "_block";
          break;
        case "mod":
          splitArrayByUpperCase[idx] = word.toLowerCase();
          break;
        case "element":
          splitArrayByUpperCase[idx] = word.toLowerCase();
          break;
        default:
          break;
      }
    }
  });
  return splitArrayByUpperCase.join("");
};

const createModifierName = (key, value) => {
  return transformElementName(key, "mod") + "_" + value;
};
