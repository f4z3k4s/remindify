import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Icon from '@expo/vector-icons/Entypo'
import * as Animatable from 'react-native-animatable'

import ButtonWrapper from '../button-wrapper'

import { actionCreators as notesActionCreators } from '../../../../../ducks/notes'
import { actionCreators as uiActionCreators } from '../../../../../ducks/ui'

import { colors } from '../../../../../styles'

const AnimatedButtonWrapper = Animatable.createAnimatableComponent(ButtonWrapper)

export default connect(null, {
  favoriteNote: notesActionCreators.favoriteNote,
  toggleIsAnimating: uiActionCreators.toggleIsAnimating,
})(class FavoriteNoteButton extends Component {

  static propTypes = {
    note: PropTypes.any.isRequired,
    favoriteNote: PropTypes.func.isRequired,
    innerHeight: PropTypes.number.isRequired,
    innerMinHeight: PropTypes.number.isRequired,
    isRight: PropTypes.bool,
    onSwipeRight: PropTypes.func.isRequired,
    isAnimating: PropTypes.bool.isRequired,
    toggleIsAnimating: PropTypes.func.isRequired,
  }

  favoriteAndSwipe() {
    const { note, favoriteNote, onSwipeRight, toggleIsAnimating } = this.props
    
    favoriteNote(note.id)    
    if (!note.isFavorite) {
      toggleIsAnimating()
      setTimeout(() => onSwipeRight(), 2000)    
      this.refs.animatedButtonWrapper.favorite(2000, 'ease-in-out-expo')
        .then(endState => endState.finished ? toggleIsAnimating() : null)
    }
  }

  render() {
    const { note, isAnimating } = this.props

    return (
      <AnimatedButtonWrapper
        ref={'animatedButtonWrapper'}
        {...this.props}
        animation="tada"
        easing="ease-out"
        iterationCount={note.isFavorite ? 1 : 'infinite'}
      >
        <Icon
          name={note.isFavorite ? 'heart' : 'heart-outlined'}
          onPress={() => !isAnimating ? this.favoriteAndSwipe() : null}
          size={25}
          color={colors.light}
        />
      </AnimatedButtonWrapper>
    )
  }
})