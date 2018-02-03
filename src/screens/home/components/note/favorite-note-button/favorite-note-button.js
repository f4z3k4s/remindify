import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Icon from '@expo/vector-icons/Entypo'
import * as Animatable from 'react-native-animatable'

import ButtonWrapper from '../button-wrapper'

import { actionCreators } from '../../../../../ducks/notes'

import { colors } from '../../../../../styles'

export default connect(null, {
  favoriteNote: actionCreators.favoriteNote,
})(class FavoriteNoteButton extends Component {

  static propTypes = {
    note: PropTypes.any.isRequired,
    favoriteNote: PropTypes.func.isRequired,
    height: PropTypes.number.isRequired,
  }

  render() {
    const { favoriteNote, note } = this.props
    const AnimatedIcon = Animatable.createAnimatableComponent(Icon)

    return (
      <ButtonWrapper {...this.props}>
        <AnimatedIcon
          name={note.isFavorite ? 'heart' : 'heart-outlined'}
          onPress={() => favoriteNote(note.id)}
          size={30}
          color={colors.light}
          animation="tada"
          easing="ease-out"
          iterationCount={note.isFavorite ? 1 : 'infinite'}
        />
      </ButtonWrapper>
    )
  }
})