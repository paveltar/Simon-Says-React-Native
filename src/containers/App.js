import * as React from 'react';
import RootContainer from './RootContainer';
import {Provider} from 'react-redux';
import store from '../Store';

function App() {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
}

export default App;
