import Counter from "../state/Counter";
import ColorPlay from "../state/ColorPlay";
import CounterClick from "../state/CounterClick";
import ColorPlayClick from "../state/ColorPlayClick";
import CountViewer from "../state/callback/CountViewer";
import ToRenderComponent from "../state/renderprops/ToRenderComponent";

function Main() {
    return (
        <div>
            <h1>Main</h1>
            <CounterClick count={1}/>
            <ColorPlayClick start={1}/>
            <CountViewer/>
            <ToRenderComponent/>
        </div>
    )
}

export default Main