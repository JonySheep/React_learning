import React from "react";

interface tempInputProps {
    scale : string,
    temperature: string,
    onTempChange(num: string): void
}


class TemperatureInput extends React.Component<tempInputProps, {}> {

    scaleName = {
        c : "摄氏度",
        f : "华氏度"
    };

    handleChange = (e) => {
        this.props.onTempChange(e.target.value)
    };

    render() {
        return <div>
            <legend>在{this.scaleName[this.props.scale]}：中输入温度数值</legend>
            <input value={this.props.temperature} onChange={this.handleChange}/>
        </div>
    }
}

class Prompt extends React.Component<{temp: string}, {}> {
    render () {
        return <div>
            {
                parseFloat(this.props.temp) >= 100 ?
                    <p>水烧开了！</p> :
                    <p>水没烧开！</p>
            }
        </div>
    }
}


interface CalStates {
    tempVal: string,
    scale: string
}
export class TempCalculator extends React.Component<any, CalStates> {

    state = {
        tempVal: '',
        scale: 'c'
    };

    handleCChange = (num) => {
        this.setState({
            tempVal: num,
            scale: 'c'
        })
    };

    handleFChange = (num) => {
        this.setState({
            tempVal: num,
            scale: 'f'
        })
    };

    convertToC = (num: string) => {
        let Cel = parseFloat(num);
        if (isNaN(Cel))
            return '';
        return (((Cel - 32) * 5 / 9).toFixed(2)).toString();
    };

    convertToF = (num: string) => {
        let Fal = parseFloat(num);
        if (isNaN(Fal))
            return '';
        return (((Fal * 9 / 5) + 32).toFixed(2)).toString();
    };


    render() {

        let cTemp = this.state.scale === 'c' ? this.state.tempVal : this.convertToC(this.state.tempVal);
        let fTemp = this.state.scale === 'f' ? this.state.tempVal : this.convertToF(this.state.tempVal);

        return <div>
            <h1>状态提升</h1>
            <TemperatureInput scale={"c"}
                              onTempChange={this.handleCChange}
                              temperature={cTemp} />
            <TemperatureInput scale={"f"}
                              onTempChange={this.handleFChange}
                              temperature={fTemp} />
            <Prompt temp={cTemp}/>
        </div>
    }
}