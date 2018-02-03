import { Dimensions } from 'react-native'
import * as Animatable from 'react-native-animatable'
import glamorous from 'glamorous-native'

import { colors } from '../../../../../styles'

export default Animatable.createAnimatableComponent(
  glamorous.touchableHighlight({
    flex: 1,
    flexDirection: 'row',
    borderRadius: 2,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    shadowColor: colors.medium,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 3.65,
    marginHorizontal: 5,
    elevation: 4,
    padding: 5,
    width: Dimensions.get('window').width - 10, // should subtract padding
    zIndex: 1,
  }, props => ({
    minHeight: props.innerMinHeight,
  }))
)