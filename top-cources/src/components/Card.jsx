import React from 'react'
import { FcLike} from "react-icons/fc"
const Crad = (props) => {
  let course = props.course;
  return (
    <div className=' w-[20rem] hover:opacity-90  cursor-pointer duration-300 transition-all  bg-bgDark rounded-md overflow-hidden '>

      <div className="relative">
        <img className='w-[full]' src={course.image.url} alt=''/>

        <div className="w-[40px] h-[40px] bg-white rounded-full grid place-content-center absolute right-2 bottom-[0.1px]">
          <button >
             <FcLike fontSize="1.75rem" />
          </button>
        </div>
        </div>

       
      

      <div className="text-white flex flex-col m-4  ">
        <p className='font-bold mt-5 leading-6 w-[200px]'>{course.title}</p>
        <p className=' mt-5 mb-6 text-sm font-sans'>{course.description}</p>

      </div>
      
    </div>
  )
}

export default Crad
