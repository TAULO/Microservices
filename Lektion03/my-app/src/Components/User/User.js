import React from "react"

class User extends React.Component {
    constructor() {
        super();
        this.state = ({username: "", firstName: "", lastName: ""})
    }

    getUser = (user) => {
        console.log(user)
        console.log({username: user})
    }

    render() {
        return (
            <div>
                <h1>{this.props.text}</h1>
            </div>
        )
    }
}

export default User