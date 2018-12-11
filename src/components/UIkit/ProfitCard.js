import React from 'react'
import { Text, View, StyleSheet } from "react-native";

const ProfitCard = () => {
    const { profitCardContainer, profitCard, cardTitle, text } = styles
    return (
        <View style={profitCardContainer}>
            <View style={profitCard}>
                <View style={cardTitle}>
                    <Text style={text}>Доходы</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profitCardContainer: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginHorizontal: 5,
    },
    profitCard: {
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
    text: {
        fontSize: 14,
        color: '#000',
        fontFamily: 'serif'
    }
})

export { ProfitCard }
