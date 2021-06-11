import { TPopUpActionFunction } from '../../../lib';

export type TFormValue = {
  fieldName: string;
  fieldValue: string | boolean;
};

export type TAction = {
  type: string;
  payload?: string | TFormValue;
};

export type TDivDividerProps = {
  parentClassName: string;
  modifiers: string[];
};

export type TProfileInDB = {
  hasProfileRow: boolean;
  hasProfileCheckRow: boolean;
  isInRelationship: boolean;
  hasChild: boolean;
  isEditable: boolean;
  estimation: string | undefined;
  correlationEst: string | undefined;
};

export type TVKInformationPanelProps = {
  profileInDB: TProfileInDB;
  profileControlOptions: TProfileInDB;
};

export type TVKenControlPanelInitialValue = {
  fieldName: string;
  fieldValue?: boolean;
};

export type TVKenControlPanel = {
  VKenControlPanelProps: {
    initialValues: TVKenControlPanelInitialValue[];
    currentValues: [] | TVKenControlPanelInitialValue[];
    cleanForm: () => TAction;
    currentFavoriteCheckBoxValue?: boolean;
    isFormChanged: boolean;
    isEditable: boolean;
    updateFormValue: (c: string, f: TFormValue) => TAction;
    popupShow: TPopUpActionFunction;

  };
  VKenControlPanel: TVKenControlPanel['VKenControlPanelProps'];
};
