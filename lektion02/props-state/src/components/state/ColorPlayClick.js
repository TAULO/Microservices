import {useState} from "react";
import './state.css'

function ColorPlayClick(props) {
    const colors = ["red", "green", "blue"]
    const [color, setColor] = useState(props.start)

    const handleOnClick = (e) => {
        console.log(e)
        //setColor(2)
        setColor(prevColor => ++prevColor % colors.length)
    }
    return (
        <div>
            <div id="color" style={{backgroundColor: colors[color]}}></div>
            <button onClick={handleOnClick}>Play With Color</button>
        </div>
    )
}

export default ColorPlayClick