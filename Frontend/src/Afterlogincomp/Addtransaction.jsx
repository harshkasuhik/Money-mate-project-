import { useState } from "react";

const Addtransaction = () => {
  const [addtransction, Setaddtransction] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
  });
  const data = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    Setaddtransction({
      ...addtransction,
      [key]: value,
    });
  };
  return (
<div className="w-full max-w-sm mx-auto rounded-xl border-2  h-100 border-black p-6">
      <form className="flex flex-col gap-4">
        <input className="border border-gray-300 rounded-lg px-3 py-2"
          type="text"
          placeholder="Enter your transaction"
          value={addtransction.title}
          name="title"
          onChange={data}
        />

        <input className="border border-gray-300 rounded-lg px-3 py-2"
          type="text"
          placeholder="please enter your amount here"
          name="amount"
          value={addtransction.amount}
          onChange={data}
        />
        <input className="border border-gray-300 rounded-lg px-3 py-2"
          type="text"
          placeholder="enter ur category"
          name="category"
          value={addtransction.category}
          onChange={data}
        />
        <input className="border border-gray-300 rounded-lg px-3 py-2"
          type="text"
          placeholder="enter utr date"
          value={addtransction.date}
          name="date"
          onChange={data}
        />
     <button
  type="submit"
  className="bg-green-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-sm"
>
  Submit
</button>
      </form>
    </div>
  );
};

export default Addtransaction;
