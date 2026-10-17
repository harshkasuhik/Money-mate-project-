import { useState } from 'react'
import '../css/Dashboard.css'
import Anlaysis from './Anlaysis'
import Goals from './Goals'
import Main_dash from './main_dash'
import Profile from './Profile'
import Setting from './Setting'
import Budget from './Budget'
import { Outlet } from "react-router-dom";
import Ai from './Ai'
const Dashbaord_afteruserauth = () => {
  const [active, Setactive] = useState("dashboard")
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-[#0F172A] text-slate-300 flex flex-col justify-between shrink-0">
        <div>
          {/* Logo Title Box */}
          <div className='h-20 px-6 flex items-center text-2xl font-extrabold text-white tracking-wide border-b border-slate-800'>
            MONEY-MATE
          </div>

          {/* Navigation Menu */}
          <ul className='py-4 space-y-1 px-3'>
            <li 
              className={`px-4 py-3 rounded-xl text-lg font-bold cursor-pointer transition ${active === "dashboard" ? "bg-emerald-600 text-white" : "text-slate-400 hover:bg-slate-800/60 hover:text-white"}`}
              onClick={() => Setactive("dashboard")}
            >
              Dashboard
            </li>
            <li 
              className={`px-4 py-3 rounded-xl text-lg font-bold cursor-pointer transition ${active === "transaction" ? "bg-emerald-600 text-white" : "text-slate-400 hover:bg-slate-800/60 hover:text-white"}`}
              onClick={() => Setactive("transaction")}
            >
              Transaction
            </li>
            <li 
              className={`px-4 py-3 rounded-xl text-lg font-bold cursor-pointer transition ${active === "goals" ? "bg-emerald-600 text-white" : "text-slate-400 hover:bg-slate-800/60 hover:text-white"}`}
              onClick={() => Setactive("goals")}
            >
              Goals
            </li>
            <li 
              className={`px-4 py-3 rounded-xl text-lg font-bold cursor-pointer transition ${active === "budget" ? "bg-emerald-600 text-white" : "text-slate-400 hover:bg-slate-800/60 hover:text-white"}`}
              onClick={() => Setactive("budget")}
            >
              Budget
            </li>
            <li 
              className={`px-4 py-3 rounded-xl text-lg font-bold cursor-pointer transition ${active === "ai" ? "bg-emerald-600 text-white" : "text-slate-400 hover:bg-slate-800/60 hover:text-white"}`}
              onClick={() => Setactive("ai")}
            >
              Ai
            </li>
            <li 
              className={`px-4 py-3 rounded-xl text-lg font-bold cursor-pointer transition ${active === "anlaysis" ? "bg-emerald-600 text-white" : "text-slate-400 hover:bg-slate-800/60 hover:text-white"}`}
              onClick={() => Setactive("anlaysis")}
            >
              Anlaysis
            </li>
            <li 
              className={`px-4 py-3 rounded-xl text-lg font-bold cursor-pointer transition ${active === "profile" ? "bg-emerald-600 text-white" : "text-slate-400 hover:bg-slate-800/60 hover:text-white"}`}
              onClick={() => Setactive("profile")}
            >
              Profile
            </li>
            <li 
              className={`px-4 py-3 rounded-xl text-lg font-bold cursor-pointer transition ${active === "setting" ? "bg-emerald-600 text-white" : "text-slate-400 hover:bg-slate-800/60 hover:text-white"}`}
              onClick={() => Setactive("setting")}
            >
              Setting
            </li>
          </ul>
        </div>

        {/* Logout */}
        <div className='p-4 border-t border-slate-800'>
          <div className='px-4 py-3 rounded-xl text-lg font-bold text-slate-400 hover:bg-slate-800/60 hover:text-white cursor-pointer transition'>
            LOGOUT
          </div>
        </div>
      </div>

      {/* Main Content View */}
      <div className="flex-1 overflow-y-auto bg-gray-50">
        {active === "dashboard" && <Main_dash />}
        {active === "goals" && <Goals />}
        {active === "transaction" && <Main_dash />}
          {active === "budget" && <Budget />}
        {active === "profile" && <Profile />}
        {active === "anlaysis" && <Anlaysis />}
             {active === "ai" && <Ai />}
        {active === "setting" && <Setting />}
      </div>
   <Outlet />
    </div>
  )
}

export default Dashbaord_afteruserauth