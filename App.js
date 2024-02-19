
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, Text, useColorScheme, View } from 'react-native';
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import SwitchNavigation from './src/navigation/SwitchNavigation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AuthReducer from './src/Store/Reducers/AuthReducer';
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { _removeUserData } from './src/navigation/storage/Storage';



const rootReducer = combineReducers({
  AuthReducer: AuthReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

function App() {


  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = { backgroundColor: isDarkMode ? Colors.darker : Colors.lighter, };

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            <SwitchNavigation />
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>

  );
}
export default App;
