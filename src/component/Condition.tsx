import * as React from "react";

interface promptProp {
    prompt: string
}
class Prompt extends React.Component<promptProp, {}> {
    render() {
        return <p>{this.props.prompt}</p>;
    }
}

interface conditionState {
    isPressed: boolean
}
export class Condition extends React.Component<{}, conditionState> {
    state = {
        isPressed: false
    };

    handleClick = (e) => {
        this.setState({isPressed: !this.state.isPressed})
    };

    render() {
        return <div>
            <h1>条件渲染</h1>
            {
                this.state.isPressed ?
                    <Prompt prompt={"未按下按钮"}/> :
                    <Prompt prompt={"按下按钮"}/>
            }
            <button onClick={this.handleClick}>按一下！</button>
        </div>
    }
}