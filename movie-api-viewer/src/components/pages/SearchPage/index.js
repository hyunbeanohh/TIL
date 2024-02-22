import axios from '../../../api/axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const SearchPage = () => {

  const [searchResult, setSearchResult] = useState([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  const searchTerm = query.get("q");

  useEffect(() => { // 검색 내용을 바탕으로 영화 정보 배열에 저장
    if(searchTerm)
        fetchSearchMovie(searchTerm);
  }, [searchTerm])

  const fetchSearchMovie = async (searchTerm) => {
    try {
        const response = await axios.get(`search/multi?include_adult=false&query=${searchTerm}`);
        setSearchResult(response.data.results);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
  }
  return (
    <div>SearchPage</div>
  )
}

export default SearchPage