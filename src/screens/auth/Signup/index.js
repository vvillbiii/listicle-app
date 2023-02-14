import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {AuthHeader} from '../../../components/AuthHeader';
import {Input} from '../../../components/Input';
import {Checkbox} from '../../../components/Checkbox';
import {Button} from '../../../components/Button';

export const Signup = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
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
    </View>
  );
};
