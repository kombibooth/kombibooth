import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  PaddedMore,
  Form,
  FormGroup,
  FooterToolbar,
  ToolbarActions,
  Button,
  Checkbox,
} from '../../components/photonkit';

import { fetchSettingsIfNeeded } from '../../actions/settings';

class PreferencesPage extends Component {

  static propTypes = {
    settings: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
  }

  constructor (props, context) {
    super(props, context);
  }

  componentDidMount () {
    this.props.dispatch(fetchSettingsIfNeeded());
  }

  handleChange (event) {
    const newState = {};

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

  renderPhotosSave () {
    const { preferences } = this.props.settings;

    return (
      <div>
        <FormGroup>
          <label htmlFor="directoryToSavePhotos">
            Directory to save photos:
          </label>
          <input
            id="directoryToSavePhotos"
            name="preferences[directoryToSavePhotos]"
            type="text"
            value={preferences.directoryToSavePhotos}
            className="form-control"
             />
        </FormGroup>
        <FormGroup>
          <label htmlFor="directoryToSavePhotos">
            Directory to save photos:
          </label>
          <input
            id="directoryToSavePhotos"
            name="preferences[folderToSavePhotos]"
            type="text"
            value={preferences.folderToSavePhotos}
            className="form-control"
             />
          <Button icon="folder" onClick={ ::this.handleOpenDirectoryExplore } />
        </FormGroup>
      </div>
    );
  }

  render () {
    const { settings } = this.props;
    const { preferences } = settings;

    if (settings.isFetching || !preferences) {
      return (<div></div>);
    }

    return (
      <Form>
        <PaddedMore>
          <FormGroup>
            <label htmlFor="numberOfPhotos">
              Number of photos:
            </label>
            <input
              id="numberOfPhotos"
              name="preferences[numberOfPhotos]"
              type="number"
              min="1"
              max="10"
              className="form-control"
              value={preferences.numberOfPhotos}
               />
          </FormGroup>
          <FormGroup>
            <label htmlFor="countDownTime">
              Count down time (in seconds):
            </label>
            <input
              id="countDownTime"
              name="preferences[countDownTime]"
              type="number"
              min="5"
              max="10"
              className="form-control"
              value={ preferences.countDownTime }
               />
          </FormGroup>
          <FormGroup>
            <label htmlFor="intervalBetweenPhotos">
              Interval between photos (in seconds):
            </label>
            <input
              id="intervalBetweenPhotos"
              name="preferences[intervalBetweenPhotos]"
              type="number"
              min="1"
              max="10"
              className="form-control"
              value={ preferences.intervalBetweenPhotos }
               />
          </FormGroup>
          <Checkbox name="preferences[shouldSavePhotos]">
            Photos should be saved.
          </Checkbox>
          { preferences.shouldSavePhotos && this.renderPhotosSave() }
          <FooterToolbar style={{marginTop: '30px'}}>
            <ToolbarActions>
              <Button className="pull-left">Cancel</Button>
              <Button type="primary" className="pull-right">Save</Button>
            </ToolbarActions>
          </FooterToolbar>
        </PaddedMore>
      </Form>
    );
  }

}

function mapStateToProps (state) {
  return {
    settings: state.settings,
  };
}

export default connect(mapStateToProps)(PreferencesPage);
