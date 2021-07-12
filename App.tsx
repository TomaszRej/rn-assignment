import React from 'react';
import {Provider} from 'react-redux';
import {RootSiblingParent} from 'react-native-root-siblings';
import {PersistGate} from 'redux-persist/integration/react';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import {store, persistor} from './src/store/store';
const App = () => {
  return (
    <Provider store={store}>
      <RootSiblingParent>
        <PersistGate loading={null} persistor={persistor}>
          <MainStackNavigator />
        </PersistGate>
      </RootSiblingParent>
    </Provider>
  );
};

export default App;
