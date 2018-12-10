import React from 'react';
import {createDrawerNavigator, createAppContainer, createStackNavigator} from 'react-navigation'
import {EXPENSES_SCREEN, HOME_SCREEN, PROFITS_SCREEN} from "./src/constants/routes";
import HomeScreen from "./src/screens/HomeScreen";
import ProfitsScreen from "./src/screens/ProfitsScreen";
import ExpensesScreen from "./src/screens/ExpensesScreen";


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

