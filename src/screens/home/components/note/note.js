import React, { Component } from 'react'
import { Animated, Easing } from 'react-native'
import glamorous from 'glamorous-native'
import PropTypes from 'prop-types'

import GestureRecognizer from './gesture-recognizer'
import AnimatedContent from './animated-content'
import DeleteNoteButton from './delete-note-button'
import FavoriteNoteButton from './favorite-note-button'

const { Text, View } = glamorous

export default class Note extends Component {
  static propTypes = {
    note: PropTypes.any.isRequired,
  }

  constructor () {
    super()
    this.state = {
      position: 'center',
      duration: 300,
      easing: 'ease-in-out-circ',
      height: 0, // actual height of the note, measured
      minHeight: 30, // min-height to be in sync with icon height
      recognizerConfig: {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80,
      }
    }
  }

  onSwipeLeft() { 
    const { position, duration, easing } = this.state
    if (position === 'center') {
      this.refs.animatedContent.slideLeft(duration, easing)
      this.setState({ position: 'left' })
    }
    if (position === 'right') {
      this.refs.animatedContent.slideBackFromRight(duration, easing)
      this.setState({ position: 'center' })
    }
  }

  onSwipeRight() { 
    const { position, duration, easing } = this.state
    if (position === 'center') {
      this.refs.animatedContent.slideRight(duration, easing)
      this.setState({ position: 'right' })
    }
    if (position === 'left') {
      this.refs.animatedContent.slideBackFromLeft(duration, easing)
      this.setState({ position: 'center' })
    }
  }

  render() {
    const { note } = this.props
    const { height, minHeight, recognizerConfig } = this.state

    return (
      <GestureRecognizer
        onSwipeLeft={(state) => this.onSwipeLeft(state)}
        onSwipeRight={(state) => this.onSwipeRight(state)}
        config={recognizerConfig}
        minHeight={minHeight}
      >
        <FavoriteNoteButton note={note} height={height} />      
        <AnimatedContent
          ref="animatedContent"
          innerMinHeight={minHeight}
        >
          <View>
            <Text
              onLayout={(event) => {
                const { height } = event.nativeEvent.layout
                this.setState({ height })
              }} 
            >
              {note.text}
            </Text>
          </View>
        </AnimatedContent>
        <DeleteNoteButton id={note.id} height={height} isRight />
      </GestureRecognizer>      
    )
  }
}