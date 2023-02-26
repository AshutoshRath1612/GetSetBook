import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
    const navigate =useNavigate();
    const [credential,setCredential] = useState({
        username : undefined,
        password : undefined
    })

    const {loading,error,dispatch} = useContext(AuthContext)
    const handleChange = (e)=>{
        setCredential((prev)=>({
            ...prev,
            [e.target.id]:e.target.value
        }))
    }
    const handleClicks =  async (e)=>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"})
        try{
            const res = await axios.post("http://localhost:8800/auth/login", credential); 
            console.log(res)
            dispatch({type:"LOGIN_SUCCESS",payload:res.data});
            navigate('/')
        }
        catch(err){
            dispatch({type:"LOGIN_FAILED",payload:err.respose.data});
        }
    }
  return (
    <Container>
       <div className="lContianer">
        <input type="text" placeholder='Username' id='username' onChange={(e)=>handleChange(e)} className="lInput" />
        <input type="text" placeholder='Password' id='password' onChange={(e)=>handleChange(e)} className="lInput" /> 
        <button className="lButton" onClick={(e)=>handleClicks(e)}>Login</button>
        {error && <span>{error.message}</span>}
        </div> 
    </Container>
  )
}

const Container = styled.div`
    
`
export default Login