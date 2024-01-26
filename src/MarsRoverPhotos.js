// MarsRoverPhotos.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MarsRover.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

const MarsRoverPhotos = ({ earthDate }) => {
  const [roverPhotos, setRoverPhotos] = useState([]);
  const [visiblePhotos, setVisiblePhotos] = useState(4);

  useEffect(() => {
    const NASA_API_KEY = 'TdeLeb5906PcKOnp0vikJhsr2K2PdYzKCsALSAhY';
    const MARS_ROVER_API_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${earthDate}&api_key=${NASA_API_KEY}`;

    axios
      .get(MARS_ROVER_API_URL)
      .then((response) => {
        setRoverPhotos(response.data.photos);
        console.log(visiblePhotos);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [earthDate]);

  const loadMorePhotos = () => {
    setVisiblePhotos((prevVisible) => prevVisible + 4);
  };

  const displayedPhotos = roverPhotos.slice(0, visiblePhotos);
  

  return (
    <div className="MarsRoverPhotos">
     
      {displayedPhotos.length > 0 ? (
        <div>
          {displayedPhotos.map((photo) => (
            // <div key={photo.id} className="card" style={{ width: '40rem' }}>
            //   <img src={photo.img_src} alt={`Mars Photo ${photo.id}`} className="img-cont" />
            //   <div className="card-body">
            //     <p className="card-text">Launch Date: {photo.rover.launch_date}</p>
            //     <p className="card-text">Landing Date: {photo.rover.landing_date}</p>
            //   </div>
            // </div> 
<section className="articles">
  <article>
    <div className="article-wrapper">
      <figure>
        <img src={photo.img_src} alt="" />
      </figure>
      <div className="article-body">
        <h2>Landing and Launching Dates</h2>
        <p className="card-text">Launch Date: {photo.rover.launch_date}</p>
        <p className="card-text">Landing Date: {photo.rover.landing_date}</p>
       
      </div>
    </div>
  </article>
</section>
          ))}
          {visiblePhotos < roverPhotos.length && (
            <div className='load-btn'>
            <button onClick={loadMorePhotos} class="custom-btn btn-3">Load More</button>
            </div>
          )}
        </div>
      ) : (
        <p className='err'>No photos available for the selected Earth date.</p>
      )}
    </div>
  );
};

export default MarsRoverPhotos;
