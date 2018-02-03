import React, { Component } from 'react'
import Icon from '@expo/vector-icons/Entypo'
import glamorous from 'glamorous-native'
import { colors } from '../../../../styles'

const Feather = glamorous(Icon)({
  padding: 10,
})

export default class NavHeaderRight extends Component {
  navigateToCreateNote() {
    this.props.navigation.navigate('CreateNote')
  }

  render() {

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