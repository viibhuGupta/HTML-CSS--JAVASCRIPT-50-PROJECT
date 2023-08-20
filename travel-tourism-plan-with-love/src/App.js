import React, { useState } from 'react';
import data from './data';
import Tours from './components/Tours';
import "./App.css"

const App = () => {

  const [tours ,setTours] = useState(data);

  function removeTour (id) {
  const newTours  = tours.filter(tour => tour.id !== id);
  setTours(newTours);
  }


  if(tours.length === 0){
    return(
      <div className="">
      <h1>Tour Not Avaliable</h1>
      <button className="" onClick={ () =>  setTours(data)} >
        Refresh
      </button>
    </div>
    );

  }
 

  return (
    <>
    <Tours tours= {tours} removeTour={removeTour} ></Tours>
    </>
  );
}

export default App;
