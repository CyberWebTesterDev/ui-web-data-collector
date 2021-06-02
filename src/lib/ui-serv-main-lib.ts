export interface IBasicActionObject {
   type: string;
   payload?: string | { [key: string]: string | number };
}

export type TPopUpActionFunction = (
   className: string,
   text: string,
   duration: string | number,
) => IBasicActionObject;

export type TPopUpActionFunctionWithoutArgumentsDispatch = (
   className: string,
   text: string,
   duration: string | number,
) => void;

export type TPopUpActionFunctionDispatch = (
   className: string,
   text: string,
   duration: string | number,
) => void;

export type TProfileInDB = {
   hasProfileRow: boolean;
   hasProfileCheckRow: boolean;
   isInRelationship: boolean;
   hasChild: boolean;
   isEditable: boolean;
   estimation: string | undefined;
   correlationEst: string | undefined;
};
