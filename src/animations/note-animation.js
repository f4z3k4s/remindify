import * as Animatable from 'react-native-animatable'
import { pulse } from 'react-native-animatable/definitions/attention-seekers'

import store from '../store'

const offsetX = store.getState().ui.sideWidth

const getInitialPos = isNegative => ({
  from: {
    translateX: 0,
  },
  to: {
    translateX: isNegative ? -offsetX : offsetX,
  },
})

const createAfterEffect = (originalEffect, translateX) =>
  Object.keys(originalEffect).reduce((obj, key) => {
    obj[key] = { ...originalEffect[key], translateX }
    return obj
  }, {})

const left = getInitialPos(true)
const right = getInitialPos(false)

Animatable.initializeRegistryWithDefinitions({
  slideLeft: {
    from: left.from,
    to: left.to,
  },
  slideBackFromLeft: {
    from: left.to,
    to: left.from,
  },
  slideRight: {
    from: right.from,
    to: right.to,
  },
  slideBackFromRight: {
    from: right.to,
    to: right.from,
  },
  slideLeftAfter: createAfterEffect(pulse, left.to.translateX),
  slideBackFromLeftAfter: createAfterEffect(pulse, left.from.translateX),
  slideRightAfter: createAfterEffect(pulse, right.to.translateX),
  slideBackFromRightAfter: createAfterEffect(pulse, right.from.translateX),
})
