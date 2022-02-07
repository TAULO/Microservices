import RenderProps from "./RenderProps";
import ToRender from "./ToRender";

function ToRenderComponent() {

    function makeRenderer(value) {
        return <ToRender count={value}/>
    }

    return (
        <RenderProps toRender={makeRenderer}/>
    )
}

export default ToRenderComponent