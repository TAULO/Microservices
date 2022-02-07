import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: props.count}
    }

    render() {
        return (
            <div>
                <h1>{`Count is currently ${this.state.count}`}</h1>
                <button>Increase counter</button>
            </div>
        )
    }
}

export default Counter