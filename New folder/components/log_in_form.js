
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../pages/cap.js";

import { Http } from '@capacitor-community/http';


import axios from 'axios';
const LOGIN_URL = '/auth';

const LoginForm = () => {
    const navigate =useNavigate()
    const { setAuth } = useContext(AuthContext);
    //const [auth, setAuth] = useState({})
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    // const options = {
    //     url: apiUrl+"/auth/jwt/create/",
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
          
    //     },
    //     data:{
    //         name:user, 
    //         password:pwd ,
    //       }
          
    //   };

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          // /jwt/create/
            const response = await axios.post("http://127.0.0.1:8000/auth/jwt/create/",
                JSON.stringify({ name:user, password:pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    
                }
            );
         
            console.log(JSON.stringify(response?.data));
            console.log(JSON.stringify(response));
            const accessToken =  response?.data?.access;
            const refreshToken = response?.data?.refresh;
            localStorage.setItem("token",response?.data?.access)
            window.localStorage.setItem("token",response?.data?.access)
            const token=window.localStorage.getItem("token")
            console.log("this is token "+token);
            setUser('');
            setPwd('');
            setSuccess(true);
            navigate('/profile')
            
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            className='username'
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            className='password'
                        />
                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="createaccount">Sign Up</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default LoginForm