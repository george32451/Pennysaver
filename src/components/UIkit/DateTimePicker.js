import React from 'react'
import {Text, TouchableOpacity, StyleSheet} from 'react-native'

const DateTimePicker = ({openPicker, date, title}) => {
    const { dateStyle } = styles
    return (
        <TouchableOpacity onPress={openPicker} style={dateStyle}>
            <Text>{title}</Text>
            <Text style={{fontSize:18,color:'blue', marginTop: 10, fontWeight: 'bold'}}>{date}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    dateStyle: {
        width: '50%',
        height: 70,
        marginLeft: 5,
    },
})

export { DateTimePicker }
