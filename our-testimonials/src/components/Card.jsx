import React from 'react';
import reviews from '../data';


import { FaQuoteLeft , FaQuoteRight } from "react-icons/fa";


import "../index.css";

const Card = (props) => {
  let reviews = props.reviews;
  return (
    <div className='flex flex-col  md:relative '>

      <div className=' absolute top-[-7rem] z-[10] mx-auto  '>
        <img className='rounded-full aspect-square  w-[140px] h[140px]  z-25 ' src={reviews.image} alt=''>
        </img>
        <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-10px] z-[-15] left-[10px]'></div>
      </div>

      <div className="text-center mt-7">
        <h3  className="text-2xl font-bold" >{reviews.name}</h3>
        <p className='text-sm text-violet-300 uppercase'>{reviews.job}</p>
      </div>

      <div className='mt-5 mx-auto text-violet-400'>
      <FaQuoteLeft />
      </div>

      <div className="text-center mt-4 text-slate-500">
        <p>{reviews.text}</p>
      </div>

      <div className='mt-5 mx-auto text-violet-400'>
        <FaQuoteRight/>
      </div>


    </div>
  );
}

export default Card;
