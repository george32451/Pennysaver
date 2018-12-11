import React from 'react';
import { Header } from '../components/UIkit'
class ProfitsScreen extends React.PureComponent {
    render(){
        const { navigation } = this.props
        return (
            <Header
                title='Статистика'
                icon='md-arrow-back'
                onIconPress={() => navigation.goBack()}
            />
        )
    }

}
export default ProfitsScreen
