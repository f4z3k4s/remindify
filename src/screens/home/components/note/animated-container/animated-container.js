import React, { Component } from 'react'
import glamorous from 'glamorous-native'
import GestureRecognizer from 'react-native-swipe-gestures'
import * as Animatable from 'react-native-animatable'

const StyledGestureRecognizer = glamorous(GestureRecognizer)({
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  position: 'relative',
  marginBottom: 10,
}, props => ({
  minHeight: props.minHeight,
}))

/* provides a wrapper for native props, see:
  https://facebook.github.io/react-native/docs/direct-manipulation.html */
class NativePropsWrapper extends Component {
  render() {
    return (
      <StyledGestureRecognizer {...this.props}/>
    )
  }
}

export default Animatable.createAnimatableComponent(NativePropsWrapper)