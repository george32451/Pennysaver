import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './HomeScreen'
import ExpensesScreen from './ExpensesScreen'
import ProfitsScreen from './ProfitsScreen'
import { HOME_SCREEN, PROFITS_SCREEN, EXPENSES_SCREEN } from '../constants/routes'

const AppNavigator = createStackNavigator(
    {
        [HOME_SCREEN]: HomeScreen ,
        [PROFITS_SCREEN]: ProfitsScreen,
        [EXPENSES_SCREEN]: ExpensesScreen,
    },
    {
        headerMode: 'none'
    }
)

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
