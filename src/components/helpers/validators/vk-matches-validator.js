import * as constants from "../main-constants";

export const validateSearchFormMatchesVk = (searchForm) => {
  // console.log(`validateSearchFormMatchesVk `+'\n');
  // console.log(searchForm);

  if (
    searchForm.pickedYear &&
    (searchForm.pickedAgeFrom || searchForm.pickedAgeTo)
  ) {
    // console.log(`validateSearchFormMatchesVk:
    // (searchForm.pickedYear && (searchForm.pickedAgeFrom || searchForm.pickedAgeTo)) === true RETURN: `+'\n');
    // console.log({
    //     searchForm : {
    //         ...searchForm,
    //         fieldsValidation: {
    //             ...searchForm.fieldsValidation,
    //             isPickedYearValid: false,
    //             isPickedAgeFromValid: searchForm.pickedAgeFrom ? false : true,
    //             isPickedAgeToValid: searchForm.pickedAgeTo ? false : true,
    //             isButtonDisabled: true,
    //             btnAdditionalClass: 'disabled-btn',
    //             isLabelErrorTextHidden: '',
    //             labelErrorText: constants.TEXT_ERROR_LABEL_MATCHES_FORM_YEAR_AND_AGE_IS_NOT_EMPTY
    //
    //         }
    //     }
    // })

    return {
      searchForm: {
        ...searchForm,
        fieldsValidation: {
          ...searchForm.fieldsValidation,
          isPickedYearValid: false,
          isPickedAgeFromValid: searchForm.pickedAgeFrom ? false : true,
          isPickedAgeToValid: searchForm.pickedAgeTo ? false : true,
          isButtonDisabled: true,
          btnAdditionalClass: "disabled-btn",
          isLabelErrorTextHidden: "",
          labelErrorText:
            constants.TEXT_ERROR_LABEL_MATCHES_FORM_YEAR_AND_AGE_IS_NOT_EMPTY,
        },
      },
    };
  } else {
    return {
      searchForm: {
        ...searchForm,
        fieldsValidation: {
          ...searchForm.fieldsValidation,
          isButtonDisabled: false,
          isPickedYearValid: true,
          isPickedAgeFromValid: true,
          isPickedAgeToValid: true,
          btnAdditionalClass: "",
          isLabelErrorTextHidden: "hidden",
          labelErrorText: "",
        },
      },
    };
  }
};

export const validateSearchForInputValues = ({ searchForm }) => {
  // console.log(`validateSearchForInputValues `+'\n');
  // console.log(searchForm);
  // console.log(searchForm.fieldsValidation.labelErrorText);

  if (searchForm.offset !== undefined && searchForm.offset !== "") {
    // console.log(`validateSearchForInputValues:
    // (searchForm.offset !== undefined && searchForm.offset !== '') === true`+'\n');
    if (parseInt(searchForm.offset, 10) < 0) {
      //     console.log(`validateSearchForInputValues:
      // (parseInt(searchForm.offset, 10) < 0) === true RETURN:`+'\n');
      // console.log({
      //     searchForm : {
      //         ...searchForm,
      //         fieldsValidation: {
      //             ...searchForm.fieldsValidation,
      //             isButtonDisabled: true,
      //             btnAdditionalClass: 'disabled-btn',
      //             isOffsetValid: false,
      //             isLabelErrorTextHidden: '',
      //             labelErrorText: constants.TEXT_ERROR_LABEL_MATCHES_FORM_OFFSET_LESS_THAN_NULL
      //
      //         }
      //     }
      // });
      return {
        searchForm: {
          ...searchForm,
          fieldsValidation: {
            ...searchForm.fieldsValidation,
            isButtonDisabled: true,
            btnAdditionalClass: "disabled-btn",
            isOffsetValid: false,
            isLabelErrorTextHidden: "",
            labelErrorText:
              constants.TEXT_ERROR_LABEL_MATCHES_FORM_OFFSET_LESS_THAN_NULL,
          },
        },
      };
    }

    if (isNaN(searchForm.offset)) {
      return {
        searchForm: {
          ...searchForm,
          fieldsValidation: {
            ...searchForm.fieldsValidation,
            isButtonDisabled: true,
            btnAdditionalClass: "disabled-btn",
            isOffsetValid: false,
            isLabelErrorTextHidden: "",
            labelErrorText:
              constants.TEXT_ERROR_LABEL_MATCHES_FORM_OFFSET_IS_NOT_NUMBER,
          },
        },
      };
    }

    if (parseInt(searchForm.offset, 10) > 1000) {
      return {
        searchForm: {
          ...searchForm,
          fieldsValidation: {
            ...searchForm.fieldsValidation,
            isButtonDisabled: true,
            btnAdditionalClass: "disabled-btn",
            isOffsetValid: false,
            isLabelErrorTextHidden: "",
            labelErrorText:
              constants.TEXT_ERROR_LABEL_MATCHES_FORM_OFFSET_IS_BIGGER_THAN_MAX,
          },
        },
      };
    } else {
      return {
        searchForm: {
          ...searchForm,
          fieldsValidation: {
            ...searchForm.fieldsValidation,
            isButtonDisabled: false,
            isOffsetValid: true,
            btnAdditionalClass: "",
            isLabelErrorTextHidden: "hidden",
            labelErrorText: "",
          },
        },
      };
    }
  } else {
    // console.log(`validateSearchForInputValues OFFSET IS EMPTY OR UNDEFINED RETURN: `+'\n');

    return {
      searchForm: {
        ...searchForm,
        fieldsValidation: {
          ...searchForm.fieldsValidation,
          isButtonDisabled: searchForm.fieldsValidation.isButtonDisabled
            ? true
            : false,
          isOffsetValid: true,
          btnAdditionalClass: searchForm.fieldsValidation.btnAdditionalClass
            ? searchForm.fieldsValidation.btnAdditionalClass
            : "",
          isLabelErrorTextHidden: searchForm.fieldsValidation
            .isLabelErrorTextHidden
            ? searchForm.fieldsValidation.isLabelErrorTextHidden
            : "",
          labelErrorText: searchForm.fieldsValidation.labelErrorText
            ? searchForm.fieldsValidation.labelErrorText
            : "",
        },
      },
    };
  }
};
