import React from 'react'
import TourCard from "./TourCard"

function Gallery ({tours, destination, loading, error, handleRemove}) {

// setup for a map function, matches tours to the destinations of the same name
const filteredTours = destination === 'All Options' ? tours : tours?.filter(tour => tour.name === destination)

// handling error and loading
if (loading) return <h1>Loading</h1>
if (error) return <h1>{error}</h1>

// refreshes the page to restore tours if the filteredTours array is empty 
if(filteredTours?.length === 0) {
    return (
    <div>
        <h2>No tours left. Refresh to reload</h2>
        <button onClick={(() => window.location.reload(false))}>Refresh</button>
    </div>
    )
} 

// renders TourCard and passes it meaningful props, enables filteredTours to change what is displayed
return (
    <div id = "gallery">
        {filteredTours?.map(tour => ( 
            <TourCard
            key={tour.id}
            tour={tour}
            handleRemove = {handleRemove}
            />
        ))}
    </div>
)
}

export default Gallery