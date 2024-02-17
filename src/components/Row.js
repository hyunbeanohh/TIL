import axios from '../api/axios';
import React, { useEffect, useState } from 'react'

const Row = ({title,id,fetchUrl}) => {

  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetchMovieData();
  }, [])
  
  const fetchMovieData = async () =>{
    const response = await axios.get(fetchUrl);
  }

  return (
    <div>Row</div>
  )
}

export default Row