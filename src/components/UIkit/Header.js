import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";
import {w} from "./../../constants/Dimensions";

const Header = ({title, icon, onIconPress, checkMark = false, onCheckMarkPress}) => {
    const { headerContainer, header, menuIcon, checkMarkIcon, titleStyle } = styles
    return (
        <View style={headerContainer}>
            <View style={header}>
                <TouchableOpacity onPress={onIconPress}>
                    <Ionicons name={icon} style={menuIcon} color='#000'/>
                </TouchableOpacity>
                <Text style={titleStyle}>{title}</Text>
                <TouchableOpacity>
                    {checkMark && <Ionicons name='md-checkmark' style={checkMarkIcon} color='#000'/>}
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: 'lightblue',
        height: 60,
        width: w,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    menuIcon: {
        fontSize: 30,
        marginLeft: 15,
        width: 50,
    },
    checkMarkIcon: {
        fontSize: 30,
        marginLeft: w - 190,
        width: 50,
    },
    titleStyle: {
        fontSize: 20,
        color: '#000',
        fontFamily: 'serif'
    }
})

export { Header }
