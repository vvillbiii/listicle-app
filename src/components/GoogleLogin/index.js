import React from 'react';
import {Image, Pressable, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export const GoogleLogin = () => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.container]}>
      <Image
        style={styles.googleIcon}
        source={require('../../assets/Google_icon.png')}
      />
    </TouchableOpacity>
  );
};
