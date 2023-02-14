import React from 'react';
import {Image, Pressable, Text, TextInput, View} from 'react-native';
import {styles} from './styles';

export const Input = ({label, placeholder}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder={placeholder} />
      </View>
    </View>
  );
};
