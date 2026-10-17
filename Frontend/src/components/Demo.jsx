import { useNavigate } from "react-router-dom";


const Demo = () => {
 const navi=useNavigate()
  return (
    <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-10 px-6 max-w-6xl mx-auto">
      <div className="heading flex flex-col gap-6 max-w-lg">
        <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
          <h1>Take Control</h1>
          <div className="flex gap-2">
            <span>of your</span>
            <span className="text-green-500">Finance</span>
          </div>
          <h1>with Money Mate...</h1>
        </div>

        <p className="text-gray-600 text-base md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae?
        </p>

      
        <ul className="grid grid-cols-2 gap-3 text-sm font-medium text-gray-700">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Track Expenses
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Achieve Goals
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Set Budget
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            AI Insights
          </li>
        </ul>

        <div className="button_demo relative z-50 flex items-center gap-4 mt-2">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition duration-200 shadow-md hover:shadow-lg" onClick={()=> {console.log("BUTTON CLICKED"),navi("/signup")}} >
            Get Started
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-xl transition duration-200 border border-gray-300">
            Watch Video
          </button>
        </div>
      </div>

      <div className="demo_img flex justify-center items-center w-full md:w-auto">
        <div className="p-2 bg-white rounded-2xl border-2 border-gray-200 shadow-lg">
          <img
            src="../images/demo_img.png"
            alt="Money Mate Dashboard Preview"
            className="w-full max-w-[450px] h-auto object-contain rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Demo;
