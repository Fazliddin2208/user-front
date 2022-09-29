import React, {useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import axios from 'axios'


function Signin() {
    const navigate = useNavigate();
    const [baza, setBaza] = useState([])
    const [login, setLogin] = useState({
        email: "",
        password: "",
      })
    const [logTime, setLogTime] = useState({
        lastLoginTime: new Date()
    })

      useEffect(()=>{
        axios.get(`https://userboshqaruv.herokuapp.com/user`)
      .then(res => {
        setBaza(res.data)
      })
    },[])
    const changeHandler = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };
    const Submit = (e) => {
        e.preventDefault();
    };
    const checkUser=async()=>{
        let user=baza.find(item=>{
            return item.email===login.email && item.password===login.password
        })
        if(user && user.status===true){
            axios.put(`https://userboshqaruv.herokuapp.com/user/${user._id}`, logTime)
            navigate('/dashboard')
        }
        else if(user && user.status===false){
            alert("Cannot be accessed")
        }else{
            alert('Incorrect email or password')
        }
    }
  return (
    <div>
        <main className="form-signin w-100 m-auto">
            <form onSubmit={Submit}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <div className="form-floating mb-1">
                    <input 
                        type="email" 
                        className="form-control" 
                        name='email'
                        onChange={changeHandler}  
                        placeholder="name@example.com" 
                    />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input 
                        type="password" 
                        className="form-control"
                        name='password' 
                        onChange={changeHandler}  
                        placeholder="Password" 
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button onClick={checkUser} className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
        </main>
    </div>
  )
}

export default Signin
