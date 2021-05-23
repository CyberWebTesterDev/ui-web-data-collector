import * as React from 'react';
import { useCallback } from 'react';
import { getBEMClassName } from '../../utils/bem-helper';
import {
   Grid,
   Icon,
   Table,
   Menu,
   Rating,
   Dropdown,
   Button,
} from 'semantic-ui-react';
import { setMaxWidth, setWidth } from '../../utils/css-class-util';
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
                           ></Button>
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
const MenuFragment = ({
   visible = false,
   modifiers = [],
}): JSX.Element | boolean => {
   return visible ? (
      <div
         className={getBEMClassName({
            blockName: 'VKInformationPanel',
            elementName: 'menuSegment',
            modifiers: ['m-position-rel', 'm-text-align-center'],
         })}
         style={{ ...setWidth('500px'), ...setMaxWidth('1000px') }}
      >
         Segment Menu
      </div>
   ) : (
      false
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
      const DivDivider = useCallback(
         (parentClassName, modifiers) => {
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
         [parentClassName, modifiers],
      );
      return <DivDivider />;
   },
);
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
//подход к написанию функционального компонента через useCallback
const TableCellBooleanFn = ({ flag }: { flag: boolean }): JSX.Element => {
   const TableCallBooleanMemoized = useCallback(
      (flag) => {
         return flag ? (
            <Icon name="checkmark" size="big" color={'green'}></Icon>
         ) : flag === false ? (
            <Icon name="cancel" size="big" color={'red'}></Icon>
         ) : (
            <NoDataLabelCell parentName={'VKInformationPanel'} />
         );
      },
      [flag],
   );
   return <TableCallBooleanMemoized />;
};
const TableCellBoolean = React.memo<{ flag: boolean }>(TableCellBooleanFn);
