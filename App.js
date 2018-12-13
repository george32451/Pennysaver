import React from 'react';
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore } from 'redux'
import Screen from './src/screens'
import reducers from './src/reducers'

const store = createStore(reducers, composeWithDevTools())


const App = () => {
    return (
        <Provider store={store}>
            <Screen/>
        </Provider>
    )
}

export default App

