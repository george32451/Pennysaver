import React, {Component} from 'react';
import { Header, Footer, ExpensesCard, ProfitCard, Layout } from './../components/UIkit'
import { EXPENSES_SCREEN, PROFITS_SCREEN } from "../constants/routes";

export default class HomeScreen extends Component {
    render() {
        console.log(this.props)
        const { navigation } = this.props
        return (
            <Layout>
                <Header
                    title='Pennysaver'
                    icon='md-menu'
                    onIconPress={() => navigation.openDrawer()}
                />
                <ExpensesCard/>
                <ProfitCard/>
                <Footer
                    onAddProfitPress={() => navigation.navigate(PROFITS_SCREEN)}
                    onAddExpensePress={() => navigation.navigate(EXPENSES_SCREEN)}
                />
            </Layout>
        );
    }
}

