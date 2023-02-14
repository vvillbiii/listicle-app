import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {AuthHeader} from '../../../components/AuthHeader';
import {Input} from '../../../components/Input';

export const Signup = () => {
  return (
    <View style={styles.container}>
      <AuthHeader title="Sign Up" />
      <Input label="Name" placeholder="Will Bowles" />
      <Input label="E-mail" placeholder="test@example.com" />
      <Input label="Password" placeholder="********" />
    </View>
  );
};
