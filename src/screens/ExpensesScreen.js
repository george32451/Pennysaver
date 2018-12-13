import React from 'react';
import { Header, Layout } from '../components/UIkit'
import { AddProfitOrExpenseCard } from "../containers";

class ExpensesScreen extends React.PureComponent {
    render(){
        const { navigation } = this.props
        return (
            <Layout>

                <AddProfitOrExpenseCard navigation={navigation}/>
            </Layout>
        )
    }

}
export default ExpensesScreen

