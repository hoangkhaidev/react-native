import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import CategoryListItem from '../components/CategoryListItem';
import axios from 'axios';
import { useEffect } from 'react';
import { useCallback } from 'react';

export default function Home({ navigation }) {
  const [categories, setCategories] = useState([]);

  const fetchData = useCallback(async () => {
    const response = await axios.get('http://localhost:3000/categories');
    try {
      const dataJSON = response.data;
      setCategories(dataJSON);
    } catch (error) {
      console.log(error)
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const renderItem = ({ item }) => (
    <CategoryListItem 
        category={item} 
        onPress={() => {
            return navigation.navigate('Category', {
                categoryName : item.name,
                categoryId: item.id
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
