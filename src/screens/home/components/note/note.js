import React, { Component } from 'react'
import { Animated, Dimensions, Easing } from 'react-native'
import * as Animatable from 'react-native-animatable'
import glamorous from 'glamorous-native'
import PropTypes from 'prop-types'

import GestureRecognizer from './gesture-recognizer'
import ButtonWrapper from './button-wrapper'
import DeleteNoteButton from './delete-note-button'
import FavoriteNoteButton from './favorite-note-button'

import { colors } from '../../../../styles'

const AnimatedContent = Animatable.createAnimatableComponent(
  glamorous.touchableHighlight({
    flex: 1,
    flexDirection: 'row',
    borderRadius: 2,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    shadowColor: colors.medium,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    marginHorizontal: 5,
    elevation: 7,
    position: 'absolute',
    padding: 5,
    width: Dimensions.get('window').width - 10, // should subtract padding
    zIndex: 1,
  }, props => ({
    minHeight: props.innerMinHeight,
    height: props.innerHeight,
  }))
)
const { Text, View } = glamorous

export default class Note extends Component {
  static propTypes = {
    note: PropTypes.any.isRequired,
    isLastNote: PropTypes.bool.isRequired,
  }

  constructor () {
    super()
    this.state = {
      position: 'center',
      duration: 300,
      easing: 'ease-in-out-circ',
      height: 0,
      minHeight: 30,
    }
  }

  onSwipeLeft() { 
    const { position, duration, easing } = this.state
    if (position === 'center') {
      this.refs.animatedContent.slideLeft(duration, easing)
        .then(() => this.refs.animatedContent.slideLeftAfter(duration, easing))
      this.setState({ position: 'left' })
    }
    if (position === 'right') {
      this.refs.animatedContent.slideBackFromRight(duration, easing)
        .then(() => this.refs.animatedContent.slideBackFromRightAfter(duration, easing))
      this.setState({ position: 'center' })
    }
  }

  onSwipeRight() { 
    const { position, duration, easing } = this.state
    if (position === 'center') {
      this.refs.animatedContent.slideRight(duration, easing)
        .then(() => this.refs.animatedContent.slideRightAfter(duration, easing))
      this.setState({ position: 'right' })
    }
    if (position === 'left') {
      this.refs.animatedContent.slideBackFromLeft(duration, easing)
        .then(() => this.refs.animatedContent.slideBackFromLeftAfter(duration, easing))
      this.setState({ position: 'center' })
    }
  }

  render() {
    const { note, isLastNote } = this.props
    const { height, minHeight } = this.state
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    }

    return (
      <GestureRecognizer
        onSwipeLeft={(state) => this.onSwipeLeft(state)}
        onSwipeRight={(state) => this.onSwipeRight(state)}
        config={config}
        height={height}
        minHeight={minHeight}
        isLastNote={isLastNote}
      >
        <ButtonWrapper>
          <FavoriteNoteButton note={note} />      
        </ButtonWrapper>
        <AnimatedContent
          ref="animatedContent"
          innerHeight={height}
          innerMinHeight={minHeight}
        >
          <View>
            <Text
              onLayout={(event) => {
                const { height } = event.nativeEvent.layout
                this.setState({ height: height + 10 })
              }} 
            >
              {note.text}
            </Text>
          </View>
        </AnimatedContent>
        <ButtonWrapper>
          <DeleteNoteButton id={note.id} />
        </ButtonWrapper>
      </GestureRecognizer>      
    )
  }
}