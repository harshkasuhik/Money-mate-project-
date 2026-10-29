import { useState } from "react";
import "../css/login.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
const Login = () => {
  const navi=useNavigate()
  const [userlogin, Setuserlogin] = useState({
    Email: "",
    Password: "",
  });
  const handleclick = (e) => {
    e.preventDefault();
  };

async function loggg() {
  try {
    const auth = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userlogin.Email,
        password: userlogin.Password,
      }),
    });

    const result = await auth.json();
console.log(result)
    if (result.succ) {
      console.log("Login successful");
      localStorage.setItem("role", "user");
      navi("/dashboard");
    } else {
      console.log(result.msg);
    }
  } catch (error) {
    console.log("Login failed:", error);
  }
}


  const logindata = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    Setuserlogin({
      ...userlogin,
      [key]: value,
    });
  };
    return (
      <>
      <Navbar/>
    <div className="flex justify-around items-center gap-5 main_login_conatiner ">
      <div className="user_login flex flex-wrap  w-95 border-2 border-solid border-black gap-12 p-5 justify-around">
        <h1 className="text-3xl font-bold text-gray-800">
          Start your financial journey
        </h1>
        <form onSubmit={handleclick} className="flex flex-col gap-2">
          
          <label className="signup_label">Email</label>
          <input
            type="Email"
            value={userlogin.Email}
            name="Email"
            onChange={logindata}
            placeholder="enter email"
            className=" border-2 border-black w-86 h-10 rounded-lg"
          />
          <br />
          <label className="signup_label">Password</label>
          <input
            type="text"
            value={userlogin.Password}
            name="Password"
            onChange={logindata}
            placeholder="enter password"
            className=" border-2 border-black w-86 h-10 rounded-lg"
          />
        </form>

        <button className="text-sm font-semibold text-white bg-green-500 rounded-lg h-7 " onClick={loggg}>
      LOGIN
        </button>
      </div>

      <div className="pr-5">
        <img
          src="../images/logo.png"
          height="555px"
          width="355px"
          alt="logo.png"
        />
        
      </div>
    </div>
    </>
  );
};

export default Login;
