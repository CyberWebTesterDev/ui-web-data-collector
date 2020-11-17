import React from "react";
import { has } from "lodash";
import { getBEMClassName } from "../../utils/bem-helper";
import { Grid, Icon, Table } from "semantic-ui-react";

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
    <Grid columns={3} padded>
      <Grid.Row>
        <Grid.Column>
          <Table inverted collapsing>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Наличие в таблице profiles</Table.HeaderCell>
                <Table.HeaderCell>
                  Наличие в таблице check_profiles
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row textAlign="center">
                <Table.Cell>
                  <Icon name="checkmark" size="big" color={"green"}></Icon>
                </Table.Cell>
                <Table.Cell>
                  <Icon name="cancel" size="big" color={"red"}></Icon>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
        <Grid.Column textAlign="center">
          <h5>Test Column Grid</h5>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
