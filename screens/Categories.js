import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import CategoryListItem from './components/CategoryListItem';

export default function categories() {
  const initCategories = [
    {
      id: 1, name: 'Thịt'
    },
    {
      id: 2, name: 'Cá'
    },
    {
      id: 3, name: 'Trái cây'
    },
    {
      id: 4, name: 'Rau củ'
    },
    {
      id: 5, name: 'Gia vị'
    },
    {
      id: 6, name: 'Nước giải khát'
    }
  ];
  const [categories, setCategories] = useState(initCategories);

  return (
    <FlatList
      data={categories}
      renderItem={({item}) => <CategoryListItem category={item} />}
      keyExtractor={item => `${item.id}`}
      contentContainerStyle={{ paddingLeft: 16, paddingRight: 16, paddingTop: 40 }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
