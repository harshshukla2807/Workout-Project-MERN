// const { default: isEmail } = require("validator/lib/isemail")
import { useState } from "react"
import { useSignup } from "../hooks/useSignup"


export const SignupDetails=()=>{
    
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const {signup,error,isLoading}=useSignup()
    
    const handleSubmit=async(e)=>{
     e.preventDefault()
     await signup(email,password)
    //  console.log(email,password)
    }
    
    
    
    return(
        <>
        <form action="" onSubmit={handleSubmit}>
        <h1>Sign up</h1>
        <label htmlFor="email">Email</label>
        <input type="text"value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter email" required/>
        <label htmlFor="Password">Password</label>
        <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter email" required/>
        
        <button disabled={isLoading}>Sign Up</button>
        {error&& <div className="error">{error}</div> }
        </form>
        </>
    )
    
}