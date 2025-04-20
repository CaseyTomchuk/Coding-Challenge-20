import React from 'react'

function TourCard({tour}) {

return (
    <div id = "tourCardDiv">

       <h2> {tour.name} </h2>
       <p id ="tourDesc"> {tour.info} </p>
       <p id ="tourPrice"> Price: ${tour.price}</p>
       <img src = {tour.image} id= "tourCardImage"/>
       <button onClick={(() => console.log("test"))}>Not Interested</button>

    </div>
)
}

export default TourCard

// Notes:
// onClick has to be done weird, I don't understand why it likes to run on mount