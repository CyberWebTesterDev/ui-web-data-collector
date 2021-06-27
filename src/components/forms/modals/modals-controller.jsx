import React from 'react';
import { connect } from 'react-redux';
import store from '../../../store';
import { createSelector } from 'reselect';
import { ModalLargePost } from './modal';

export class ModalsController extends React.Component {
  getModalState = () => store.getState().modal;
  updateState = () => {
    store.subscribe(() => {
      this.setState({
        ...this.getModalState(),
      });
    });
  };
  state = {
    ...this.updateState(),
  };

  componentDidMount() {
    console.log('ModalsController mounted current state: ' + '\n');
    console.log(this.state);
    console.log('Modal state from store: ' + '\n');
    console.log(store.getState().modal);
  }

  render() {
    return this.state.visible && this.state.isForPost ? (
         <ModalLargePost post={this.state.post} />
    ) : false;
  }
}
