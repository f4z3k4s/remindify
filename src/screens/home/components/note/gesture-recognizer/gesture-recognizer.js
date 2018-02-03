import glamorous from 'glamorous-native'
import GestureRecognizer from 'react-native-swipe-gestures'

export default glamorous(GestureRecognizer)({
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  position: 'relative',
  marginBottom: 10,
}, props => ({
  minHeight: props.minHeight,
}))