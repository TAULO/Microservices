import "./Signup.css"

function Signup() {
    return (  
    <div class="signup_form">
        <input id="username" placeholder="username"></input>
        <input id="password" placeholder="passwords"></input>
        <button onClick={console.log("adad")}>signup</button>
    </div>
    );
}

export async function signup(event) {
    event.preventDefault();
    let data = [document.getElementById("username").value, document.getElementById("passwords").value]
    console.log(data);
    const response = await fetch("localhost:8087/login", {
        method:"post",
        headers: {
            "Content-Type": "application.json"
        }, 
        body: JSON.stringify()
    })
    if (response.status.toString()[0] !== 2) 
        throw new Error("status code: " + response.status)
    return await response.json();
}

export default Signup;