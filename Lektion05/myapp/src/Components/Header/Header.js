import "./Header.css"
import {Link, useNavigate} from "react-router-dom"

function Header() {
    return (
        <div class="header">
            <Link to ={"/"}>
                <img class="home_logo" src="/myapp/public/25694.png" alt=""></img>
            </Link>
            <Link to={"/login"}>
                <button>login</button>
            </Link>
            <Link to={"/signup"}>
                <button>signup</button>
            </Link>
        </div>
    );
}

export default Header;