import Navigator from '../routes';

const homeAction = Navigator.router.getActionForPathAndParams('Dashboard');
const homeState = Navigator.router.getStateForAction(homeAction);

export default function navReducer(state = homeState, action) {
  const nextState = Navigator.router.getStateForAction(action, state);

  return nextState || state;
}
