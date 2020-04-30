import React, { useEffect } from 'react'
import { View, Text, StatusBar } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './src/components/home/Home'
import { Provider } from 'react-redux'
import store from './src/components/redux/store'

function App() {
  useEffect(() => {
    SplashScreen.hide()
  }, []);
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

export default App