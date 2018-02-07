import { StackNavigator } from 'react-navigation';

import Dashboard from './Dashboard';
import PillCreator from './PillCreator';

export default StackNavigator({
  Dashboard: { screen: Dashboard },
  PillCreator: { screen: PillCreator },
}, {
  initialRouteName: 'Dashboard',
  // headerMode: 'none',
  navigationOptions: {
    headerStyle: {
      backgroundColor: 'white',
      borderBottomColor: 'transparent',
      shadowColor: 'black',
      shadowOffset: {
        height: 5,
      },
      shadowOpacity: 0.15,
      shadowRadius: 0,
    },
    headerTitleStyle: {
      fontWeight: '800',
    },
  },
});
