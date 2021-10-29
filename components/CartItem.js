import React, { useState } from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    TextInput,
    Button,
    TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements'

export default function CartItem({ productItem }) {
    const formatPrice = (number) => {
        return `${number.toLocaleString()}đ`;
    }
    const [quantity, setQuantity] = useState(1);

    const onNext = () => {
        setQuantity(quantity + 1);
    }

    const onPrev = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.5} style={styles.btnDelete} onPress={() => console.log(productItem.id)} >
                <View style={styles.btnDelete}>
                    <Icon
                        name='times'
                        type='font-awesome'
                        color='#bbb'
                        size='20'
                        // onPress={() => console.log(productItem.id)} 
                    />
                </View>
            </TouchableOpacity>
            <Image style={styles.productImage} source={{ uri: productItem.images.url }} />
            <View style={styles.title} >
                <Text style={styles.titleName} >{productItem.name}</Text>
                <View style={styles.titleChild}>
                    <Text style={styles.titlePrice} >{formatPrice(productItem.price)}</Text>
                    <View style={styles.quantity} >
                        <View style={styles.prev}>
                            <Button 
                                title="-"
                                color="#000"
                                onPress={() => onPrev()}
                            />
                        </View>
                        <View style={styles.quantityTitle}>
                            <TextInput value={quantity} numberOfLines={true} >{quantity}</TextInput>
                        </View>
                        <View style={styles.next}>
                            <Button 
                                title="+"
                                color="#000"
                                onPress={() => onNext()}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    productImage: {
        width: 100,
        height: 100,
        width: '30%'
    },
    container: {
        position: 'relative',
        // alignItems: 'center',
        padding: 10,
        borderRadius: 4,
        flexDirection: 'row',
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation: 3,
        marginBottom: 10,
    },
    title: {
        marginLeft: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '70%'
    },
    titlePrice: {
        fontWeight: '600',
        color: 'red'
    },
    titleName: {
        fontWeight: '600'
    },
    titleChild: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    quantity: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 10
    },
    quantityTitle: {
        // paddingHorizontal: 10, 
        backgroundColor: '#fff', 
        height: 40,
        width: 38,
        alignItems: 'center' ,
        justifyContent: 'center',
        flexDirection: 'row', 
        borderWidth: 1,
        borderColor: '#ddd'
    },
    next: {
        backgroundColor: '#fff',
        height: 40,
        width: 40,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    prev: {
        backgroundColor: '#fff',
        height: 40,
        width: 40,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    btnDelete: {
        position: 'absolute',
        right: 4,
        top: 2,
        zIndex: 11
    },
    btnDeleteTitle: {
        fontWeight: '600',
        color: '#aaa'
    }

});