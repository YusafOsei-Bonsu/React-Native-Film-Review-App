import React, { useState } from 'react'
import * as Font from 'expo-font';
import Home from './components/Home.jsx';
import { AppLoading } from 'expo';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/Fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/Fonts/Nunito-Bold.ttf')
});

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <Home/>;
  } else {
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }
}

export default App;