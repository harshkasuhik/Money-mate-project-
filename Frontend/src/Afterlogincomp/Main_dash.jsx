import { useEffect, useState } from "react"
import Addtransaction from "./Addtransaction"

const Main_dash = () => {
    const [main, Setmain] = useState([])
   const[moretrans,Setmoretrans]=useState("")
    useEffect(() => {
        async function ains() {
            let data = await fetch("http://localhost:3000/api/transaction")
            let res = await data.json()
            console.log(res)
            Setmain(res)
        }
        ains()
    }, [])
    
   
// async function deleterans(id) {
//     try {
//       const deldata = await fetch(
//       `http://localhost:3000/api/transaction/${id}`,
//         {
//           method: "DELETE",
//         }
//       );

//       if (!deldata.ok) {
//         throw new Error("Transaction delete nahi hua");
//       }

//       Setmain()

//     } catch (error) {
//       console.log("Delete error:", error);
//     }
//   }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">

  {moretrans === "addtrans" && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 ml-50">
    <div className="w-full max-w-sm">
      <Addtransaction />
    </div>
  </div>
)}


      {/* Top Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Transactions</h1>
          <p className="text-sm text-gray-500 mt-1">View and manage all your transactions</p>
        </div>

        <button onClick={()=>{Setmoretrans("addtrans")}} className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-5 py-2.5 rounded-xl transition duration-200 shadow-sm flex items-center gap-2">
          + Add Transaction
        </button>
      </div>


 


      {/* Table Container */}
      {main && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-gray-100 text-gray-400 text-sm font-medium">
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-50 text-sm">
              {main.map((item, index) => {
                const isExpense = item.type?.toLowerCase() === "expense";
                return (
                  <tr key={index} className="hover:bg-gray-50/50 transition duration-150">
                    <td className="px-6 py-4 text-gray-600">{item.date}</td>
                    <td className="px-6 py-4 font-medium text-gray-900">{item.title}</td>
                    
                    {/* Category Badge */}
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                        {item.category}
                      </span>
                    </td>

                    {/* Type Badge */}
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isExpense ? "bg-rose-50 text-rose-600" : "bg-emerald-50 text-emerald-600"
                      }`}>
                        {item.type}
                      </span>
                    </td>

                    {/* Amount Styling */}
                    <td className={`px-6 py-4 font-semibold ${
                      isExpense ? "text-rose-600" : "text-emerald-600"
                    }`}>
                      {item.amount}
                    </td>

                    {/* Action Icons */}
                    <td className="px-6 py-4 flex items-center gap-3 text-gray-400">
                  <button>del</button>
                      
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

 
    </div>

  )
}

export default Main_dash