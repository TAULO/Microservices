import React from "react"

class ClockDisplay extends React.Component {
    render() {
        return (
            <div>
                <h1>The time is currently: </h1>
                <h1>{this.props.clock}</h1>
            </div>
        )
    }
}

export default ClockDisplay