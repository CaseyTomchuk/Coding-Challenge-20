import React from 'react'

function TourCard({tour, handleRemove}) {

return (
    <div id = "tourCardDiv">

       <h2> {tour.name} </h2>
       <p id ="tourDesc"> {tour.info} </p>
       <p id ="tourPrice"> Price: ${tour.price}</p>
       <img src = {tour.image} id= "tourCardImage"/>
       <button onClick={(() => handleRemove(tour.id))}>Not Interested</button>
        
    </div>
)
}

export default TourCard

// Notes:
// onClick has to be done weird, I don't understand why it likes to run on mount
// dont forget reset button
// map a new array by filtering out tour "not interested" tours, removing those tours
// reset button that will just display the original array