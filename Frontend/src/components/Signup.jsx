import { useState } from "react";
import "../css/signup.css";
import Navbar from "./Navbar";
const Signup = () => {
  
  const [usersignup, Setusersignup] = useState({
    Fullname: "",
    Email: "",
    Password: "",
  });
  const handleclick = (e) => {
    e.preventDefault();
  };
  const signupdata = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    Setusersignup({
      ...usersignup,
      [key]: value,
    });
  };
  async function user_data() {
     const data = await fetch("http://localhost:3000/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
    email: usersignup.Email,
      password: usersignup.Password
    })
  });
    let result= await data.json()
    console.log(result)
  } 

  return (
    <>
    <Navbar/>
  
    <div className="flex justify-around items-center gap-5 main_signup_conatiner ">
      <div className="user_Signup flex flex-wrap  w-95 border-2 border-solid border-black gap-12 p-5 justify-around">
        <h1 className="text-3xl font-bold text-gray-800">
          Start your financial journey
        </h1>
        <form onSubmit={handleclick} className="flex flex-col gap-2">
          <label className="text-black signup_label">Name</label>
          <input
            type="text"
            value={usersignup.Fullname}
            name="Fullname"
            onChange={signupdata}
            placeholder="enter ur full name"
            className=" border-2 border-black w-86 h-10 rounded-lg "
          />
          <br />
          <label className="signup_label">Email</label>
          <input
            type="Email"
            value={usersignup.Email}
            name="Email"
            onChange={signupdata}
            placeholder="enter email"
            className=" border-2 border-black w-86 h-10 rounded-lg"
          />
          <br />
          <label className="signup_label">Password</label>
          <input
            type="text"
            value={usersignup.Password}
            name="Password"
            onChange={signupdata}
            placeholder="enter password"
            className=" border-2 border-black w-86 h-10 rounded-lg"
          />
        </form>

        <button className="text-sm font-semibold text-white bg-green-500 rounded-lg h-7" onClick={user_data}>
          Create Account
        </button >
      </div>

      <div className="pr-5">
        <img
          src="../images/logo.png"
          height="555px"
          width="355px"
          alt="logo.png"
        />
      </div>
      {/* {<Outlet/>&& Setusersignup("")} */}
      {/* <Outlet/> */}

    </div>
    </>

);
};

export default Signup;
