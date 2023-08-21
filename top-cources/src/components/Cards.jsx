import React, { useState } from 'react'
import Card from "./Card";

const Cards = (props) => {


    //  converting the Api Data into Single Array 
 
    let courses = props.courses;

   const [likedCources , setLikedCources ] = useState([]);

    function getCourses (){
        let allCourses = [];

        Object.values(courses).forEach(array =>{
            array.forEach(coursesData =>{
                allCourses.push(coursesData);
            })
        })

        return allCourses;
    };


  return (
    <div className='flex flex-wrap gap-12 w-[1200px] justify-center ml-[12rem] '>
      {
        getCourses().map((course) =>(
            <Card key={course.id} 
            course={course}

            likedCources={likedCources}
            setLikedCources={setLikedCources}
            
            />
        ))
      }
    </div>
  )
};

export default Cards
