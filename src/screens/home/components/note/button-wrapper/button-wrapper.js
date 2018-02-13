import glamorous from 'glamorous-native'

import store from '../../../../../store'

const width = store.getState().ui.sideWidth
export default glamorous.touchableHighlight({
  width,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 5,
  zIndex: -1,
}, props => ({
  height: props.innerHeight > 50 ? props.innerHeight : props.innerMinHeight,
  [props.isRight ? 'right' : 'left']: 0,
}))