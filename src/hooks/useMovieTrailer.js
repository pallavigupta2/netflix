
import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addTrailerVedio } from '../utils/movieSlice'
import { useEffect } from 'react'

const useMovieTrailer =(movieId)=>{
    const dispatch = useDispatch()
    const videoTrailer = async ()=>{
        const data =await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const json = await data.json()
        

        const filterTrailer = json.results.filter(trailer=>trailer.type === "Trailer")
        const trailerVideo = filterTrailer.length ? filterTrailer[0] : json.results[0]
        dispatch(addTrailerVedio(trailerVideo))
    }
    useEffect(()=>{
        videoTrailer()
    },[])
}

export default useMovieTrailer