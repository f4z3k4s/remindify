import glamorous from 'glamorous-native'

import store from '../../../../../store'

const width = store.getState().ui.sideWidth
export default glamorous.touchableHighlight({
  width: 45,
  justifyContent: 'center',
  alignItems: 'center',
})