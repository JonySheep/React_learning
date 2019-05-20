import * as React from "react";
import * as ReactDOM from "react-dom";
import {MainForm} from "./component/MainFormPage";
import {Condition} from "./component/Condition";
import {TempCalculator} from "./component/StatePromote";
// import {SonElement} from "./component/SonElement";
import reducers from './redux/reducer'
import App from "./Todo";
import {Provider} from 'react-redux'
import { createStore } from 'redux'

let store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);
