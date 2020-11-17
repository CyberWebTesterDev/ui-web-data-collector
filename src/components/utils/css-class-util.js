
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

export const setWidth = (value = null) => {
    return {
        width: value
    }
}
export const setLeft = (value = null) => {
    return {
        left: value
    }
}

export const setRight = (value = null) => {
    return {
        right: value
    }
}

export const setTop = (value = null) => {
    return {
        top: value
    }
}

export const setMaxWidth = (value = null) => {
    return {
        maxWidth: value
    }
}


