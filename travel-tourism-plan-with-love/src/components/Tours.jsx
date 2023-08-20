import Card from "./Card";

function Tours  ({tours , removeTour})  {
  return (
    <div>
      <div className="heading">
        <h2 className="  " >Plan With Love</h2>
      </div>

      <div >
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
