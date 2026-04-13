
/* 
    Create a new component called Login
    Within that component, create a state variable called isLoggedIn (boolean)

    Include a button that will "login" the user by changing their status between true and false. if the user is logging in, the button should display "Login", if the user is logging out, the button should display "Logout" 

    display a message to the user if they are logged in: "Welcome to the app!"
    and message that will display if the user is NOT logged in:
    "Please log in!"

    the user should NOT be logged in by default
*/

import { useState } from "react"

const Login = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => {

        // take the value of the current boolean and set it to the opposite value
        setIsLoggedIn(!isLoggedIn)
    }

  return (
    <>
        <h2>Loggin In</h2>
        {isLoggedIn ?  <h4>Welcome to the app!</h4> : <h4>Please Log In</h4>}
        <button onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
    </>
  )
}

export default Login