import * as React from 'react';
import { Checkbox, Icon } from 'semantic-ui-react';
import { CreateDivBlock } from '../../utils/bem-helper';
import * as actions from '../basic-form-actions/form-actions';
import { connect } from 'react-redux';
import { YearPicker } from './control-elements';
import {
   getCurrentFavoriteCheckBoxValueSelector,
   getCurrentFormValuesSelector,
   getInitialFormValuesSelector,
} from './vk-en-selectors';
import { popupHide, popupShow } from '../popups/popup-actions';
import { TAction, TVKenControlPanel } from './vk-info-panel-types';

class VKenControlPanelController extends React.Component<TVKenControlPanel['VKenControlPanelProps']> {
   isChecked = false;
   labels = ['Добавить в избранные'];

   componentDidMount() {
      console.log(`VKenControlPanelController: mounted. Props: \n`);
      console.log(this.props);
   }

   componentWillUnmount() {
      const { cleanForm } = this.props;
      cleanForm();
   }

   componentDidUpdate() {
      console.log(`VKenControlPanelController: updated. Props: \n`);
      console.log(this.props);
   }

   getFieldValueByName = (fieldName: string | null = null) => {
      console.log(
         `VKenControlPanelController.getFieldValueByName called with parameter: ${fieldName}`,
      );
      const { currentValues } = this.props;
      const object = currentValues.find(
         (object) => object.fieldName == fieldName,
      );
      let result = object ? object.fieldValue : undefined;
      console.log(
         `VKenControlPanelController.getFieldValueByName will return value: ${result}`,
      );
      return result;
   };

   render() {
      const {
         isEditable,
         updateFormValue,
         initialValues,
         currentFavoriteCheckBoxValue,
      } = this.props;
      return (
         <CreateDivBlock
            name={'VKenControlPanel'}
            modifiers={[
               'm-width-max-content',
               'm-position-rel',
               'm-height-max-content',
            ]}
         >
            <Checkbox
               key={'addToFavorite'}
               checked={
                  this.getFieldValueByName('addToFavorite') === undefined
                     ? initialValues[0].fieldValue
                     : currentFavoriteCheckBoxValue
               }
               name={'addToFavorite'}
               disabled={!isEditable}
               label={this.labels[0]}
               onChange={() =>
                  updateFormValue('Checkbox', {
                     fieldName: 'addToFavorite',
                     fieldValue:
                        this.getFieldValueByName('addToFavorite') === undefined
                           ? !initialValues[0].fieldValue
                           : !currentFavoriteCheckBoxValue,
                  })
               }
            />
            <YearPicker
               handleOnChange={(
                  e: React.ChangeEvent<HTMLSelectElement>,
               ): TAction =>
                  updateFormValue('yearPicker', {
                     fieldName: 'yearPicker',
                     fieldValue: e.target.value,
                  })
               }
            />
            <h5>=========</h5>
            <Icon name={'save'} size={'large'} />
         </CreateDivBlock>
      );
   }
}

const mapStateToProps = ({ form }: { form: TVKenControlPanel }) => {
   return {
      initialValues: getInitialFormValuesSelector(form),
      currentValues: getCurrentFormValuesSelector(form),
      isFormChanged: form.VKenControlPanel.isFormChanged,
      currentFavoriteCheckBoxValue: getCurrentFavoriteCheckBoxValueSelector(
         form,
      ),
   };
};
export default connect(mapStateToProps, { ...actions, popupShow, popupHide })(
   VKenControlPanelController,
);
