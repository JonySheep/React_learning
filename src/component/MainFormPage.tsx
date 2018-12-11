import * as React from "react";

interface textInputState {
    textInputValue: string
}
interface textInputProps {}

class TextInput extends React.Component <textInputProps,textInputState> {
    state = {
        textInputValue: ''
    };

    handleTextInput = (e) => {
        this.setState({
            textInputValue: e.target.value
        })
    };

    render() {
        return (
            <div>
                <input type="text"
                       onChange={this.handleTextInput}
                       value={this.state.textInputValue} />
            </div>
        );
    }
}

interface selectInputState {
    selectInputValue: string
}

class SelectInput extends React.Component <{}, selectInputState> {

    state = {
        selectInputValue: '柴犬'
    };

    handleSelectInput = (e) => {
        this.setState({
            selectInputValue: e.target.value
        })
    };

    render() {
        return (
            <div>
                <select onChange={this.handleSelectInput} value={this.state.selectInputValue}>
                    <option value="哈士奇">哈士奇</option>
                    <option value="萨摩耶">萨摩耶</option>
                    <option value="柴犬">柴犬</option>
                </select>
            </div>
        )
    }
}

export class MainForm extends React.Component <{}, {}> {
    render() {
        return <form>
            <h1>表单 and 受控组件</h1>
            <TextInput/>
            <SelectInput/>
        </form>;
    }
}