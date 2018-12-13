import React, {Component} from 'react';
import { Header, Footer, ExpensesCard, ProfitCard, Layout } from './../components/UIkit'
import { EXPENSES_SCREEN, PROFITS_SCREEN, STATS_SCREEN } from "../constants/routes";
import { View, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'

 class HomeScreen extends Component {
    state = {
        sumOfProfit: '',
        sumOfExpense: '',
    }
    async componentDidMount() {
        AsyncStorage.setItem('sumOfProfit', '0')
        AsyncStorage.setItem('sumOfExpense', '0')
        this.setState({
            sumOfProfit: await AsyncStorage.getItem('sumOfProfit'),
            sumOfExpense: await AsyncStorage.getItem('sumOfExpense')
        })
    }

    render() {
        const { navigation } = this.props
        return (
            <Layout>
                <Header
                    title='Pennysaver'
                    icon='md-menu'
                    onIconPress={() => navigation.openDrawer()}
                />
                <View style={{flex: 1,marginTop: 10, alignItems: 'flex-start'}}>
                    <ProfitCard sumOfProfit={this.state.sumOfProfit}/>
                    <ExpensesCard sumOfExpense={this.props.expenses}/>
                </View>
                <Footer
                    onAddProfitPress={() => navigation.navigate(PROFITS_SCREEN)}
                    onAddExpensePress={() => navigation.navigate(EXPENSES_SCREEN)}
                    onStatsPress={() => navigation.navigate(STATS_SCREEN)}
                />
            </Layout>
        );
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

export default connect(mapStateToProps)(HomeScreen)
