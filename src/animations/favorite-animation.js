import { Dimensions } from 'react-native'
import * as Animatable from 'react-native-animatable'

import store from '../store'

const { sideWidth } = store.getState().ui

const scale = 3
const size = 100
const windowWidth = Dimensions.get('window').width
const normalPosition = {
  scale: 1,
  right: 0,
  zIndex: -1,
  elevation: -1, // necessary for android
  width: sideWidth,
}


const animatedPosition = {
  scale,
  right: windowWidth / 2 - (size / 2),
  zIndex: 100, // should set to a relatively high number to quickly elevate to top
  elevation: 100, // necessary for android
  width: size,
}

const pulsed = {
  ...animatedPosition,
  scale: 1.05,
}

const favorite = {
  0: normalPosition,
  0.1: animatedPosition,
  0.3: animatedPosition,
  0.5: pulsed,
  0.7: animatedPosition,
  0.9: animatedPosition,
  1: normalPosition,
}

Animatable.initializeRegistryWithDefinitions({
  favorite,
})
