import React from 'react';
import Card from './Card';
import { useState } from 'react';

import { FiChevronLeft , FiChevronRight} from "react-icons/fi";


const Testimonial = (props) => {
    let reviews = props.reviews;

    const [ index , setIndex ] = useState(0);

  function leftShiftHandler (){
    if (index - 1 < 0) {
      setIndex (reviews.length - 1);
    }
    else {
      setIndex (index - 1);
    }
  }

  function rightShiftHandler() {
   if (index + 1 >= reviews.length) {
    setIndex(0);
   }

   else{
   setIndex(index + 1);
   }
  }

  function surPriseMe() {
     let randomIndex = Math.floor(Math.random() * reviews.length);
      setIndex(randomIndex);
   }



      // const reviews = props.reviews;

  return (
    <div className='w-[30vw] md-[700px] bg-white flex flex-col justify-center item-center mt-10 p-10 transaction-all duration-700  '>
      <Card reviews= {reviews[index]} ></Card>

      <div>

        <div className='text-center text-2xl text-violet-500 space-x-6 mt-6'>
        <button
        onClick={leftShiftHandler}
        className='cursor-pointer hover:bg-slate-200 '>
          <FiChevronLeft/>
        </button>
        <button
        onClick={rightShiftHandler}
        className='cursor-pointer hover:bg-slate-200 '>
          <FiChevronRight />
        </button>

        </div>


        <div>
          <button className=' bg-violet-400 w-[140px] h-9 rounded-md text-white font-bold z-[-15] hover:bg-violet-500 '
          onClick={surPriseMe}
          >
            Surprise Me
          </button>
        </div>
      </div>


    </div>
  );
}

export default Testimonial;
