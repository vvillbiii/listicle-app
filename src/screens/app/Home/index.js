import React from 'react';
import {ScrollView, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';

export const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text>Home</Text>
      </ScrollView>
    </SafeAreaView>
  );
};
