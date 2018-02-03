import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Icon from '@expo/vector-icons/Entypo'
import glamorous from 'glamorous-native'
import { colors } from '../../../../styles'

import { NavHeaderLeftSelector } from '../../../../selectors'
import { actionCreators } from '../../../../ducks/ui'

export default connect(NavHeaderLeftSelector, {
  toggleFavorite: actionCreators.toggleFavorite,
})(class NavHeaderLeft extends Component {
  static propTypes = {
    favoriteToggled: PropTypes.bool.isRequired,
    toggleFavorite: PropTypes.func.isRequired,
  }

  render() {
    const { toggleFavorite, favoriteToggled } = this.props
    const Heart = glamorous(Icon)({
      padding: 10,
    })

    return (
      <Heart
        name={favoriteToggled ? 'heart' : 'heart-outlined'}
        onPress={() => toggleFavorite()}
        size={30}
        color={colors.light}
      />
    )
  }
})