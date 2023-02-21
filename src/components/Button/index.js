import React from 'react';
import {Pressable, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export const Button = ({title, onPress, style}) => {
  //you can use pressable or touchableopacity for buttons
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
