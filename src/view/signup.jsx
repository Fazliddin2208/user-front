import React from 'react'
import {useNavigate} from "react-router-dom"
import axios from 'axios'


function Signup() {
    const navigate = useNavigate();
    const [user, setUser] = React.useState({})
    const changeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const Submit = (e) => {
        e.preventDefault();
    };
    const addUser=async()=>{
        const res=await axios.post(`https://userboshqaruv.herokuapp.com/user`, user)
        if(res.status===200){
            navigate('/dashboard')
        }
    }

    return (
        <div>
            <main className="form-signin w-100 m-auto">
                <form onSubmit={Submit}>
                    <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
                    <div className="form-floating mb-1">
                        <input 
                            type="text" 
                            name="name" 
                            className="form-control" 
                            onChange={changeHandler} 
                            placeholder="Name" 
                        />
                        <label htmlFor="floatingInput">Name</label>
                    </div>
                    <div className="form-floating mb-1">
                        <input 
                            type="email" 
                            name="email" 
                            onChange={changeHandler} 
                            className="form-control" 
                            placeholder="name@example.com" 
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-1">
                        <input 
                            type="password" 
                            name="password" 
                            className="form-control" 
                            onChange={changeHandler} 
                            placeholder="Password" 
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button onClick={addUser} className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                </form>
            </main>
        </div>
    )
}

export default Signup
