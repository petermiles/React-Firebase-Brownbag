import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';
import Register from './component/Register';
import ImageUploader from './component/ImageUploader';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          component={this.props.userid ? ImageUploader : Register}
        />
      </Switch>
    );
  }
}
