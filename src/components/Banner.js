import React, { useEffect, useState } from 'react'
import axios from '../api/axios';
import requests from '../api/request';
import "./Banner.css";

const Banner = () => {

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])
  
  const fetchData = async() => {
    // 현재 상영중인 영화 가져오기(여러 영화)
    const response = await axios.get(requests.fetchNowPlaying);

    // 여러 영화 중 하나의 영화 id 가져오기
    const movieId = response.data.results[Math.floor(Math.random() * response.data.results.length)].id;
    
    // id 를 이용해서 특정 영화의 더 상세한 정보 가져오기, 비디오 정보 포함
    const {data : movieDetail} = await axios.get(`movie/${movieId}`,{
      params : { append_to_response : "videos" }
    });
    setMovie(movieDetail);
  }

  const truncate = (str,length) => {
    return str?.length > length ? str.substring(0,length) + "..." : str;
  }

  return (
    <header
      className='banner'
      style={{
        backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition : "top center",
        backgroundSize : "cover",
      }}
    >
      <div className='banner_contents'>
        <h1 className='banner_title'>
          {movie.title || movie.name || movie.original_name}
        </h1>

        <div className='banner_buttons'>
          {movie?.videos?.results[0]?.key &&
            <button className='banner_button play'>
              Play
            </button>
          }
        </div>
        <p className='banner_description'>
          {truncate(movie.overview,100)}
        </p>
      </div>
          <div className='banner-fadeBottom'/>

    </header>
  )
}

export default Banner