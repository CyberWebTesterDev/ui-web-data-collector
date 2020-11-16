import React from "react";
import { has, get } from "lodash";
import { getBEMClassName } from "../../utils/bem-helper";
import { Grid, Segment } from "semantic-ui-react";

export const VKInformationPanel = ({ profileInDB }) => {
  if (has(profileInDB, "hasProfileCheckRow")) {
    return <InformationProperty optionalComment={"Профайл есть в БД"} />;
  } else if (has(profileInDB, "hasProfileRow")) {
    return (
      <InformationProperty optionalComment={"Профайл есть только в одной БД"} />
    );
  }
  return <div>Не обнаружено записей в БД по данному профайлу</div>;
};

const InformationProperty = ({ optionalComment = "" }) => {
  return (
    <div className={getBEMClassName('InformationProperty')}>
      <Grid columns={2} stackable padded>
        <Grid.Row>
          <Grid.Column>
            <div>Наличие в БД</div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <div>Вторая опция</div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
