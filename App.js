import React, { useState } from 'react';
import * as Font from 'expo-font';
import Home from './components/Home.jsx';
import { AppLoading } from 'expo';

// Gets the Nunito fonts
const getFonts = () => Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
});

const App = () => {
  const [loadedFonts, setLoadedFonts] = useState(false);

  if (loadedFonts) {
    return <Home />;
  } else {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onFinish={() => setLoadedFonts(true)} />
    );
  }
}

export default App;