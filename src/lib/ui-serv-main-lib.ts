export interface IBasicActionObject {
   type: string;
};
export interface IActionObjectWithPayload extends IBasicActionObject {
   payload: {
      [key: string]: any;
   }
};

export interface IActionObjectWithPayloadOptional extends IBasicActionObject {
   payload?: { [key: string]: any };
}    

export type TPopUpActionFunction = (
   className: string,
   text: string,
   duration: string | number,
) => IBasicActionObject;

export type TPopUpActionFunctionWithoutArgumentsDispatch = () => void;

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
