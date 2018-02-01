import React, { Component } from 'react'
import { Dimensions } from 'react-native'
import { connect } from 'react-redux'
import glamorous from 'glamorous-native'
import PropTypes from 'prop-types'

import { actionCreators } from '../../../../ducks/ui'
import { NoteInputSelector } from '../../../../selectors'

import { colors } from '../../../../styles'

const { TextInput } = glamorous

class NoteInput extends Component {
  static propTypes = {
    currentNote: PropTypes.any.isRequired,
    setNote: PropTypes.func.isRequired,
  }

  handleTextChange(text) {
    this.props.setNote(text)
  }

  render() {
    const { currentNote } = this.props
    return (
      <TextInput
        height={500}
        width={Dimensions.get('window').width - 10}
        onChangeText={text => this.handleTextChange(text)}
        value={currentNote}
        multiline
        selectionColor={colors.medium}
        color={colors.medium}
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder='Tell me your deepest secret...'
        placeholderTextColor={colors.medium}
        textAlignVertical='top'
      />
    )
  }
}

export default connect(NoteInputSelector, {
  setNote: actionCreators.setNote,
})(NoteInput)