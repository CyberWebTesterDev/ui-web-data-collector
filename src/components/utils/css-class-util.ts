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
const createModifierName = (key: string, value: string): string => {
   return key + '_' + value;
};
export const setWidth = (value: string = null) => {
   return {
      width: value,
   };
};
export const setLeft = (value: string = null) => {
   return {
      left: value,
   };
};
export const setRight = (value: string = null) => {
   return {
      right: value,
   };
};
export const setTop = (value: string = null) => {
   return {
      top: value,
   };
};
export const setMaxWidth = (value: string = null) => {
   return {
      maxWidth: value,
   };
};
