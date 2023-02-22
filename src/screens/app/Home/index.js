import React from 'react';
import {ScrollView, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../../../components/Header';
import {styles} from './styles';

export const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Header showSearch title="Find all you need" />
        <Text>Home</Text>
      </ScrollView>
    </SafeAreaView>
  );
};
