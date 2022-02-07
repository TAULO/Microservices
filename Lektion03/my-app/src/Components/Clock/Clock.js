import React from "react"
import ClockDisplay from "../ClockDisplay/ClockDisplay";

class Clock extends React.Component {
    constructor(props) {
        super(props)
        const date = new Date();
        const time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        this.state = {clock: time}
    }

    updateTime = () => {
        console.log("Update Time")
        const date = new Date();
        const time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        this.setState({clock: time})
    }

    componentDidMount = () => {
        this.timer = setInterval(this.updateTime, 1000)
    }

    componentWillUnmount = () => {
        
    }

    render() {
        return (
            <div>
                <ClockDisplay clock={this.state.clock}></ClockDisplay>
            </div>
        )
    }
}

export default Clock