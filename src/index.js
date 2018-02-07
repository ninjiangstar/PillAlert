import React from 'react';
import PropTypes from 'prop-types';
import { AppRegistry } from 'react-native';

import {
  addNavigationHelpers,
} from 'react-navigation';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';

import RootNavigator from './routes';
import reducers from './redux';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.navigation,
);
const addListener = createReduxBoundAddListener('root');

const App = ({ dispatch, nav: state }) => (
  <RootNavigator
    navigation={addNavigationHelpers({
      dispatch,
      state,
      addListener,
    })}
  />
);

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = ({ nav }) => ({ nav });

const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(
  reducers,
  applyMiddleware(
    middleware,
    thunk,
  ),
);

const Root = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);

AppRegistry.registerComponent('PillAlert', () => Root);
