import React, { Component } from 'react'
import { connect } from 'react-redux'
import Icon from '@expo/vector-icons/Entypo'
import glamorous from 'glamorous-native'
import { colors } from '../../../../styles'

import store from '../../../../store'

export default class NavHeaderRight extends Component {
  navigateToCreateNote() {
    this.props.navigation.navigate('CreateNote')
  }

  render() {
    const Feather = glamorous(Icon)({
      padding: 10,
    })

    return (
      <Feather
        name="feather"
        onPress={() => this.navigateToCreateNote()} 
        size={30}
        color={colors.white}
      />
    )
  }
}