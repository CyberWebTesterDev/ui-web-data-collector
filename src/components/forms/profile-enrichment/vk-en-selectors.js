import { createSelector } from "reselect";

const getFormValues = ({ form }) => form.values;

const getFormName = ({ form }) => form.name;

export const getFormValuesSelector = createSelector(
  getFormValues,
  (values) => values
);

export const getFormNameSelector = createSelector(
    getFormName,
    (name) => name
)
