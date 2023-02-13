import React from 'react';
import {Pressable, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export const Button = ({title, handlePress}) => {
  //you can use pressable or touchableopacity for buttons
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handlePress}
      style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
