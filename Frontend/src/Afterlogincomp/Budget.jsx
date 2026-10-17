import { useEffect, useState } from "react"

const Budget = () => {
  const[budget,Setbudget]=useState([])
  useEffect(()=>{
     async function budgetsss() {
        let data = await fetch("http://localhost:3000/api/budget")
        let result= await data.json()
        console.log(result)
    Setbudget(result)
      }
      budgetsss()
  },[])
 return (
    <div className="p-4 ">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-3xl font-bold">
            Budget..
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Set monthly budgets and track you'r spendings ...
          </p>
        </div>
        
        <div>
          <button className="bg-green-500 text-white px-4 py-2 rounded font-semibold text-sm">
            ADD GOALS +
          </button>
        </div>
      </div>

      <div className="mt-8">
        {budget && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {budget.map((item) => {
              return (
                <div key={item.id} className="border border-gray-300 p-4 rounded shadow-sm bg-white flex flex-col justify-between">
                  <div className="mb-4">
                    <h1 className="font-bold text-lg">{item.category}</h1>
                    <h1 className="text-gray-700 mt-1">{item.spent}/{item.limit}</h1>
                  </div>
                  <div>
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

export default Budget
