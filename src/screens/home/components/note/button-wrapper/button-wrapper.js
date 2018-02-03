import glamorous from 'glamorous-native'

import store from '../../../../../store'

const width = store.getState().ui.sideWidth
export default glamorous.touchableHighlight({
  width,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  zIndex: -1,
}, props => ({
  height: props.innerHeight || props.innerMinHeight,
  top: 10,
  [props.isRight ? 'right' : 'left']: 0,
}))