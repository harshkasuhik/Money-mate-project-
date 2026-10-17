import { NavLink,useNavigate } from "react-router-dom";

const Navbar = () => {
  const nav=useNavigate()
  return (
    <nav className="navbar flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200 shadow-sm">
      <div className="text-xl font-bold tracking-wide text-gray-900">
        Logo
      </div>

      <div>
        <ul className="flex items-center gap-8 font-medium text-sm text-gray-700">
          <li className="hover:text-green-600 cursor-pointer transition duration-200">
                <NavLink to="/">HOME</NavLink>
          </li>
          <li className="hover:text-green-600 cursor-pointer transition duration-200">
           <NavLink to="/features">Features</NavLink>
          </li>
          <li className="hover:text-green-600 cursor-pointer transition duration-200">
            WHY ?! MONEY MATE
          </li>
          <li className="hover:text-green-600 cursor-pointer transition duration-200">
               <NavLink to="/about">ABOUT</NavLink>
          </li>
        </ul>
      </div>

      <div className="btn flex items-center gap-3">
        <button className="px-5 py-2 text-sm font-semibold text-green-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition duration-200" onClick={()=>nav("/login")}>
          LOGIN
        </button>
        <button className="px-5 py-2 text-sm font-semibold text-white bg-green-500 hover:bg-green-600 rounded-lg shadow-sm hover:shadow transition duration-200" onClick={()=>nav("/signup")}>
          SIGNUP
        </button>
      </div>
    </nav>
  );
};

export default Navbar;