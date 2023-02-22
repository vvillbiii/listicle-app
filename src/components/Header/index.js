import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './styles';

export const Header = ({
  title,
  onBackPress,
  onLogout,
  showSearch,
  showBack,
  showLogout,
}) => {
  return (
    <View style={styles.container}>
      {showBack ? (
        <Pressable hitSlop={20} onPress={onBackPress}>
          <Image
            style={styles.icon}
            source={require('../../assets/back.png')}
          />
        </Pressable>
      ) : showSearch ? (
        <Pressable hitSlop={20} onPress={onBackPress}>
          <Image
            style={styles.icon}
            source={require('../../assets/ri_search-2-line.png')}
          />
        </Pressable>
      ) : (
        <View style={styles.space}></View>
      )}
      <Text style={styles.title}>{title}</Text>

      {showLogout ? (
        <Pressable hitSlop={20} onPress={onBackPress}>
          <Image
            style={styles.icon}
            source={require('../../assets/Logout.png')}
          />
        </Pressable>
      ) : (
        <View style={styles.space}></View>
      )}
    </View>
  );
};
