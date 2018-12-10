import React from 'react'
import { Text, View, StyleSheet } from "react-native";

const ExpensesCard = () => {
    const { expensesCardContainer, expensesCard, cardTitle, text } = styles
    return (
        <View style={expensesCardContainer}>
            <View style={expensesCard}>
                <View style={cardTitle}>
                    <Text style={text}>Доходы</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    expensesCardContainer: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginHorizontal: 5,
    },
    expensesCard: {
        width: '100%',
        height: 150,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 1
    },
    cardTitle: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft: 10,
        marginTop: 10,
    },
    text: {
        fontSize: 18,
        color: '#000',
        fontFamily: 'serif'
    }
})

export { ExpensesCard }
