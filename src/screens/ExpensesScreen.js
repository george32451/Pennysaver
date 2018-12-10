import React from 'react';
import { Header } from '../components/UIkit'
class ExpensesScreen extends React.PureComponent {
    render(){
        const { navigation } = this.props
        return (
            <Header
                title='Расход'
                icon='md-arrow-back'
                onIconPress={() => navigation.goBack()}
            />
        )
    }

}
export default ExpensesScreen

