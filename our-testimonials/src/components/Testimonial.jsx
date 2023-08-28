import React from 'react';
import Card from './Card';

import { FiChevronLeft , FiChevronRight} from "react-icons/fi";


const Testimonial = (props) => {

  function leftShiftHandler (){
    //  47:00
  }

  function rightShiftHandler() {

  }



      let reviews = props.reviews;

  return (
    <div className='w-full h-full'>
      <Card reviews= {reviews[0]} ></Card>

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
          <button className=' bg-violet-400 w-[140px] h-9 rounded-md text-white font-bold z-[-15] hover:bg-violet-500 '>
            Surprise Me
          </button>
        </div>
      </div>


    </div>
  );
}

export default Testimonial;
