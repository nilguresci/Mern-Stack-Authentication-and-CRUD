import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import "./Screens.css";

const LoginScreen = ({history}) => {

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("");

    useEffect(() => {
      if(localStorage.getItem("authtoken")){
        history.push('/')
      }
    }, [history])

    const loginHandler= async (e) => {
        e.preventDefault()

        const config = {
            header: {
              "Content-Type": "application/json",
            },
          };

        try {
            const {data} = await axios.post("/api/auth/login", {email,password} , config);

            localStorage.setItem("authToken", data.token)

            history.push("/");
        } catch (error) {
            setError(error.response.data.error)
            setTimeout( () => {
                setError("");
            },5000)
        }
    }

    return (
        <div className="login_screen" >
        <form onSubmit={loginHandler} className="login_form">
            <h3 className="login_scrn_title">Login</h3>
            {error && <span className="error-message">{error}</span>}
           
            <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            required
            id="password"
            autoComplete="true"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>


        <button type="submit" className="btn btn-primary">Login</button>

        <span className="login_screen_subtext">Don't have an acount? <Link to='/register'>Register</Link></span>

        </form>
    </div>
    )
    
}

export default LoginScreen
