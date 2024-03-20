import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import NavBar from './components/Navbar';

const Search = () => {
    const [destinations, setDestinations] = useState([]);
    

    const handleSearch = async (event) => {
        const searchTerm = event.target.value;
    
        try {
          const response = 
            await axios.get(`https://destination-y1nl.onrender.com/api/v1/destination/search?name=${searchTerm}`) || 
            await axios.get(`http://localhost:4004/api/v1/destination/search?name=${searchTerm}` ) ;
          
          console.log(response);
          console.log(response.data);
          console.log(
            response.data.map((destination) => destination.name)
          );
          setDestinations(
            response.data.map((destination) => destination.name)
          );
        } catch (error) {
          console.error(error);
        }
      };

    return (
      <div>
        <NavBar />
        <div>
          <input type="text" placeholder="Search Location..." onChange={handleSearch} />

          {destinations && destinations.length > 0 && (
            <div className="results-list">
              {destinations.map((result, id) => {
                return (
                  <div
                    className="search-result"
                    onClick={(e) => alert(`You selected ${result}!`)}
                    onMouseEnter={(e) => e.target.style.cursor = 'pointer'}
                    onMouseLeave={(e) => e.target.style.cursor = 'default'}
                    onMouseOver={(e) => e.target.style.backgroundColor = 'lightgray'}
                    onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    {result}
                  </div>
                );
              })}
            </div>
          )}

          <br />

          <input type="text" placeholder="Search by radius..." onChange={handleSearch} />

          {destinations && destinations.length > 0 && (
            <div className="results-list">
              {destinations.map((result, id) => {
                return (
                  <div
                    className="search-result"
                    onClick={(e) => alert(`You selected ${result}!`)}
                    onMouseEnter={(e) => e.target.style.cursor = 'pointer'}
                    onMouseLeave={(e) => e.target.style.cursor = 'default'}
                    onMouseOver={(e) => e.target.style.backgroundColor = 'lightgray'}
                    onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    {result}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
};

export default Search;