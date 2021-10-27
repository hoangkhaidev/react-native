import React from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityBase,
    Alert
} from 'react-native';
import Meat from './../assets/meat.jpg';

export default function CategoryListItem({ category, onPress }) {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress} >
            <View style={styles.container}>
                <Text style={styles.title} >{category.name}</Text>
                <Image style={styles.categoryImage} source={Meat} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    categoryImage: {
        width: 100,
        height: 100,
    },
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation: 20,
        marginBottom: 10,
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    }
});