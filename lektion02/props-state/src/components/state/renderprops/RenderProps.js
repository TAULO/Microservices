import {useState} from "react";

function RenderProps(props) {
    const [count, setCount] = useState(1)
    return (
        <div>
            <h1>{"The count is " + count}</h1>
            {props.toRender(count)}
        </div>
    )
}

export default RenderProps
