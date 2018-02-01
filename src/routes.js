import { StackNavigator } from 'react-navigation';
import { CreateNoteScreen, HomeScreen } from './screens'
import { colors } from './styles'

/**
 * This is the default router of the application,
 * where keys represent routes
 */
const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  CreateNote: {
    screen: CreateNoteScreen,
  },
}, {
  navigationOptions: {
    headerTintColor: colors.white,
    headerStyle: {
      backgroundColor: colors.darkest,
    },
    headerTitleStyle: {
      alignSelf: 'center',
      textAlign: 'center',
    },
  },
});

export default RootNavigator
