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
    <Table inverted collapsing>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Наличие в таблице profiles</Table.HeaderCell>
          <Table.HeaderCell>Наличие в таблице check_profiles</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Icon name={"address card"} size="big"></Icon>{" "}
            {" " + optionalComment}
          </Table.Cell>
          <Table.Cell>?</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};
