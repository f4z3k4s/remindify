import React, { Component } from 'react'
import { connect } from 'react-redux'
import glamorous from 'glamorous-native'
import PropTypes from 'prop-types'

import { HomeScreenSelector } from '../../selectors'
import { colors } from '../../styles'
import { NavHeaderLeft, NavHeaderRight, Note, ActivityIndicator } from './components'

const { ScrollView } = glamorous


export default connect(HomeScreenSelector)(class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Notes',
    headerLeft: <NavHeaderLeft />,
    headerRight: <NavHeaderRight navigation={navigation} />,
  })

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    notes: PropTypes.array.isRequired,
  }
  
  render() {
    const { notes, loading } = this.props

    if (loading) {
      return <ActivityIndicator color={colors.darkest} size={'large'}/>
    }

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
