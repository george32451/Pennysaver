import React from 'react'
import { Text, View, StyleSheet } from "react-native";

const ExpensesCard = ({sumOfExpense}) => {
    const { expensesCardContainer, expensesCard, cardTitle, text, cardBody } = styles
    return (
        <View style={expensesCardContainer}>
            <View style={expensesCard}>
                <View style={cardTitle}>
                    <Text style={text}>Расходы</Text>
                </View>
                <View style={cardBody}>
                    <Text>{sumOfExpense}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    expensesCardContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginHorizontal: 5,
    },
    expensesCard: {
        width: '100%',
        height: 150,
        backgroundColor: '#F5FCFF',
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
    cardBody: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: 10,
    },
    text: {
        fontSize: 14,
        color: '#000',
        fontFamily: 'serif'
    }
})

export { ExpensesCard }
