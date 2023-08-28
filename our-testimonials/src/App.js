import Testimonial from "./components/Testimonial";
import React from "react";
import reviews from "./data"


function App() {
  return (
    <>
   <div className=" bg-slate-200 flex flex-col w-[100vw] h-[100vh]  justify-center items-center ">
    <div  className="text-center  ">
     <div>
     <h1 className="text-4xl font-bold    ">Our Testimonials</h1>
      <div className="bg-violet-400 h-[4px] w-[1/5] mt-1">
     </div>


      </div >
         <Testimonial reviews={reviews} />
    </div>
   </div>
    </>
  );
}

export default App;
