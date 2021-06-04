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
   fieldValue: string | boolean;
};

export type TVKenControlPanel = {
   VKenControlPanel: {
      isFormChanged: boolean;
      initialValues: TVKenControlPanelInitialValue[];
      currentValues: [] | TVKenControlPanelInitialValue[];
   };
};
