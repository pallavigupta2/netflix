import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constant"
import { addTrendingMovie } from "../utils/movieSlice"
import { useEffect } from "react"

const useTrendingMovies = ()=>{
    const trendingMovies = useSelector(store=>store.movies.trendingMovies)
    const dispatch = useDispatch()
    const getTrendingMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/trending/movie/day?page=1', API_OPTIONS)
    const json = await data.json()
    dispatch(addTrendingMovie(json.results))
    }
    useEffect(()=>{
        !trendingMovies && getTrendingMovies()
    },[])
}

export default useTrendingMovies;