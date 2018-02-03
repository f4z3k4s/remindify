import * as Animatable from 'react-native-animatable'

import store from '../store'

const { sideWidth } = store.getState().ui

const extendEffect = (originalEffect, propName, propArray) => {
  const keys = Object.keys(originalEffect)

  // workaround for: https://stackoverflow.com/questions/33351816/how-to-prevent-automatic-sort-of-object-numeric-property
  // put '1' back to last index
  keys.push(keys.splice(keys.indexOf('1'), 1))

  return keys.reduce((obj, key, idx) => {
    obj[key] = { ...originalEffect[key], [propName]: propArray[idx] }
    return obj
  }, {})
}

// breakpoints of the animations
const breakpoints = [0, 0.2, 0.4, 0.43, 0.53, 0.7, 0.8, 0.9, 1]
// stretch
const calcScaleY = scaleX => 1 / scaleX
const scaleXs = [1, 1.15, 1.2, 1.3, 1.4, 1.6, 1.4, 1.2, 1]
const scaleYs = scaleXs.map(scaleX => calcScaleY(scaleX))
// slideRight
const translateXs = [0, 5, 8, 15, 35, 40, 42, 44, sideWidth]
// slideLeft
const negTranslateXs = translateXs.map(translateX => -translateX)
// slideBackFromRight
const revTranslateXs = [...translateXs].reverse()
// slideBackFromLeft
const revNegTranslateXs = [...negTranslateXs].reverse()

const stretch = breakpoints.reduce((obj, bp, idx) => {
  obj[bp] = {
    scaleX: scaleXs[idx],
    scaleY: scaleYs[idx],
  }
  return obj
}, {})

const slideRight = extendEffect(stretch, 'translateX', translateXs)
const slideLeft = extendEffect(stretch, 'translateX', negTranslateXs)
const slideBackFromRight = extendEffect(stretch, 'translateX', revTranslateXs)
const slideBackFromLeft = extendEffect(stretch, 'translateX', revNegTranslateXs)
const deleteNote = {
  from: {
    scale: 1,
  },
  to: {
    scale: 0,
  },
}

Animatable.initializeRegistryWithDefinitions({
  slideRight,
  slideLeft,
  slideBackFromRight,
  slideBackFromLeft,
  deleteNote,
})
