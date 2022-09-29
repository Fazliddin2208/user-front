import React, {useState} from 'react'
import Signin from './signin'
import Signup from './signup'
import {Link} from 'react-router-dom'

export default function Home() {
    const [login, setLogin] = useState(false)

    const change=()=>{
        setLogin(!login)
    }
  return (
    <div className="container">
        <div className="row justify-content-center h-100 align-items-center">
            <div className='col-4'>
                {
                    login ? <Signup /> : <Signin />
                }
                <Link onClick={change}>
                    {
                        login ? "Sign in" : "Sign up"
                    }
                </Link>
            </div>
        </div>
    </div>
  )
}
