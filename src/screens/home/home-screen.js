import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import glamorous from 'glamorous-native'

import { HomeScreenSelector } from '../../selectors'
import { NavHeaderLeft, NavHeaderRight, Note } from './components'

const { ScrollView } = glamorous

export default connect(HomeScreenSelector)(class HomeScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Notes',
    headerLeft: <NavHeaderLeft />,
    headerRight: <NavHeaderRight navigation={navigation} />,
  })
  
  render() {
    const { notes } = this.props
    return (
      <ScrollView
        paddingTop={10}
      >
        {notes.map(note =>
          <Note
            key={note.id}
            note={note}
          />)}
      </ScrollView>
    )
  }
})
