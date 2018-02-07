import { NavigationActions } from 'react-navigation';

const navigateToDashboard = () => NavigationActions.navigate({ routeName: 'Dashboard' });
const navigateToPillCreator = () => NavigationActions.navigate({ routeName: 'PillCreator' });
const pop = () => NavigationActions.pop();

export default {
  pop,
  navigateToDashboard,
  navigateToPillCreator,
};
