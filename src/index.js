import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppRegistry, AsyncStorage } from 'react-native';

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

const middleware = createReactNavigationReduxMiddleware('root', state => state.nav);
const addListener = createReduxBoundAddListener('root');

const App = ({ dispatch, nav: state }) => (
  <RootNavigator navigation={addNavigationHelpers({ dispatch, state, addListener })} />
);

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = ({ nav }) => ({ nav });

const AppWithNavigationState = connect(mapStateToProps)(App);

class Root extends Component {

  state = {
    storeLoaded: false,
  };

  componentWillMount = async () => {
    const persistedStateFromStorage = await AsyncStorage.getItem('@PillAlert:ReduxStore');
    const persistedState = persistedStateFromStorage ? JSON.parse(persistedStateFromStorage) : {};
    this.store = createStore(
      reducers,
      persistedState,
      applyMiddleware(
        middleware,
        thunk,
      ),
    );

    this.setState({ storeLoaded: true });

    this.store.subscribe(() => {
      AsyncStorage.setItem('@PillAlert:ReduxStore', JSON.stringify(this.store.getState()));
    });
  }

  render = () => (this.state.storeLoaded ? (
    <Provider store={this.store}>
      <AppWithNavigationState />
    </Provider>
  ) : null);
}

AppRegistry.registerComponent('PillAlert', () => Root);
