import React from 'react';
import {FlatList, ScrollView, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../../../components/Header';
import {categories} from '../../../data/categories';
import {styles} from './styles';

export const Home = () => {
  const renderCategoryItem = ({item, index}) => {
    console.log('item is', item);
    return <Text>{item?.title}</Text>;
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Header showSearch title="Find all you need" />
        <Text>Home</Text>
        <FlatList
          style={styles.list}
          horizontal
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item, index) => String(index)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
