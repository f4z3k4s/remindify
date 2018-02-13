import React, { Component } from 'react'
import { Keyboard } from 'react-native'
import glamorous from 'glamorous-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Icon from '@expo/vector-icons/Entypo'

import { actionCreators as notesActionCreators } from '../../../../ducks/notes'
import { actionCreators as uiActionCreators } from '../../../../ducks/ui'
import { CreateNoteButtonSelector } from '../../../../selectors'

import { colors } from '../../../../styles'

export default connect(CreateNoteButtonSelector, {
  createNote: notesActionCreators.createNote,
  setNote: uiActionCreators.setNote,
})(
  class CreateNoteButton extends Component {
    static propTypes = {
      navigation: PropTypes.any.isRequired,
      createNote: PropTypes.func.isRequired,
      setNote: PropTypes.func.isRequired,
      currentNote: PropTypes.any.isRequired,
    }

    /**
     * Creates a note in state.notes
     * Resets currentNote in state.ui
     * Redirects back to home
     */
    createNote() {
      const { createNote, currentNote, setNote, navigation } = this.props
      Keyboard.dismiss()
      createNote(currentNote)
      setNote('')
      navigation.navigate('Home')
    }

    render() {
      const Check = glamorous(Icon)({
        padding: 10,
      })
      return (
        <Check
          size={30}
          color={colors.white}
          onPress={() => this.createNote()}
          name='check'
        />
      )
    }
  })
