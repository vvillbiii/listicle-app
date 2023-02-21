import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles} from './styles';
import {AuthHeader} from '../../../components/AuthHeader';
import {Input} from '../../../components/Input';
import {Button} from '../../../components/Button';
import {Separator} from '../../../components/Separator';
import {GoogleLogin} from '../../../components/GoogleLogin';
import {Checkbox} from '../../../components/Checkbox';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Signup = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(false);

  const onSignIn = () => {
    navigation.navigate('Signin');
  };

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <AuthHeader onBackPress={onBack} title="Sign Up" />
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
            Sign in
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
