import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {

const [count , setCount] = useState(0);

function   decerementHandeler () {
setCount(count-1)
}

function incrementHandeler (){
  setCount ( count + 1 )  
}

function resetHandlear () {
  setCount(0 );
}

  return (
    <>
    <div className="  bg-red-400 w-[100vw] h-[100vh] flex flex-col justify-center text-center gap-12  ">
   <div className=" ml-[35rem] mr-[35rem] ">
    <div className=" text-blue-900 text-2xl font-bold  mb-6 ">Increment &  Decerement</div>
    <div className=" bg-white flex justify-center rounded-md  py-2 gap-12">
      <button  className='text-5xl border-r-2  text-center  w-[6rem]  ' onClick={decerementHandeler}>-</button>
      <div className="text-4xl font-bold flex text-center justify-center" onClick={resetHandlear}>
      {count}
      </div>
      <button className='text-5xl border-l-2 text-center w-[6rem]  ' onClick={incrementHandeler}>+</button>

    </div>
    <button className='bg-[#FF7F50]  text-5xl flex justify-center text-center  mt-10 rounded-md  w-40 ml-[10rem]  ' onClick={resetHandlear}>Reset</button>

   </div>
   </div>
    </>
  );
}

export default App;
