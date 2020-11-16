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
    <Segment>
      <Grid columns={2} stackable>
        <Grid.Column>
          <div>{optionalComment}</div>
        </Grid.Column>
        <Grid.Column>
          <div>{optionalComment}</div>
        </Grid.Column>
      </Grid>
      <Grid columns={2} stackable>
        <Grid.Column>
          <div>{optionalComment}</div>
        </Grid.Column>
        <Grid.Column>
          <div>{optionalComment}</div>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};
