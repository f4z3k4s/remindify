import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Icon from '@expo/vector-icons/Entypo'

import ButtonWrapper from '../button-wrapper'

import { actionCreators } from '../../../../../ducks/notes'

import { colors } from '../../../../../styles'

export default connect(null, {
  deleteNote: actionCreators.deleteNote,
})(class DeleteNoteButton extends Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    deleteNote: PropTypes.func.isRequired,
    height: PropTypes.number.isRequired,
    isRight: PropTypes.bool,
  }

  render() {
    const { deleteNote, id } = this.props

    return (
      <ButtonWrapper {...this.props}>
        <Icon
          name="trash"
          onPress={() => deleteNote(id)} 
          size={30}
          color={colors.darkest}
        />
      </ButtonWrapper>
    )
  }
})