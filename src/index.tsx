import * as React from "react";
import * as ReactDOM from "react-dom";
import {MainForm} from "./component/MainFormPage";
import {Condition} from "./component/Condition";
import {TempCalculator} from "./component/StatePromote";

ReactDOM.render(
    <div>
        <Condition/>
        <MainForm/>
        <TempCalculator/>
    </div>,
    document.getElementById('app')
);
