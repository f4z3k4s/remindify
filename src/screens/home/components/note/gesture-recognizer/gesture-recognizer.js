import glamorous from 'glamorous-native'
import GestureRecognizer from 'react-native-swipe-gestures'

export default glamorous(GestureRecognizer)({
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  position: 'relative',
  marginVertical: 5,
}, props => ({
  height: props.height,
  minHeight: props.minHeight,
  marginBottom: props.isLastNote ? 20 : 5,
}))