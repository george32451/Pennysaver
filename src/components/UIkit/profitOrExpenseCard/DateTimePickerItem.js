import React from 'react'
import {Text, TouchableOpacity, StyleSheet} from 'react-native'

const DateTimePickerItem = ({openPicker, date, title}) => {
    const { dateStyle, textStyle } = styles
    return (
        <TouchableOpacity onPress={openPicker} style={dateStyle}>
            <Text>{title}</Text>
            <Text style={textStyle}>{date}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    dateStyle: {
        width: '50%',
        height: 70,
        marginLeft: 5,
    },
    textStyle: {
        fontSize:18,
        color:'blue',
        marginTop: 10,
        fontWeight: 'bold'
    }
})

export { DateTimePickerItem }
