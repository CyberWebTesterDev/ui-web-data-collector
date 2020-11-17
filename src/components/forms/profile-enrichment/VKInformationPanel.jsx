import React from "react";
import { has } from "lodash";
import { getBEMClassName } from "../../utils/bem-helper";
import {
  Grid,
  Icon,
  Table,
  Menu,
  Rating,
  Dropdown,
  Button,
} from "semantic-ui-react";
import { setMaxWidth, setWidth } from "../../utils/css-class-util";
import VKenControlPanelController, { VKenControlPanel } from "./vk-en-control-panel";

export const VKInformationPanel = ({ profileInDB, profileControlOptions }) => {
  return <InformationProperty profileInDB={profileInDB} profileControlOptions={profileControlOptions} />;
};

const InformationProperty = ({ profileInDB, profileControlOptions }) => {

  return (
    <Grid columns={1} padded>
      <Grid.Row>
        <Grid.Column>
          <Table inverted collapsing>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Наличие в таблице profiles</Table.HeaderCell>
                <Table.HeaderCell>
                  Наличие в таблице check_profiles
                </Table.HeaderCell>
                <Table.HeaderCell>Наличие отношений</Table.HeaderCell>
                <Table.HeaderCell>Наличие ребенка</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">
                  Панель управления
                  <Button icon={"angle down"} color={"brown"} fluid size={'mini'}></Button>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row textAlign="center">
                <Table.Cell>
                  <TableCellBoolean flag={profileInDB.hasProfileRow} />
                  <Button
                    primary
                    content={"Запись в таблицу"}
                    disabled={profileInDB.hasProfileRow}
                  />
                </Table.Cell>
                <Table.Cell>
                  <TableCellBoolean flag={profileInDB.hasProfileCheckRow} />
                  <Button
                    primary
                    content={"Запись в таблицу"}
                    disabled={profileInDB.hasProfileCheckRow}
                  />
                </Table.Cell>
                <Table.Cell>
                  <TableCellBoolean flag={profileInDB.isInRelationship} />
                </Table.Cell>
                <Table.Cell>
                  <TableCellBoolean flag={profileInDB.hasChild} />
                </Table.Cell>
                <Table.Cell>
                  <VKenControlPanelController isEditable={profileControlOptions.isEditable} />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
        <Grid.Column>
          <DivDivider
            parentClassName={"VKInformationPanel"}
            modifiers={["m-position-rel", "m-margin-top"]}
          />
          <RatingComponent name={"общая"} value={profileInDB.estimation} />
        </Grid.Column>
        <Grid.Column>
          <DivDivider
            parentClassName={"VKInformationPanel"}
            modifiers={["m-position-rel", "m-margin-top"]}
          />
          <RatingComponent
            name={"correlation"}
            value={profileInDB.correlationEst}
          />
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
      style={{ ...setWidth("500px"), ...setMaxWidth("1000px") }}
    >
      Segment Menu
    </div>
  ) : (
    false
  );
};

const RatingComponent = ({ name = "", value = 0 }) => {
  return (
    <div>
      Оценка {name}:{" "}
      <Rating
        maxRating={10}
        clearable
        icon={"star"}
        defaultRating={parseInt(value, 10)}
      />{" "}
      ({value})
    </div>
  );
};

const DivDivider = ({ parentClassName = "", modifiers = [] }) => {
  return (
    <div
      className={getBEMClassName(
        parentClassName,
        "gridColumnDivider",
        modifiers
      )}
    ></div>
  );
};

const DropDownWithSpecificOptions = () => {
  const optionsInner = [
    { key: 1, text: "Да", value: true },
    { key: 2, text: "Нет", value: false },
  ];
  return <Dropdown options={optionsInner} selection wrapSelection />;
};

const NoDataLabelCell = ({ parentName }) => {
  return (
    <div className={getBEMClassName(parentName, "noDataCell")}>No data</div>
  );
};

const TableCellBoolean = ({ flag }) => {
  return flag ? (
    <Icon name="checkmark" size="big" color={"green"}></Icon>
  ) : flag === false ? (
    <Icon name="cancel" size="big" color={"red"}></Icon>
  ) : (
    <NoDataLabelCell parentName={"VKInformationPanel"} />
  );
};
