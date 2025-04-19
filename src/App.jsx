import { useState, useEffect } from 'react'
import Gallery from './components/Gallery'
import DestinationSelector from './components/DestinationSelector'

function App() {

  const [tours, setTours] = useState(); // storing data in a tours state variable
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState(null);

  useEffect(() => {
    fetch ('/api/react-tours-project') // had to make changes in vite.config.js because I couldn't access the API
    .then(response => {

    if (!response.ok) {
      setLoading(false) // if there's an error, loadings over, even if it didn't do what we want
      throw new Error(`Error fetching data`);
    }
    // if there are no errors, return response.json and set loading to false
    setLoading(false); 
    return response.json(); 
    })

    .then(data => {
      console.log(data); // log data for testing
      setTours(data); 
    }) 
     
    .catch((error) => {
      console.error(error)
      setError(error)
    })


}, []); // end of useEffect

 return (
  <div id = "appDiv">
    <h1> Tour Destination Selector </h1>
    <Gallery
      tours={tours}
      loading={loading}
      error={error}  
     />
    <DestinationSelector tours={tours}/>
  </div>
  ) 
};

export default App

// NOTES: 
// On mount, fetch from API with useEffect
// StrictMode is what is causing the data to display/fetch twice, may need to make adjustments
// once data is fetched, we are setting tours to the data. The state of tours is now updated to represent the data.
// destination selector isn't receiving loading or error (which is fine, i think)