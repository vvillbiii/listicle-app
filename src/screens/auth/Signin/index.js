import React from 'react';
import {Text, ScrollView} from 'react-native';
import {styles} from './styles';
import {AuthHeader} from '../../../components/AuthHeader';
import {Input} from '../../../components/Input';
import {Button} from '../../../components/Button';
import {Separator} from '../../../components/Separator';
import {GoogleLogin} from '../../../components/GoogleLogin';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Signin = ({navigation}) => {
  const onSignIn = () => {
    navigation.navigate('Signup');
  };

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <AuthHeader onBackPress={onBack} title="Sign In" />

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
    </SafeAreaView>
  );
};
