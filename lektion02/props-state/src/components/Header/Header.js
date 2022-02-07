import React from 'react'
import './header.css'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="header">
                <h1>{this.props.text}</h1>
            </div>
        )
    }
}

export default Header