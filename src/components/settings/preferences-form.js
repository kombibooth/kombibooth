import React, { Component, PropTypes } from 'react';

import {
  Form,
  FormGroup,
  FooterToolbar,
  ToolbarActions,
  Button,
  Checkbox,
} from '../../components/photonkit';

export default class PreferencesForm extends Component {
  static propTypes = {
    preferences: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onDirectoryExplorerClick: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
  }

  constructor (props, context) {
    super(props, context);

    this.state = {
      ...props.preferences,
    };
  }

  handleSave (event) {
    event.preventDefault();
    this.props.onSave(this.state);
  }

  handleDirectoryExplorerClick (target, event) {
    event.preventDefault();
    this.props.onDirectoryExplorerClick(target);
  }

  handleChange (event) {
    const newState = {...this.state};

    let value = event.target.value;
    if (event.target.type === 'number') {
      value = parseInt(event.target.value, 10);
    }

    if (event.target.type === 'checkbox') {
      value = !!event.target.checked;
    }

    newState[event.target.name] = value;
    this.setState(newState);
  }

  changeDirectory (target, value) {
    this.refs[target].value = value;
  }

  renderPhotosSave () {
    return (
      <div>
        <FormGroup>
          <label htmlFor="directoryToSavePhotos">
            Directory to save photos:
          </label>
          <input
            id="directoryToSavePhotos"
            name="directoryToSavePhotos"
            ref="directoryToSavePhotos"
            type="text"
            onChange={ ::this.handleChange }
            defaultValue={this.state.directoryToSavePhotos}
            className="form-control"
             />
            <Button
              icon="folder"
              onClick={ (e) => this.handleDirectoryExplorerClick('directoryToSavePhotos', e) } />
        </FormGroup>
      </div>
    );
  }

  render () {
    return (
      <Form onSubmit={ ::this.handleSave }>
        <FormGroup>
          <label htmlFor="numberOfPhotos">
            Number of photos:
          </label>
          <input
            id="numberOfPhotos"
            name="numberOfPhotos"
            type="number"
            min="1"
            max="10"
            className="form-control"
            onChange={ ::this.handleChange }
            defaultValue={ this.state.numberOfPhotos }
             />
        </FormGroup>
        <FormGroup>
          <label htmlFor="countDownTime">
            Count down time (in seconds):
          </label>
          <input
            id="countDownTime"
            name="countDownTime"
            type="number"
            min="5"
            max="10"
            className="form-control"
            onChange={ ::this.handleChange }
            defaultValue={ this.state.countDownTime }
             />
        </FormGroup>
        <FormGroup>
          <label htmlFor="intervalBetweenPhotos">
            Interval between photos (in seconds):
          </label>
          <input
            id="intervalBetweenPhotos"
            name="intervalBetweenPhotos"
            type="number"
            min="1"
            max="10"
            className="form-control"
            onChange={ ::this.handleChange }
            defaultValue={ this.state.intervalBetweenPhotos }
             />
        </FormGroup>
        <Checkbox onChange={ ::this.handleChange } name="shouldSavePhotos">
          Photos should be saved.
        </Checkbox>
        { this.state.shouldSavePhotos && this.renderPhotosSave() }
        <FooterToolbar style={{marginTop: '30px'}}>
          <ToolbarActions>
            <Button className="pull-left">Cancel</Button>
            <Button type="primary" className="pull-right">Save</Button>
          </ToolbarActions>
        </FooterToolbar>
      </Form>
    );
  }
}
