import "./Header.css"
import {Link, useNavigate} from "react-router-dom"

function Header() {
    return (
        <div class="header">
            <Link to={"/login"}>
                <button>Login</button>
            </Link>
            <Link to={"/signup"}>
                <button>Signup</button>
            </Link>
        </div>
    );
}

export default Header;