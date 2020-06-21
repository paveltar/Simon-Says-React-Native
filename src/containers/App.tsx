import * as React from 'react';
import {PersistGate} from 'redux-persist/es/integration/react';
import {ActivityIndicator} from 'react-native';
import RootContainer from './RootContainer';
import {Provider} from 'react-redux';
import configureStore from '../Store';

const {persistor, store} = configureStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<ActivityIndicator size="large" color="#0000ff" />}
        persistor={persistor}>
        <RootContainer />
      </PersistGate>
    </Provider>
  );
}

export default App;
