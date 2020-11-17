import React from "react";
import { has } from "lodash";
import { getBEMClassName } from "../../utils/bem-helper";
import { Grid, Icon, Table, Menu, Rating } from "semantic-ui-react";
import { setMaxWidth, setWidth } from "../../utils/css-class-util";

export const VKInformationPanel = ({ profileInDB }) => {

  return <InformationProperty profileInDB={profileInDB}  />;
};

const InformationProperty = ({ profileInDB }) => {
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
                  {profileInDB.hasProfileRow ? <Icon name="checkmark" size="big" color={"green"}></Icon>
                      : <Icon name="cancel" size="big" color={"red"}></Icon>}
                </Table.Cell>
                <Table.Cell>
                  {profileInDB.hasProfileCheckRow ? <Icon name="checkmark" size="big" color={"green"}></Icon>
                      : <Icon name="cancel" size="big" color={"red"}></Icon>}
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
          <RatingComponent name={'общая'} value={profileInDB.estimation}/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

const MenuFragment = ({ visible = false, modifiers = [] }) => {
  return visible ? (
    <div
      className={getBEMClassName("VKInformationPanel", "menuSegment", [
        "m-position-rel",
        "m-text-align-center",
      ])}
      style={{...setWidth('500px'), ...setMaxWidth('1000px')}}
    >
      Segment Menu
    </div>
  ) : false;
};

const RatingComponent = ({name = '', value = 0}) => {
  return (
      <div>Оценка {name}: <Rating maxRating={10} clearable icon={'star'} defaultRating={parseInt(value, 10)}/> ({value})</div>
  )
}
