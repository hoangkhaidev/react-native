import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Category({ route, navigation }) {
 
  const { categoryName } = route.params;
  return (
    <View>
        <Text>{categoryName}</Text>    
    </View>
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
