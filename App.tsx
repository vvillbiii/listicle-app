import React, {useEffect} from 'react';
import {Splash} from './src/screens/auth/Splash';
import {Signup} from './src/screens/auth/Signup';
import {Signin} from './src/screens/auth/Signin';
import {Home} from './src/screens/app/Home';
import {Profile} from './src/screens/app/Profile';
import {Favorites} from './src/screens/app/Favorites';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors} from './src/utils/colors';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let icon;

          if (route.name === 'Home') {
            icon = focused
              ? require('./src/assets/tabs/clarity_home-solid-fill.png')
              : require('./src/assets/tabs/clarity_home-solid.png');
          } else if (route.name === 'Profile') {
            icon = focused
              ? require('./src/assets/tabs/bi_person-fill.png')
              : require('./src/assets/tabs/bi_person.png');
          } else if (route.name === 'Favorites') {
            icon = focused
              ? require('./src/assets/tabs/marker-fill.png')
              : require('./src/assets/tabs/marker.png');
          }

          // You can return any component that you like here!
          return <Image source={icon} style={{width: 24, height: 24}} />;
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {borderTopColor: colors.grey},
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

function App(): JSX.Element {
  const isSignedIn = true;

  const MyTheme = {
    colors: {
      background: colors.white,
    },
  };

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  //     webClientId: Config.GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
  //     offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  //     iosClientId: Config.GOOGLE_IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  //     profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
  //   });
  // }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          {isSignedIn ? (
            <>
              <Stack.Screen
                name="Tabs"
                component={Tabs}
                options={{headerShown: false}}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Splash"
                component={Splash}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Signin"
                component={Signin}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Signup"
                component={Signup}
                options={{headerShown: false}}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
