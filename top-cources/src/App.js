import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { filterData , apiUrl} from "./data";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Spinear from "./components/Spinear";

function App() {

  const [courses , setCourses] = useState(null);
  const [ loading , setLoading] = useState(true);

  // fetching api Data

  async function fetchData(){

    // jab tak data fetch ho raha tab tak true this

    setLoading(true);

    try{
      let response = await fetch(apiUrl);
      let output = await response.json();

      // output  ->
      setCourses(output.data);

    }
    catch(error){
      toast.error("Api Calling Me Kuch Error hai ");
    }
// after loading do it false
    setLoading(false);
  }

  // calling the data from Api 

  useEffect(() =>{
    fetchData();
  },[])



  return (
    <div className=" bg-bgDark2 w-[full] h-[full] ">

      <Navbar/>

      <Filter
      filterData={filterData}
      />

      <div>
        {
          loading ? (<Spinear/>) : (<Cards courses={courses}/>)
        }
      </div>
    </div>
  );
}

export default App;
