import React, { useState } from "react"
import { Mycontext } from "../MyContext";
import { useContext } from "react";
import '../index.css'
import { FormContext } from "./Register";

export default function Login(){
  const [localDB]= useContext(FormContext);
  const [login,setLogin]= useState("");
  const [form,setForm]= useState({
    username:"",
    password:""
  })
  function handleChange(e){
    const {name,value}= e.target
    setForm({...form,[name]:value})
  }
    function HasLogin(){
      const user = localDB.find(user =>
      user.Username ==form.username && user.Password ==form.password);
      if(user){
        setLogin('Login Successful');
      }else{
        setLogin('Login Failed');
      }
    }
    return(
        
        <form className="flex-inline
        max-w-md mx-auto bg-white shadow-md rounded
        px-8 pt-6 pb-8 mb-4 m-10">
                <div className="mb-4">
                  <h1>{login}</h1>
                  <label className="block text-gray-700 text-sm font-bold
        mb-2" htmlFor="username">
                    Username
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-
        full py-2 px-3 text-gray-700 leading-tight focus:outline-none
        focus:border-blue-500"
                    name="username"
                    type="text"
                    placeholder="Enter your username"
                    onChange={handleChange}
        /> </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold
        mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-
        full py-2 px-3 text-gray-700 leading-tight focus:outline-none
        focus:border-blue-500"
                     name="password"
                    type="password"
                    placeholder="Enter your password"
                    onChange={handleChange}
        /> </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white
        font-bold py-2 px-4 rounded focus:outline-none focus:shadow-
        outline"
                    type="button"
                    onClick={HasLogin}
                  >
        Sign In
                  </button>
                </div>
                
        </form>
    );
}