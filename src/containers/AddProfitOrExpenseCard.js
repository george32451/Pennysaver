import React from 'react'
import {  DatePickerAndroid, TimePickerAndroid, AsyncStorage,Button } from 'react-native'
import { DateTimePickerItem, CategoryItem, SumItem, CardLayout, Header, Layout } from '../components/UIkit'
import FormatTime from '../helpers/FormatTime'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { HOME_SCREEN } from '../constants/routes'
import { sumValueChanged, dateChanged, timeChanged, newExpenseAdded } from '../actions'

class AddProfitOrExpenseCard extends React.PureComponent {

    openDatePicker = async () => {
        try {
            const { action, year, month, day}  = await DatePickerAndroid.open({
                date: new Date()
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                // Handle date
                this.props.dateChanged(new Date(year, month, day).toLocaleDateString('ru-RU'))
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
                this.props.timeChanged(FormatTime(hour, minute))
            }
        } catch ({code, message}) {
            console.warn('Cannot open time picker', message);
        }
    }

    handleTextChange = (text) => {
        this.props.sumValueChanged(text)
    }

    setExpense = () => {
        // Расходы считаются по следующей схеме: значение expenses в store + значение, введенное пользователем
        // в textInput
        const result = (parseInt(this.props.expenses) + parseInt(this.props.sumTextInput)).toString()
        this.props.newExpenseAdded(result)
    }

    render() {
        const { date, time, categories, sumTextInput, } = this.props
        const { navigation } = this.props
        console.log('props', this.props)
        return (
            <Layout>
                <Header
                    title='Расход'
                    icon='md-arrow-back'
                    onIconPress={() => navigation.goBack()}
                    checkMark={true}
                    onCheckMarkPress={() => navigation.navigate(HOME_SCREEN)}
                />
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
                            sumProp={sumTextInput}
                            onTextChange={this.handleTextChange}
                        />


                    </CardLayout>
                </CardLayout>
                <Button title='OK' onPress={this.setExpense} />
            </Layout>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        date: state.addProfitOrExpense.date,
        time: state.addProfitOrExpense.time,
        categories: state.addProfitOrExpense.categories,
        sumTextInput: state.addProfitOrExpense.sumTextInput,
        expenses: state.addProfitOrExpense.expenses,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        sumValueChanged,
        dateChanged,
        timeChanged,
        newExpenseAdded,
    },
    dispatch
)
export default connect(mapStateToProps, mapDispatchToProps)(AddProfitOrExpenseCard)
