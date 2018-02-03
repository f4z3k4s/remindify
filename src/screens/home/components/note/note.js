import React, { Component } from 'react'
import { connect } from 'react-redux'
import glamorous from 'glamorous-native'
import PropTypes from 'prop-types'

import { NoteSelector } from '../../../../selectors'
import { actionCreators } from '../../../../ducks/notes'

import AnimatedContainer from './animated-container'
import AnimatedContent from './animated-content'
import DeleteNoteButton from './delete-note-button'
import FavoriteNoteButton from './favorite-note-button'

const { Text, View } = glamorous

export default connect(NoteSelector, {
  slideLeft: actionCreators.slideLeft,
  slideRight: actionCreators.slideRight,
  slideBackFromLeft: actionCreators.slideBackFromLeft,
  slideBackFromRight: actionCreators.slideBackFromRight,
})(
  class Note extends Component {
    static propTypes = {
      note: PropTypes.any.isRequired,
    }

    constructor () {
      super()
      this.state = {
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

    deleteNoteAnimation() {
      return this.refs.animatedContainer.deleteNote(800, 'ease-out-expo')
    }

    onSwipeLeft() {
      const { note, slideLeft, slideBackFromRight } = this.props 
      const { id, position } = note
      const { duration, easing } = this.state
      if (position === 'center') {
        this.refs.animatedContent && this.refs.animatedContent.slideLeft(duration, easing)
        slideLeft(id)
      }
      if (position === 'right') {
        this.refs.animatedContent && this.refs.animatedContent.slideBackFromRight(duration, easing)
        slideBackFromRight(id)
      }
    }

    onSwipeRight() { 
      const { note, slideRight, slideBackFromLeft } = this.props       
      const { id, position } = note    
      const { duration, easing } = this.state
      if (position === 'center') {
        this.refs.animatedContent && this.refs.animatedContent.slideRight(duration, easing)
        slideRight(id)
      }
      if (position === 'left') {
        this.refs.animatedContent && this.refs.animatedContent.slideBackFromLeft(duration, easing)
        slideBackFromLeft(id)
      }
    }

    render() {
      const { note, isAnimating } = this.props
      const { height, minHeight, recognizerConfig } = this.state

      return (
        <AnimatedContainer
          ref="animatedContainer"
          onSwipeLeft={(state) => !isAnimating ? this.onSwipeLeft(state) : null}
          onSwipeRight={(state) => !isAnimating ? this.onSwipeRight(state) : null}
          config={recognizerConfig}
          minHeight={minHeight}
        >  
          <DeleteNoteButton
            id={note.id}
            deleteNoteAnimation={() => this.deleteNoteAnimation()}
            innerHeight={height}
            innerMinHeight={minHeight}
          /> 
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
          <FavoriteNoteButton
            note={note}
            innerHeight={height}
            innerMinHeight={minHeight}
            onSwipeRight={() => this.onSwipeRight()}
            isAnimating={isAnimating}
            isRight            
          /> 
        </AnimatedContainer>   
      )
    }
  })