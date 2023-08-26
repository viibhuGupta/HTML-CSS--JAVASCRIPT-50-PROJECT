import React from 'react'
import { useState } from 'react';


function Card  ( {id , name , image , info ,  price ,removeTour}  )  {

    const [readmore , setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0,200)}....`;

    function readmoreHandler() {
        setReadmore(!readmore);
    }



  return (
    <div className=''>


        <img className='w-[250px] h-[300px] '    src={image}  alt='imagetour' ></img>

        <div className="tour-info">
            <div className="tour-deatils">
                <h4>{price}</h4>
                <h4> {name} </h4>
            </div>

            <div className="description">
                {description}

                <span className="read-more" onClick={readmoreHandler}>
                    { readmore ? `show less` : `read more`}
                </span>
            </div>
        </div>

       <button className="btn-red" onClick={ () => removeTour (id)} >
        Not Interested
        </button>



    </div>
  )
}

export default Card
