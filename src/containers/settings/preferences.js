import React, { Component } from 'react';

import {
  Form,
  FormGroup,
  FooterToolbar,
  ToolbarActions,
  Button,
} from '../../components/layout/desktop';

export default class Preferences extends Component {

  render () {
    return (
      <Form>
        <FormGroup>
          <label htmlFor="numberOfPhotos">
            Number of photos:
          </label>
          <input
            id="numberOfPhotos"
            name="settings[numberOfPhotos]"
            type="number"
            min="1"
            max="10"
            className="form-control" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="countDownTime">
            Count down time (in seconds):
          </label>
          <input
            id="countDownTime"
            name="settings[countDownTime]"
            type="number"
            min="5"
            max="10"
            className="form-control" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="intervalBetweenPhotos">
            Interval between photos (in seconds):
          </label>
          <input
            id="intervalBetweenPhotos"
            name="settings[intervalBetweenPhotos]"
            type="number"
            min="1"
            max="10"
            className="form-control" />
        </FormGroup>
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
