import axios from '../../api/axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DetailPages = () => {
  let { movieId } = useParams(); // == let movieId = useParams().movie.id;
  // useParams 를 사용해 Route 에서 :movidId 로 선언한 값을 가져올 수 있다.
  const [movie, setMovie] = useState({});
  
  useEffect(() => {
    async function fetchData(){
      const response = await axios.get(
        `/movie/${movieId}`
      )
      setMovie(response.data);
    }
    fetchData();
  }, [movieId])
  
  if(!movie) return null;
  else{
    return (
      <section>
        <img
          className='modal__poster-img'
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt='movie'
        />
      </section>
    )
  }
}

export default DetailPages