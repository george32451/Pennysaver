import React from 'react'
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Footer = ({ onAddProfitPress, onAddExpensePress }) => {
    return (
        <View style={styles.footerContainer}>
            <View style={styles.footer}>
                <TouchableOpacity onPress={onAddProfitPress}>
                    <Ionicons name='md-add-circle' style={{fontSize: 35, marginLeft: 15}} color='#000'/>
                </TouchableOpacity>
                <TouchableOpacity onPress={onAddExpensePress}>
                    <Ionicons name='md-remove' style={{fontSize: 40, marginLeft: 15}} color='#000'/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name='md-analytics' style={{fontSize: 35, marginLeft: 15}} color='#000'/>
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
