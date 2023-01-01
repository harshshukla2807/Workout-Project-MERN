// const { default: isEmail } = require("validator/lib/isemail")
import { useState } from "react"
import { useLogin } from "../hooks/useLogin"


export const LoginDetails=()=>{
    
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const {login,error,isLoading}=useLogin()
    
    const handleSubmit=async(e)=>{
     e.preventDefault()
     
     await login(email,password)
    }
    
    
    
    return(
        <>
        <form action="" onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <label htmlFor="email">Email</label>
        <input type="text"value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter email" required/>
        <label htmlFor="Password">Password</label>
        <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter email" required/>
        
        <button disabled={isLoading}>Login</button>
        {error&& <div className="error">{error}</div>}
        </form>
        </>
    )
    
}