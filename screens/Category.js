import axios from 'axios';
import React from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ProductListItem from '../components/ProductListItem';

export default function Category({ route, navigation }) {
 
  const { categoryId } = route.params;

  const [products, setProducts] = useState([]);

  const fetchData = useCallback (async () => {
    const response = await axios.get(`http://localhost:3000/products?category=${categoryId}`);
    try {
      const dataJSON = response.data;
      setProducts(dataJSON);
    } catch (error) {
      console.log(error)
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between' }}
        renderItem={({item}) => 
          <View style={styles.wrapper}>
            <ProductListItem 
              product={item} 
            />
          </View>
        }
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: .5,
    paddingHorizontal: 8,
    paddingTop: 10
  }
  
});
