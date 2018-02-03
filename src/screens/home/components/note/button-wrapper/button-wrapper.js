import glamorous from 'glamorous-native'

import store from '../../../../../store'

const width = store.getState().ui.sideWidth
export default glamorous.touchableHighlight({
  width,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
}, props => ({
  height: props.height,
  top: 5,
  [props.isRight ? 'right' : 'left']: 0,
}))