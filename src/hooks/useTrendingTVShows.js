import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constant"
import { addTrendingTVShows} from "../utils/movieSlice"
import { useEffect } from "react"

const useTrendingTVShows = ()=>{
    const trendingTVShows = useSelector(store=>store.movies.trendingShows)
    const dispatch = useDispatch()
    const getTrendingTVShows = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/trending/tv/day?page=1', API_OPTIONS)
    const json = await data.json()
    dispatch(addTrendingTVShows(json.results))
    }
    useEffect(()=>{
       !trendingTVShows && getTrendingTVShows()
    },[])
}

export default useTrendingTVShows;