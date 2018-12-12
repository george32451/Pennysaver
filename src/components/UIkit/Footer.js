import React from 'react'
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Footer = ({ onAddProfitPress, onAddExpensePress, onStatsPress }) => {
    const { footerContainer, footer } = styles
    return (
        <View style={footerContainer}>
            <View style={footer}>
                <TouchableOpacity onPress={onAddProfitPress}>
                    <Ionicons name='md-add-circle' style={{fontSize: 35}} color='#000'/>
                </TouchableOpacity>
                <TouchableOpacity onPress={onAddExpensePress}>
                    <Ionicons name='md-remove' style={{fontSize: 40}} color='#000'/>
                </TouchableOpacity>
                <TouchableOpacity onPress={onStatsPress}>
                    <Ionicons name='md-analytics' style={{fontSize: 35}} color='#000'/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        backgroundColor: '#DAA520',
        height: 60,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 10,
    },
    footerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: 5,
        marginHorizontal: 5,
    },
})

export { Footer }
