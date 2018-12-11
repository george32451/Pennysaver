import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation'
import HomeScreen from './HomeScreen'
import ExpensesScreen from './ExpensesScreen'
import ProfitsScreen from './ProfitsScreen'
import StatsScreen from './StatsScreen'
import { HOME_SCREEN, PROFITS_SCREEN, EXPENSES_SCREEN, STATS_SCREEN } from '../constants/routes'

const AppNavigator = createStackNavigator(
    {
        [HOME_SCREEN]: HomeScreen ,
        [PROFITS_SCREEN]: ProfitsScreen,
        [EXPENSES_SCREEN]: ExpensesScreen,
        [STATS_SCREEN]: StatsScreen,
    },
    {
        headerMode: 'none'
    }
)

const AppDrawerNavigator = createDrawerNavigator(
    {
        Screen1: {
            screen: AppNavigator,
            navigationOptions: {
                drawerLabel: 'Home'
            }
        },
        Screen2: {
            screen: ProfitsScreen,
            navigationOptions: {
                drawerLabel: 'Test'
            }
        }
    },
    {
        initialRouteName: 'Screen1'
    }
)

const AppContainer = createAppContainer(AppDrawerNavigator)

export default AppContainer
