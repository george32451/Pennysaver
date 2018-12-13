import { combineReducers } from 'redux'
import AddProfitOrExpenseReducer from './AddProfitOrExpenseReducer'

export default combineReducers({
  addProfitOrExpense: AddProfitOrExpenseReducer
})
