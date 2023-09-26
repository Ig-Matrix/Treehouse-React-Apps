import React, { useEffect, useState } from "react";
import SearchForm from "./Components/SearchForm";
import GifList from "./Components/GifList";
import axios from "axios";

function App() {
   const [gifs, setGifs] = useState([]);
   const [query, setQuery] = useState('candy');
   const [loading, setLoading] = useState(true);
   useEffect(() => {
    setLoading(true)
      // fetch(
      //    "https://api.giphy.com/v1/gifs/trending?api_key=0A5Aotj5DM6myxzesE6S4oR3a45DQgmQ&limit=24&rating=g"
      // )
      //    .then((res) => res.json())
      //    .then((resData) => setGifs(resData.data))
      //    .catch((error) =>
      //       console.log("error fetching and parsing the data", error)
      //    );
      let activeFetch = true;
         axios
            .get(
               `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=0A5Aotj5DM6myxzesE6S4oR3a45DQgmQ&limit=24&rating=g`
            )
            .then((response) => {
               // handle success
               if (activeFetch) {
                setGifs(response.data.data)
                setLoading(false)
              };
            })
            .catch((error) => {
               // handle error
               console.log("error fetching and parsing the data", error);
            });
      return () => (activeFetch = false);
   }, [query]);

   const handleQueryChange = (searchText) => setQuery(searchText);
   return (
      <div>
         <div className="main-header">
            <div className="inner">
               <h1 className="main-title">GifSearch</h1>
               <SearchForm changeQuery={handleQueryChange} />
            </div>
         </div>
         <div className="main-content">
          {
            loading ? <p>Loading</p>:<GifList data={gifs} />
          }
            
         </div>
      </div>
   );
}

export default App;
