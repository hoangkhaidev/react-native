import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import CategoryListItem from '../components/CategoryListItem';

export default function Home({ navigation }) {
  const initCategories = [
    {
      id: 1, name: 'Meat'
    },
    {
      id: 2, name: 'Fish'
    },
    {
      id: 3, name: 'Fruits'
    }
  ];
  const [categories, setCategories] = useState(initCategories);

  const renderItem = ({ item }) => (
    <CategoryListItem 
        category={item} 
        onPress={() => {
            return navigation.navigate('Category', {
                categoryName : item.name
            });
        }}
    />
  );

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={item => `${item.id}`}
      contentContainerStyle={{ paddingLeft: 16, paddingRight: 16, paddingTop: 10 }}
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
