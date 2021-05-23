export type TDivDividerProps = {
  parentClassName: string,
  modifiers: string[];
}
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