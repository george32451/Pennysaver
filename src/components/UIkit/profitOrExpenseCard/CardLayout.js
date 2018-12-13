import React from 'react'
import { View, StyleSheet } from 'react-native'

const CardLayout = props => {
    const style = props.style // Получение названия стиля из props
    const container = styles[style] // Поиск стиля в styles
    return (
        <View style={container}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'column',
        width: '100%',
        height: 210,
        borderRadius: 10,
        backgroundColor: '#F5FCFF',
        elevation: 1,
        alignItems: 'flex-start'
    },
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 5,
        marginTop: 10,
    },
    dateTimePicker: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        height: 70,
        width: '100%',
    },
    // currency: {
    //     flexDirection: 'column',
    //     borderBottomWidth: 0.5,
    //     borderBottomColor: 'gray',
    //     height: 70,
    //     width: '100%',
    // },
    // comment: {
    //     flexDirection: 'column',
    //     height: 70,
    //     width: '100%',
    // },
});

export { CardLayout }
