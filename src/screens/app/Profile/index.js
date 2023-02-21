import React from 'react';
import {ScrollView, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';

export const Profile = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text>My profile</Text>
      </ScrollView>
    </SafeAreaView>
  );
};
