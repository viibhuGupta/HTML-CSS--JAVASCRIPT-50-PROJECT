import Card from "./Card";

function Tours  ({tours , removeTour})  {
  return (
    <div className="w-[1200px] h[full] bg-red-500 flex flex-col mr-[120px] flex-center justify-center ">
      <div className="heading">
        <h2 className="text-5xl  mt-5 " >Plan With Love</h2>
      </div>

      <div className="w-[350px] h-[600px] bg-red-900 flex flex-row  " >
        {
            tours.map( (tour) => {
                return <Card className="card-container" key={tour.id}  {...tour} removeTour={removeTour} />
            })
        }
      </div>
    </div>
  )
}

export default Tours;
