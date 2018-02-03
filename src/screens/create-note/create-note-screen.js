import React, { Component } from 'react'
import glamorous from 'glamorous-native'

import { CreateNoteButton, NoteInput } from './components'

const { ScrollView } = glamorous

export default class CreateNoteScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Create note',
    headerRight: <CreateNoteButton navigation={navigation} />,
  })
  

  render() {
    return (
      <ScrollView
        paddingHorizontal={5}
      >
        <NoteInput />
      </ScrollView>
    )
  }
}
