import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import CartItem from '../components/CartItem';

export default function Cart({ navigation }) {
  const productItem = [
    {
      id: 15,
      images: {
          url: "https://www.hoidaubepaau.com/wp-content/uploads/2019/06/bao-ngu.jpg"
      },
      name: "Abalone",
      price: 500000,
      category: 4
    },
    {
      id: 16,
      images: {
          url: "https://file.hstatic.net/200000273197/file/bach_tuoc_do_thom_ngon_eb71203c60514ffcbcae14114499304f_grande.jpg"
      },
      name: "Octopus",
      price: 300000,
      category: 4
    }
  ];

  const renderItem = ({ item }) => (
    <CartItem 
      productItem={item} 
    />
  );

  return (
    <FlatList
      data={productItem}
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
