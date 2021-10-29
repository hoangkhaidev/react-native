import React from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ProductListItem({ product }) {
    const formatPrice = (number) => {
        return `${number.toLocaleString()}đ`;
    }

    const onAddToCart = (item) => {
        console.log(item)
    }

    return (
        <View style={styles.shadow} >
            <View style={styles.container}>
                <Image style={styles.img} source={{ uri: product.images.url }} />
                <View style={styles.info}>
                    <Text style={styles.name}>{product.name}</Text>
                    <View style={styles.priceRow}>
                        <Text style={styles.price}>{formatPrice(product.price)}</Text>
                        <TouchableOpacity>
                            <Text style={styles.cartText} onPress={() => onAddToCart(product)} >MUA +</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cartText: {
        textTransform: 'uppercase',
        fontSize: 16,
        color: '#2f95dc'
    },  
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation: 3,
        shadowColor: "#000",
    },
    container: {
        borderRadius: 4,
        backgroundColor: '#fff',
        marginBottom: 10,
        overflow: 'hidden',
    },
    info: {
        padding: 8
    },
    img: {
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        height: 150,
    },
    name: {
        fontSize: 16,
        marginBottom: 8,
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    price: {
        fontSize: 16,
        color: '#888',
        flex: 1
    }
});