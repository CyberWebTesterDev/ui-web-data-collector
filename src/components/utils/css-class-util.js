
const mainPropsNames = [
    'width',
    'height',
    'marginLeft',
    'marginTop',
    'position',
    'display',
    'fontSize'
];

const makeCSSRuleByPropName = (propNameInCamelCase, value) => {
    return {
        propName: value
    }
}

const createModifierName = (key, value) => {
    return key + '_' + value;
}