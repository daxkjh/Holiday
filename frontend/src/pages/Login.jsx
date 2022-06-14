import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const Login =()=>{
    return (
        <div>
            <Navbar/>
            <h1>Holiday!</h1>
            
            <form action="/" method="post">
                <fieldset>
                <legend><h2>Login</h2></legend>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username"/><br></br>
                    <label htmlFor="password">password</label>
                    <input type="text" name="password" id="password"/><br></br>
                    <input type="submit" value='Login' />
                </fieldset>
            </form>
        </div>
    )
}

export default Login