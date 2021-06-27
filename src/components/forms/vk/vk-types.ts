export type TVKProfile = {
  id: string;
  first_name: string;
  last_name: string;
  is_closed: boolean;
  can_access_closed: boolean;
  sex: number;
  bdate: string;
  city: {
    id: number;
    title: string;
  };
  country: {
    id: number;
    title: string;
  };
  photo_100: string;
  photo_max: string;
  photo_max_orig: string;
  has_photo: number;
  online: number;
  last_seen: {
    time: number;
    platform: number;
  };
  followers_count: number;
  counters: {
    albums: number;
    videos: number;
    audios: number;
    photos: number;
    friends: number;
    online_friends: number;
    mutual_friends: number;
    followers: number;
    subscriptions: number;
    pages: number;
  };
};

type TVKSearchForm = {
  pickedYear: string;
  pickedAgeFrom: string;
  pickedAgeTo: string;
  searchString: string;
  offset: string;
  pickedCity: string;
  pickedMonth: string;
  pickedDay: string;
  quantity: string;
  fieldsValidation: {
    isPickedYearValid: boolean;
    isPickedAgeFromValid: boolean;
    isPickedAgeToValid: boolean;
    isButtonDisabled: boolean;
    isOffsetValid: boolean;
    btnAdditionalClass: string;
    textForPopUp: string;
    headTextForPopUp: string;
    showPopUp: boolean;
    isLabelErrorTextHidden: 'hidden';
    labelErrorText: string;
  };
};

export type TSearchVKProfileMatchesProps = {
  vkMatches: {
    matchedProfiles: TVKProfile[] | null[];
    matchesLength: number;
  };
  searchForm: TVKSearchForm;
  pageRenderDetails: {
    loading: boolean;
    error: boolean;
    showPopUp: boolean;
  };
};

export type TVKState = TSearchVKProfileMatchesProps;