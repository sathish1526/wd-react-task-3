import {useContext, useState} from "react";
import UserContext from "./usercontext";


export default function UserCreater(){

    let userData = useContext(UserContext);
    let [firstName,setfirstName]= useState("");
    let [lastName,setlastName]= useState("");
    let [email,setemail]= useState("");
    let [password,setpassword]= useState("");

    let userSubmit = (e) => {
        e.preventDefault()
        console.log({
            firstName,lastName,email,password
        })
        

        userData.setUserList([...userData.userList,{
            firstName,
            lastName,
            email,
            password
        }])
    }

    return <>
    <div className="container">
    <form onSubmit={userSubmit}>
        <div className="row">
            <div className = "col-lg-12">
            <h2>User Form</h2>
        </div>

        <div className = "col-lg-6">
            <label>First Name</label>
            <input className = "form-control" value = {firstName} onChange = {(e)=>setfirstName(e.target.value)}></input>
        </div>
        <div className = "col-lg-6">
            <label>Last Name</label>
            <input className = "form-control" value = {lastName} onChange = {(e)=>setlastName(e.target.value)}></input>
        </div>
        <div className = "col-lg-6">
            <label>E-Mail</label>
            <input className = "form-control" value = {email} onChange = {(e)=>setemail(e.target.value)} />
        </div>
        <div className = "col-lg-6">
            <label>Password</label>
            <input className = "form-control" value = {password} onChange = {(e)=>setpassword(e.target.value)}></input>
        </div>

         <div className = "col-lg-6 mt-3">
            <input className="btn btn-primary" type = "submit" value="submit"/>
        </div>

        </div>
    </form>
    </div>
    </>
}