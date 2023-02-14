import React from 'react';
import {SafeAreaView, View} from 'react-native';
// import {Splash} from './src/screens/auth/Splash';
import {Signup} from './src/screens/auth/Signup';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <Signup />
      </View>
    </SafeAreaView>
  );
}

export default App;
