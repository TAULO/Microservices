import React from 'react'
class CounterClick extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: props.count}
        this.handleClick = this.handleClick.bind(this)
        this.handleClick1 = this.handleClick1.bind(this)
    }

    handleClick(e) {
        console.log(e)
        //this.setState(2)
        this.setState(prevState => {
            console.log(prevState.count)
            return {count: prevState.count + 1}
        })
    }

    handleClick1 = function (e) {
        console.log(e)
        //this.setState(2)
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }
    handleClick2 = (e) => {
        console.log(e)
        //this.setState(2)
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }
    render() {
        return (
            <div>
                <h1>{`Count is currently ${this.state.count}`}</h1>
                <button onClick={this.handleClick2}>Increase counter</button>
            </div>
        )
    }
}

export default CounterClick