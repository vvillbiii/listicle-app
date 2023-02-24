import React from 'react';
import {FlatList, ScrollView, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../../../components/Header';
import {categories} from '../../../data/categories';
import {styles} from './styles';

export const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Header showSearch title="Find all you need" />
        <Text>Home</Text>
        <FlatList data={categories} />
      </ScrollView>
    </SafeAreaView>
  );
};
