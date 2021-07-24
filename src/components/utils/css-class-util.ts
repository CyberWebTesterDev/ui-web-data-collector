// @ts-ignore
const mainPropsNames: Array<string> = [
  'width',
  'height',
  'marginLeft',
  'marginTop',
  'position',
  'display',
  'fontSize',
];
type TProp = {
  [key: string]: string;
};
export const makeCSSRuleByPropName = (
  propNameInCamelCase: string,
  value: string,
): TProp => {
  console.log({
    [propNameInCamelCase]: value,
  });
  return {
    [propNameInCamelCase]: value,
  };
};
// @ts-ignore
const createModifierName = (key: string, value: string): string => {
  return key + '_' + value;
};
export const setWidth = (value: string = '') => {
  return {
    width: value,
  };
};
export const setLeft = (value: string = '') => {
  return {
    left: value,
  };
};
export const setRight = (value: string = '') => {
  return {
    right: value,
  };
};
export const setTop = (value: string = '') => {
  return {
    top: value,
  };
};
export const setMaxWidth = (value: string = '') => {
  return {
    maxWidth: value,
  };
};
