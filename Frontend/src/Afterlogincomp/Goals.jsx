import { useEffect, useState } from "react"

const Goals = () => {
  const[goals,Setgoals]=useState([])
  useEffect(()=>{
   async function goalss() {
   let data= await fetch("http://localhost:3000/api/goals")
   let res=await data.json()
  
   Setgoals(res)
   }
   goalss()
  },[])
   return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-3xl font-bold">
         Goals...
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Set your goals and track how much you saved for it  ...
          </p>
        </div>
        
        <div>
          <button className="bg-green-500 text-white px-4 py-2 rounded font-semibold text-sm">
            ADD GOALS
          </button>
          
        </div>
      </div>

      <div className="mt-8">
        {goals && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {goals.map((item) => {
              return (
                <div key={item.id} className="border border-gray-300 p-4 rounded shadow-sm bg-white flex flex-col justify-between">
                  <div className="mb-4">
                    <h1 className="font-bold text-lg">{item.title}</h1>
                    <h1 className="text-gray-700 mt-1">{item.savedAmount}/{item.targetAmount}</h1>
                  </div>
                  <div className="flex justify-between">
                     <button className="bg-green-500 text-white px-3 py-1 rounded font-bold text-sm">ADD MONEY !!</button>
                    <button className="bg-green-500 text-white px-3 py-1 rounded font-bold text-sm">EDIT</button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default Goals
