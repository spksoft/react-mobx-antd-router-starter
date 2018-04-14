import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NotFound from './NotFound'
import MainPageContainer from './containers/main'

class iRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPageContainer} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default iRouter