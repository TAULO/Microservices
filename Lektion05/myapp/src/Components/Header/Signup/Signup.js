import "./Signup.css"

function Signup() {
    return (  
    <div class="signup_form">
        <input id="username" placeholder="username"></input>
        <input id="email" placeholder="e-mail"></input>
        <input id="password" placeholder="password" type="password"></input>
        <button onClick={signup}>signup</button>
    </div>
    );
}

export async function signup(event) {
    event.preventDefault();
    let data = {userName: document.getElementById("username").value, email: document.getElementById("email").value, password: document.getElementById("password").value}
    console.log(data);
    const response = await fetch("http://localhost:9001/signup", {
        method:"post",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(data)
    })
    if (response.status.toString()[0] !== 2) 
        throw new Error("status code: " + response.status)
    return await response.json();
}
export default Signup;