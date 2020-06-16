import React, { useState } from 'react'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './routes/Navigator.js';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/Fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/Fonts/Nunito-Bold.ttf')
});

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return Navigator();
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