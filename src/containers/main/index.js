import React from 'react';
import { inject, observer } from 'mobx-react'
import MainPage from '../../components/main'

@inject('counter') @observer
class MainContainer extends React.Component {
  render() {
    return (
      <MainPage value={this.props.counter.value} onButtonPress={ () => this.props.counter.add() } />
    )
  }
}

export default MainContainer