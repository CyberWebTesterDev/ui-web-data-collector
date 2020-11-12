import {
  validateSearchFormMatchesVk,
  validateSearchForInputValues,
} from "../components/helpers/validators/vk-matches-validator";

const initialState = {
  vkMatches: {
    clickedProfile: "",
    previousClickedProfile: "",
    matchedProfiles: [],
    checkedProfiles: []
  },
  searchForm: {
    pickedYear: "",
    pickedAgeFrom: "",
    pickedAgeTo: "",
    searchString: "",
    offset: "",
    pickedCity: "",
    pickedMonth: "",
    pickedDay: "",
    quantity: "",
    fieldsValidation: {
      isPickedYearValid: true,
      isPickedAgeFromValid: true,
      isPickedAgeToValid: true,
      isButtonDisabled: true,
      isOffsetValid: true,
      btnAdditionalClass: "",
      textForPopUp: "",
      headTextForPopUp: "",
      showPopUp: false,
      isLabelErrorTextHidden: "hidden",
      labelErrorText: ""
    },
  },
  pageRenderDetails: {
    loading: false,
    error: false,
    showPopUp: false
  }
};

export const reducerVK = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_VK_MATCH_PROFILE_REQUEST":
      console.log("FETCH_VK_MATCH_PROFILE_REQUEST");
      return {
        ...state,
        pageRenderDetails: {
          ...state.pageRenderDetails,
          loading: true,
        },
      };
    case "FETCH_VK_MATCH_PROFILE_SUCCESS":
      return {
        ...state,
        vkMatches: {
          ...state.vkMatches,
          matchedProfiles: action.payload,
        },
      };
    case "VK_MATCH_PROFILE_FORM_CHANGE":
      const { fieldName, targetValue } = action.payload;
      const newState = {
        //возвращаем только внутренний объект
        ...state,
        searchForm: {
          ...state.searchForm,
          [fieldName]: targetValue,
        },
      };
      //console.log(newState)
      return newState;
    case "VK_MATCH_PROFILE_FORM_VALIDATE":
      const { searchForm } = state;
      let validatedForm = {
        ...state,
        ...validateSearchForInputValues(
          validateSearchFormMatchesVk(searchForm)
        ),
      };
      // console.log(`Validated form:`+'\n');
      //  console.log(validatedForm);
      // console.log({
      //     ...state,
      //     ...validatedForm
      // });
      return {
        ...state,
        ...validatedForm,
      };

    default:
      return state;
  }
};
