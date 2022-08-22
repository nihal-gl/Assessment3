import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate=useNavigate()
    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");
    const [userErr,setUserErr]=useState(false);
    const [passErr,setPassErr]=useState(false);

  function loginHandle(e)
    {
        if(user.length<5 || password.length<8)
        {
            alert("type correct values")
        }
        else
        {
            alert("all good :)")
        }

        e.preventDefault()
    }
    function userHandler(e){
        let item=e.target.value;
        if(item.length<5 )
        {
           setUserErr(true)
        }
        else
        {
            setUserErr(false)
        }
        setUser(item)
    }
    function passwordHandler(e){
        let item=e.target.value;
        if(item.length<8 )
        {
           setPassErr(true)
        }
        else
        {
            setPassErr(false)
        }
        setPassword(item)
    }

    function canLogin(){
        if(userErr||passErr){
            alert("Wrong credentials")
        }
        else{
            navigate('customer',{replace:true})
        }

    }
    return (
        <>
        <div className='row'>
        

        <div className='col-md-6'>
        <h1>Sign UP!</h1>
        <form onSubmit={loginHandle}>
        <input type="text" placeholder="Enter User Id" onChange={userHandler} />{userErr?<span>User Not Valid</span>:""}
        <p>* Username should be of atleast 5 character</p>
        <input type="password" placeholder="Enter User Password" onChange={passwordHandler}/>{passErr?<span>Password Not Valid</span>:""}
        <p>* Username should be of atleast 8 character</p>
        
        <button className='btn btn-success' onClick={canLogin}>Submit

        </button>
        </form>
        </div>
        </div>
        </>
    )
}

export default Login;