import React from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

const SumItem = ( {sumProp, onTextChange} ) => {
    const { container, subContainer, textInputStyle, title } = styles
    return (
        <View style={container}>
            <Text style={title}>Сумма</Text>
            <View style={subContainer}>
                <TextInput
                    style={textInputStyle}
                    onChangeText={onTextChange}
                    placeholder='Введите сумму'
                    value={sumProp}
                    keyboardType='numeric'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height: 70,
        width: '100%',
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent:'center',
    },
    textInputStyle: {
        height: 40,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        width: '95%',
    },
    title: {
        fontSize: 14,
        marginLeft: 5,
    }
})

export { SumItem }
