import React, {useState} from 'react';
import {Image, Pressable, Text, TextInput, View} from 'react-native';
import {styles} from './styles';

export const Input = ({label, placeholder, isPassword}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onEyePress = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry={isPassword && !isPasswordVisible}
          style={styles.input}
          placeholder={placeholder}
        />
        {isPassword ? (
          <Pressable onPress={onEyePress}>
            <Image
              resizeMode="contain"
              style={styles.eye}
              source={
                isPasswordVisible
                  ? require('../../assets/eye.png')
                  : require('../../assets/closed_eye.png')
              }
            />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};
