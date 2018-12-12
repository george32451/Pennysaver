import React from 'react'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";
import {w} from "../../../constants/Dimensions";

const CategoryItem = ({categories}) => {
    const { container, subContainer, title, textStyle, iconStyle } = styles
    return (
        <TouchableOpacity style={container}>
            <Text style={title}>Категория</Text>
            <View style={subContainer}>
                <Text style={textStyle}>{categories[0]}</Text>
                <Ionicons name='md-arrow-dropdown' style={iconStyle} color='#000' />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        height: 70,
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    subContainer: {
        flexDirection: 'row'
    },
    title: {
        fontSize: 14,
        marginLeft: 5
    },
    textStyle: {
        fontSize: 18,
        marginLeft: 5,
        color: '#000',
        fontWeight: 'bold'
    },
    iconStyle: {
        fontSize: 20,
        marginLeft: w - 80,
    },
})

export { CategoryItem }
