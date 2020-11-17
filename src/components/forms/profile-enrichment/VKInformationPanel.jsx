import React from "react";
import { has } from "lodash";
import { getBEMClassName } from "../../utils/bem-helper";
import { Grid, Icon, Table, Menu, Rating } from "semantic-ui-react";

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
    <Grid columns={2} padded>
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
        <Grid.Column textAlign="right">
          <Menu
            fluid
            widths={2}
            attached="top"
            tabular
            inverted
            position="right"
            size={"large"}
            color="brown"
          >
            <Menu.Item name="Действия" />
            <Menu.Item name="Подробности" />
          </Menu>
          <React.Fragment>
            <MenuFragment visible />
          </React.Fragment>
        </Grid.Column>
        <Grid.Column>
          <RatingComponent value={0}/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

const MenuFragment = ({ visible = false, modifier = "" }) => {
  return visible ? (
    <div
      className={getBEMClassName("VKInformationPanel", "menuSegment", [
        "m-position-rel",
        "m-text-align-center",
      ])}
    >
      Segment Menu
    </div>
  ) : false;
};

const RatingComponent = ({optionalComment = '', value = 0}) => {
  return (
      <div>Оценка {optionalComment}: <Rating maxRating={10} clearable icon={'star'} defaultRating={value}/> ({value})</div>
  )
}
