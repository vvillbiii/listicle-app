import React from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export const Checkbox = ({checked, handleCheck}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => handleCheck(!checked)}
      style={styles.container}>
      {checked ? (
        <View style={styles.innerContainer}>
          <Image
            style={styles.checkIcon}
            source={require('../../assets/check.png')}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};
