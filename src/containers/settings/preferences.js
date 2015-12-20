import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  PaddedMore,
} from '../../components/photonkit';
import PreferencesForm from '../../components/settings/preferences-form';

import { fetchSettingsIfNeeded } from '../../actions/settings';
import { openDirectoryDialog } from '../../actions/dialog';

class PreferencesPage extends Component {

  static propTypes = {
    settings: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
    dialog: PropTypes.object,
  }

  componentDidMount () {
    this.props.dispatch(fetchSettingsIfNeeded());
  }

  componentWillReceiveProps (nextProps) {
    const { dialog } = nextProps;

    if (dialog.didInvalidate) {
      this.refs.preferencesForm.changeDirectory(
        dialog.target,
        dialog.directory
      );
    }
  }

  handleDirectoryExplorerClick (target) {
    this.props.dispatch(openDirectoryDialog(target));
  }

  handleCancel () {

  }

  handleSave () {
  }

  render () {
    const { settings } = this.props;
    const { preferences } = settings.settings;

    if (settings.isFetching || !preferences) {
      return (<div></div>);
    }

    return (
      <PaddedMore>
        <PreferencesForm
          ref="preferencesForm"
          preferences={ preferences }
          onDirectoryExplorerClick={ ::this.handleDirectoryExplorerClick }
          onSave={ ::this.handleSave }
          onCancel={ ::this.handleCancel } />
      </PaddedMore>
    );
  }

}

function mapStateToProps (state) {
  return {
    settings: state.settings,
    dialog: state.dialog,
  };
}

export default connect(mapStateToProps)(PreferencesPage);
