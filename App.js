import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'

import RootNavigator from './src/routes'
import store from './src/store'
import { actionCreators } from './src/ducks/notes'
import './src/animations' // add custom animations


/**
 * This is the entry point of the application,
 * in this case, our app is a stack navigator.
 */
export default class App extends Component {
  componentDidMount() {
    store.dispatch(actionCreators.fetchNotes())
  }

  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider> 
    )
  }
}

AppRegistry.registerComponent('main', () => App)
