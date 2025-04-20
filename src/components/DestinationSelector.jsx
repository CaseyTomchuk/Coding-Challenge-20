import { useState } from 'react'

function DestinationSelector ({tours, destination, setDestination}) {

// when we click a dropdown, we will set the destination to the selected dropdown (needed for Gallery)
const filterDestination = (event) => {
    setDestination(event.target.value)
}

// maps the name of each destination to the dropdown and enables filterDestination
return (
<div>
    <label>Filter Destination: </label>
    <select value = {destination} onChange = {filterDestination}>
        <option>All options</option>
            {tours?.map((tour) => (
            <option key = {tour.id}>
                {tour.name}
            </option>
))} 
    </select>
</div>
); 

} 

export default DestinationSelector

// NOTES: 
// <select> automatically listens for onChange
// map is confusing
// the ? in tours?.map only maps existing tours to avoid errors
// had to add keys to the list because of a warning in the console
// filtering tours is different that filtering destination, and will be done in Gallery
// used <p>{destination}</p> to test if the code could recognize when a dropdown was selected
//const [destination, setDestination] = useState('All options'). Used this before lifting the state up to App