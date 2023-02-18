import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles} from './styles';
import {AuthHeader} from '../../../components/AuthHeader';
import {Input} from '../../../components/Input';
import {Checkbox} from '../../../components/Checkbox';
import {Button} from '../../../components/Button';
import {Separator} from '../../../components/Separator';
import {GoogleLogin} from '../../../components/GoogleLogin';

export const Signin = () => {
  const [isChecked, setIsChecked] = useState(false);

  const onSignIn = () => {
    console.log('hello');
  };

  return (
    <ScrollView style={styles.container}>
      <AuthHeader title="Sign In" />

      <Input label="E-mail" placeholder="test@example.com" />
      <Input isPassword label="Password" placeholder="********" />

      <Button style={styles.button} title="Sign In" />
      <Separator text="or sign in with" />
      <GoogleLogin />
      <Text style={styles.footerText}>
        Don’t have an account?{' '}
        <Text onPress={onSignIn} style={styles.footerLink}>
          Sign up
        </Text>
      </Text>
    </ScrollView>
  );
};
