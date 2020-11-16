
export const getBEMClassName = (blockName, elementName = '', modifierName = []) => {
    const prefix = 'prx_';
    const blockNameToElementNameDelimiter = '__';
    const elementNameToModifierDelimiter = '-';
    let className = `${prefix}${transformElementName(blockName)}`;

    if (elementName) {
        className += blockNameToElementNameDelimiter + transformElementName(elementName, 'element');
    }
    if (modifierName.length > 0) {
        modifierName.forEach(modifier => {
            className += elementNameToModifierDelimiter + modifier;
        });
    }
    return className;
};

const transformElementName = (blockName, type = 'block') => {
    let splitArrayByUpperCase = blockName.split(/(?=[A-Z])/);
    splitArrayByUpperCase.forEach((word, idx) => {
        splitArrayByUpperCase[idx] = word.toLowerCase() + '_';
        if (idx == splitArrayByUpperCase.length - 1) {
            switch (type) {
                case 'block':
                    splitArrayByUpperCase[idx] = word.toLowerCase() + '_block';
                    break;
                case 'mod':
                    splitArrayByUpperCase[idx] = word.toLowerCase() + '_mod';
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
}

const createModifierName = (key, value) => {
    return transformElementName(key, 'mod') + '_' + value;
}