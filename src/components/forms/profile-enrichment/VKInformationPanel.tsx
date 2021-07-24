import * as React from 'react';
import { getBEMClassName } from '../../utils/bem-helper';
import {
  Grid,
  Icon,
  Table,
  Rating,
  Dropdown,
  Button,
} from 'semantic-ui-react';
import VKenControlPanelController from './vk-en-control-panel';
import {
  TDivDividerProps,
  TVKInformationPanelProps,
} from './vk-info-panel-types';

export const VKInformationPanel = React.memo<TVKInformationPanelProps>(
  ({ profileInDB, profileControlOptions }) => {
    return (
         <InformationProperty
            profileInDB={profileInDB}
            profileControlOptions={profileControlOptions}
         />
    );
  },
);

const InformationProperty = ({
  profileInDB,
  profileControlOptions,
}: TVKInformationPanelProps): JSX.Element => {
  return (
      <Grid columns={1} padded>
         <Grid.Row>
            <Grid.Column>
               <Table inverted collapsing>
                  <Table.Header>
                     <Table.Row>
                        <Table.HeaderCell>
                           Наличие в таблице profiles
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                           Наличие в таблице check_profiles
                        </Table.HeaderCell>
                        <Table.HeaderCell>Наличие отношений</Table.HeaderCell>
                        <Table.HeaderCell>Наличие ребенка</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">
                           Панель управления
                           <Button
                              icon={'angle down'}
                              color={'brown'}
                              fluid
                              size={'mini'}
                           />
                        </Table.HeaderCell>
                     </Table.Row>
                  </Table.Header>
                  <Table.Body>
                     <Table.Row textAlign="center">
                        <Table.Cell>
                           <TableCellBoolean flag={profileInDB.hasProfileRow} />
                           <Button
                              primary
                              content={'Запись в таблицу'}
                              disabled={profileInDB.hasProfileRow}
                           />
                        </Table.Cell>
                        <Table.Cell>
                           <TableCellBoolean
                              flag={profileInDB.hasProfileCheckRow}
                           />
                           <Button
                              primary
                              content={'Запись в таблицу'}
                              disabled={profileInDB.hasProfileCheckRow}
                           />
                        </Table.Cell>
                        <Table.Cell>
                           <TableCellBoolean
                              flag={profileInDB.isInRelationship}
                           />
                        </Table.Cell>
                        <Table.Cell>
                           <TableCellBoolean flag={profileInDB.hasChild} />
                        </Table.Cell>
                        <Table.Cell>
                           <VKenControlPanelController
                              isEditable={profileControlOptions.isEditable}
                           />
                        </Table.Cell>
                     </Table.Row>
                  </Table.Body>
               </Table>
            </Grid.Column>
            <Grid.Column>
               <DivDividerMemoized
                  parentClassName={'VKInformationPanel'}
                  modifiers={['m-position-rel', 'm-margin-top']}
               />
               <RatingComponent name={'общая'} value={profileInDB.estimation} />
            </Grid.Column>
            <Grid.Column>
               <DivDividerMemoized
                  parentClassName={'VKInformationPanel'}
                  modifiers={['m-position-rel', 'm-margin-top']}
               />
               <RatingComponent
                  name={'correlation'}
                  value={profileInDB.correlationEst}
               />
            </Grid.Column>
         </Grid.Row>
      </Grid>
  );
};

const RatingComponent = ({ name = '', value = '0' }): JSX.Element => {
  return (
      <div>
         Оценка {name}:{' '}
         <Rating
            maxRating={10}
            clearable
            icon={'star'}
            defaultRating={parseInt(value, 10)}
         />{' '}
         ({value})
      </div>
  );
};

const DivDividerMemoized = React.memo<TDivDividerProps>(
  ({ parentClassName = '', modifiers = [] }) => {
    return (
         <div
            className={getBEMClassName({
              parentClassName,
              elementName: 'gridColumnDivider',
              modifiers,
            })}
         />
    );
  },
);

// @ts-ignore
const DropDownWithSpecificOptions = () => {
  const optionsInner = [
    { key: 1, text: 'Да', value: true },
    { key: 2, text: 'Нет', value: false },
  ];
  return <Dropdown options={optionsInner} selection wrapSelection />;
};

const NoDataLabelCell = ({
  parentName,
}: {
  [key: string]: string;
}): JSX.Element => {
  return (
      <div
         className={getBEMClassName({
           parentClassName: parentName,
           elementName: 'noDataCell',
           modifiers: [],
         })}
      >
         No data
      </div>
  );
};

const TableCellBooleanFn = ({ flag }: { flag: boolean; }): JSX.Element => {
  const TableCallBoolean = () => {
    return flag ? (
         <Icon name="checkmark" size="big" color={'green'}/>
    ) : !flag ? (
         <Icon name="cancel" size="big" color={'red'}/>
    ) : (
         <NoDataLabelCell parentName={'VKInformationPanel'} />
    );
  };
  return <TableCallBoolean />;
};

const TableCellBoolean = React.memo<{ flag: boolean; }>(TableCellBooleanFn);
