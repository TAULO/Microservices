import React from 'react'
import CallBackButton from "./CallBackButton";

class CountViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 1}
    }

    updateCount = () => {
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }

    render() {
        return (
            <div>
                <h1>{`The counter ${this.state.count}`}</h1>
                <CallBackButton handler={this.updateCount}/>
            </div>
        )
    }
}
export default CountViewer