import React, { useEffect, useState } from 'react'
import axios from '../api/axios';
import requests from '../api/request';

const Banner = () => {

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])
  
  const fetchData = async() => {
    // 현재 상영중인 영화 가져오기(여러 영화)
    const response = await axios.get(requests.fetchNowPlaying);

    // 여러 영화 중 하나의 영화 id 가져오기
    console.log(response);
    const movieId = response.data.results[Math.floor(Math.random() * response.data.results.length)].id;
    
    // id 를 이용해서 특정 영화의 더 상세한 정보 가져오기, 비디오 정보 포함
    const {data : movieDetail} = await axios.get(`movie/${movieId}`,{
      params : { append_to_response : "videos" }
    });
    console.log(movieDetail);
    setMovie(movieDetail);
  }

  return (
    <div>Banner</div>
  )
}

export default Banner