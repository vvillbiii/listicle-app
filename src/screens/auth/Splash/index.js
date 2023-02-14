import React from 'react';
import {Text, Image, View, Pressable} from 'react-native';
import {Button} from '../../../components/Button';
import {SignUp} from '../Signup';
import {styles} from './styles';

export const Splash = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../../../assets/SplashHome.png')}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>You'll find</Text>
        <Text style={[styles.title, styles.innerTitle]}>all you need</Text>
        <Text style={styles.title}>here!</Text>
      </View>
      <Button title="Sign in" />
      <Pressable hitSlop={20}>
        <Text style={styles.signUp}>Sign up</Text>
      </Pressable>
    </View>
  );
};
