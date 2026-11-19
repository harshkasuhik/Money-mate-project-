import { useState } from "react";
import "../css/login.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import API_BASE_URL from "../api";

const Login = () => {
  const navi = useNavigate();

  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);

  const [userlogin, Setuserlogin] = useState({
    Email: "",
    Password: "",
  });

  const logindata = (e) => {
    const { name, value } = e.target;

    Setuserlogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleclick = async (e) => {
    e.preventDefault();
    setLoginError("");

    try {
      setLoading(true);

      const auth = await fetch(`${API_BASE_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userlogin.Email.trim(),
          password: userlogin.Password,
        }),
      });

      const result = await auth.json();

      if (!auth.ok || !result.succ) {
        setLoginError(result.msg || "Login failed");
        return;
      }

      localStorage.setItem("role", "user");
      localStorage.setItem("userEmail", userlogin.Email.trim());

      navi("/dashboard");
    } catch (error) {
      console.log(error);
      setLoginError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex justify-around items-center gap-5 main_login_conatiner">
        <div className="user_login flex flex-wrap w-95 border-2 border-solid border-black gap-12 p-5 justify-around">
          <h1 className="text-3xl font-bold text-gray-800">
            Start your financial journey
          </h1>

          <form onSubmit={handleclick} className="flex flex-col gap-2">
            <label className="signup_label">Email</label>
            <input
              type="email"
              value={userlogin.Email}
              name="Email"
              onChange={logindata}
              placeholder="Enter email"
              autoComplete="email"
              required
              className="border-2 border-black w-86 h-10 rounded-lg"
            />

            <label className="signup_label">Password</label>
            <input
              name="Password"
              type="password"
              value={userlogin.Password}
              onChange={logindata}
              placeholder="Enter password"
              autoComplete="current-password"
              required
              className="border-2 border-black w-86 h-10 rounded-lg"
            />

            {loginError && (
              <p className="text-sm text-red-600">{loginError}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="text-sm font-semibold text-white bg-green-500 rounded-lg h-8 disabled:opacity-50"
            >
              {loading ? "Logging in..." : "LOGIN"}
            </button>
          </form>
        </div>

        <div className="pr-5">
          <img src="/logo.png" height="555" width="355" alt="Logo" />
        </div>
      </div>
    </>
  );
};

export default Login;
