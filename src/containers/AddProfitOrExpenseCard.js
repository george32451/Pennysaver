import React from 'react'
import { Button, View, StyleSheet, DatePickerAndroid, TimePickerAndroid, TouchableOpacity,Text } from "react-native";
import { DateTimePicker } from "../components/UIkit";

class AddProfitOrExpenseCard extends React.PureComponent {
    state = {
        date: (new Date()).toLocaleDateString('ru-RU'),
        time: `${new Date().getHours()}:${new Date().getMinutes()}`
    }

    openDatePicker = async () => {
        try {
            const { action, year, month, day}  = await DatePickerAndroid.open({
                date: new Date()
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                // Handle date
                this.setState({
                    date: `${day}.${month + 1}.${year}` // + 1 cause month return (0 - 11)
                })
            }
        } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
        }
    }

    openTimePicker = async () => {
        try {
            const {action, hour, minute} = await TimePickerAndroid.open({
                hour: hour,
                minute: minute,
                is24Hour: true,
            });
            if (action !== TimePickerAndroid.dismissedAction) {
                // Handle time
                this.setState({
                    time: `${hour}:${minute}`
                })
            }
        } catch ({code, message}) {
            console.warn('Cannot open time picker', message);
        }
    }

    render() {
        const { cardContainer, card, dateTimeContainer, category, sum, currency, comment } = styles
        const { date, time } = this.state
        return (
            <View style={cardContainer}>
                <View style={card}>
                    <View style={dateTimeContainer}>
                        <DateTimePicker
                            title='День'
                            openPicker={this.openDatePicker}
                            date={date}
                        />
                        <DateTimePicker
                            title='Время'
                            openPicker={this.openTimePicker}
                            date={time}
                        />
                    </View>
                    <View style={category}>
                    </View>
                    <View style={sum}>
                    </View>
                    <View style={currency}>
                    </View>
                    <View style={comment}>
                    </View>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 8,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginHorizontal: 5,
    },
    card: {
        flexDirection: 'column',
        width: '100%',
        height: 350,
        borderRadius: 10,
        backgroundColor: '#F5FCFF',
        elevation: 1,
        alignItems: 'flex-start'
    },
    dateTimeContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        height: 70,
        width: '100%',
    },
    category: {
        flexDirection: 'column',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        height: 70,
        width: '100%',
    },
    sum: {
        flexDirection: 'column',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        height: 70,
        width: '100%',
    },
    currency: {
        flexDirection: 'column',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        height: 70,
        width: '100%',
    },
    comment: {
        flexDirection: 'column',
        height: 70,
        width: '100%',
    },

})

export { AddProfitOrExpenseCard }
