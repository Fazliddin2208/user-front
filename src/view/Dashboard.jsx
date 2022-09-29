import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function Dashboard() {
    const [baza, setBaza] = useState([])
    const [check, setCheck] = useState({status:''})

    const del=(elem)=>{
        console.log(elem);
        axios.delete(`https://userboshqaruv.herokuapp.com/user/${elem._id}`)
    }
    
    const updateStatus=(elem)=>{
        console.log(elem.status);
        if(elem.status===true){
            check.status=false
        }else{
            check.status=true
        }
        axios.put(`https://userboshqaruv.herokuapp.com/user/${elem._id}`, check)
    }
    useEffect(()=>{
        axios.get(`https://userboshqaruv.herokuapp.com/user`)
      .then(res => {
        setBaza(res.data)
      })
    },[baza,del,updateStatus])

    
    console.log(baza);

  return (
    <div className='container'>
                <nav class="navbar navbar-expand-lg navbar-light bg-secondary d-flex justify-content-between ">
                    <h3 class="navbar-brand mx-3 text-light disabled"  href="#">Task4</h3>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <Link to="/">
                        <button className='btn btn-warning mx-4'>Logout</button>
                    </Link>
                    </nav>
        <div className="table-responsive">
        <table className="table table-hover mt-2">
            <thead className=''>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Registration time</th>
                    <th scope="col">Last login time</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody className='table-group-divider'>
                {
                    baza.map((item,index)=>(
                        <tr key={item._id}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.regTime}</td>
                            <td>{item.lastLoginTime}</td>
                            <td>{item.status ? 
                                    <h6 className='text-success'>Active</h6>
                                    : <h6 className='text-dark'>Block</h6>
                                }
                            </td>
                            <td>
                                <button onClick={()=>updateStatus(item)} className={item.status ? 'btn btn-dark':'btn btn-success'}>
                                    {
                                        item.status ? "Block" : "Active"
                                    }
                                </button>
                                <button className='btn btn-danger mx-2' onClick={()=>del(item)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }                
            </tbody>
        </table>
    </div>
    </div>
  )
}
