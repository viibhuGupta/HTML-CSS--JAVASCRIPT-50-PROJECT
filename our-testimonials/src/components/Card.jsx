import React from 'react';
import reviews from '../data';
import { FaQuoteLeft , FaQuoteRight } from "react-icons/fa";
import "../index.css"

const Card = (props) => {
  let reviews = props.reviews;
  return (
    <div className='flex flex-col justify-center text-center w-[700px] h-[450px] bg-white rounded-lg mt-9'>

      <div className='rounded-full bg-red-200 w-[140px] h[140px] mb-[19rem] ml-9 relative '>
        <img className='rounded-full  w-[140px] h[140px]  absolute  ' src={reviews.image} alt=''>
        </img>
      </div>

      <div className="">
        <h3  className="text-2xl font-bold" >{reviews.name}</h3>
        <p>{reviews.job}</p>
      </div>

      <div>
      <FaQuoteLeft/>
      </div>

      <div className="">
        <p>{reviews.text}</p>
      </div>

      <div className="">
        <FaQuoteRight/>
      </div>

      <div>
        <button>
          +
        </button>
        <button>
          -
        </button>

        <div>
          <button>
            Surprise Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
