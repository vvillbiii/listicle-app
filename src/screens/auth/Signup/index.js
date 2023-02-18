import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles} from './styles';
import {AuthHeader} from '../../../components/AuthHeader';
import {Input} from '../../../components/Input';
import {Checkbox} from '../../../components/Checkbox';
import {Button} from '../../../components/Button';
import {Separator} from '../../../components/Separator';
import {GoogleLogin} from '../../../components/GoogleLogin';

export const Signup = () => {
  const [isChecked, setIsChecked] = useState(false);

  const onSignIn = () => {
    console.log('hello');
  };

  return (
    <ScrollView style={styles.container}>
      <AuthHeader title="Sign Up" />
      <Input label="Name" placeholder="Will Bowles" />
      <Input label="E-mail" placeholder="test@example.com" />
      <Input isPassword label="Password" placeholder="********" />
      <View style={styles.agreeRow}>
        <Checkbox checked={isChecked} handleCheck={setIsChecked} />
        <Text style={styles.agreeText}>
          I agree with the <Text style={styles.agreeTextBold}>Terms</Text> &{' '}
          <Text style={styles.agreeTextBold}>Privacy policy</Text>
        </Text>
      </View>
      <Button style={styles.button} title="Sign Up" />
      <Separator text="or sign up with" />
      <GoogleLogin />
      <Text style={styles.footerText}>
        Already have an account?{' '}
        <Text onPress={onSignIn} style={styles.footerLink}>
          Sign up
        </Text>
      </Text>
    </ScrollView>
  );
};
