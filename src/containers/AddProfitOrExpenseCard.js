import React from 'react'
import {  DatePickerAndroid, TimePickerAndroid, } from "react-native";
import { DateTimePickerItem, CategoryItem, SumItem, CardLayout } from "../components/UIkit";
import FormatTime from '../helpers/FormatTime'

class AddProfitOrExpenseCard extends React.PureComponent {
    state = {
        date: (new Date()).toLocaleDateString('ru-RU'),
        time: FormatTime(new Date().getHours(), new Date().getMinutes()),
        categories: ['Еда','Разное'],
        sumTextInput: ''
    }

    openDatePicker = async () => {
        try {
            const { action, year, month, day}  = await DatePickerAndroid.open({
                date: new Date()
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                // Handle date
                this.setState({
                    date: new Date(year, month, day).toLocaleDateString('ru-RU')
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
                    time: FormatTime(hour, minute)
                })
            }
        } catch ({code, message}) {
            console.warn('Cannot open time picker', message);
        }
    }

    handleTextChange = (text) => {
        this.setState({
            sumTextInput: text,
        })
    }

    render() {
        const { date, time, categories } = this.state
        return (
            <CardLayout style='cardContainer'>
                <CardLayout style='card'>
                    <CardLayout style='dateTimePicker'>
                        <DateTimePickerItem
                            title='День'
                            openPicker={this.openDatePicker}
                            date={date}
                        />
                        <DateTimePickerItem
                            title='Время'
                            openPicker={this.openTimePicker}
                            date={time}
                        />
                    </CardLayout>
                    <CategoryItem
                        categories={categories}
                    />
                    <SumItem
                        sumProp={this.state.sumTextInput}
                        onTextChange={this.handleTextChange}
                    />
                </CardLayout>
            </CardLayout>
        )
    }

}
export { AddProfitOrExpenseCard }
