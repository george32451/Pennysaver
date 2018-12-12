import React from 'react'
import { View, StyleSheet } from 'react-native'

const Layout = props => {
    const { container } = styles
    return (
        <View style={container}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});

export { Layout }

// TODO
// Избавиться от компонента CardLayout, перенеся его сюда
