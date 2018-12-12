import React from 'react';
import { Header, Layout } from '../components/UIkit'
import { AddProfitOrExpenseCard } from "../containers";

class ExpensesScreen extends React.PureComponent {
    render(){
        const { navigation } = this.props
        return (
            <Layout>
                <Header
                    title='Расход'
                    icon='md-arrow-back'
                    onIconPress={() => navigation.goBack()}
                    checkMark={true}
                />
                <AddProfitOrExpenseCard />
            </Layout>
        )
    }

}
export default ExpensesScreen

