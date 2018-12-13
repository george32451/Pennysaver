import { CHANGE_SUM_VALUE, CHANGE_DATE, CHANGE_TIME, ADD_NEW_EXPENSE } from '../constants/actions'
import FormatTime from "../helpers/FormatTime";
import {AsyncStorage} from "react-native";

const getSumOfExpenses = async () => {
  return await AsyncStorage.getItem('sumOfExpense', (error,result) => result)
}
console.log(getSumOfExpenses())
const INITIAL_STATE = {
  date: (new Date()).toLocaleDateString('ru-RU'),
  time: FormatTime(new Date().getHours(), new Date().getMinutes()),
  categories: ['Еда','Разное'],
  sumTextInput: '',
  expenses: 0
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case CHANGE_SUM_VALUE:
      return {
        ...state,
        sumTextInput: action.payload
      }
    case CHANGE_DATE:
      return {
        ...state,
        date: action.payload
      }
    case CHANGE_TIME:
      return {
        ...state,
        time: action.payload,
      }
    case ADD_NEW_EXPENSE:
      return {
        ...state,
        expenses: action.payload,
      }
    default: return state
  }
  //return state
}
