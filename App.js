import React from 'react';
import {ActivityIndicator} from 'react-native';
import MyStack from './src/Navigatior/AppNavigator';
//redux
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/configureStore';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <MyStack />
      </PersistGate>
    </Provider>
  );
};

export default App;