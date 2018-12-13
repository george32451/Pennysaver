import { CHANGE_SUM_VALUE, CHANGE_TIME, CHANGE_DATE, ADD_NEW_EXPENSE } from '../constants/actions'

export const sumValueChanged = (text) => {
    return {
        type: CHANGE_SUM_VALUE,
        payload: text,
    }
}

export const dateChanged = (date) => {
    return {
        type: CHANGE_DATE,
        payload: date,
    }
}

export const timeChanged = (time) => {
    return {
        type: CHANGE_TIME,
        payload: time,
    }
}

export const newExpenseAdded = (value) => {
    return {
        type: ADD_NEW_EXPENSE,
        payload: value,
    }
}
