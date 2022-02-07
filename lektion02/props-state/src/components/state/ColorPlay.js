import {useState} from "react";
import './state.css'

function ColorPlay(props) {
    const colors = ["red", "green", "blue"]
    const [color, setColor] = useState(props.start)

    return (
        <div>
            <div id="color" style={{backgroundColor: colors[color]}}></div>
            <button>Play With Color</button>
        </div>
    )
}

export default ColorPlay