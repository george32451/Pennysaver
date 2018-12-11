import React, {Component} from 'react';
import { Header, Footer, ExpensesCard, ProfitCard, Layout } from './../components/UIkit'
import { EXPENSES_SCREEN, PROFITS_SCREEN, STATS_SCREEN } from "../constants/routes";

export default class HomeScreen extends Component {
    render() {
        const { navigation } = this.props
        return (
            <Layout>
                <Header
                    title='Pennysaver'
                    icon='md-menu'
                    onIconPress={() => navigation.openDrawer()}
                />
                <ProfitCard/>
                <ExpensesCard/>
                <Footer
                    onAddProfitPress={() => navigation.navigate(PROFITS_SCREEN)}
                    onAddExpensePress={() => navigation.navigate(EXPENSES_SCREEN)}
                    onStatsPress={() => navigation.navigate(STATS_SCREEN)}
                />
            </Layout>
        );
    }
}

