import React, { useEffect, useState } from 'react';
import SinglePopularMovie from './SinglePopularMovie';

const PopularMovie = () => {
    const [popularMovie, setPopularMovie] = useState([])

    const url = "https://api.themoviedb.org/3/movie/popular?api_key=e3b5cce11c24970010bf0dd1ae65661b&language=en-US&page=1"

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPopularMovie(data.results))
    }, [])

    return (
        <div className='grid grid-cols-4 p-4 gap-3 mt-24'>
            {
                popularMovie.map(singleMovie =><SinglePopularMovie singleMovie={singleMovie}></SinglePopularMovie>)
            }
        </div>
    );
};

export default PopularMovie;