import React from 'react';

const SinglePopularMovie = (props) => {
const {original_title,backdrop_path}=props.singleMovie;


    return (
        <div className='hover:opacity-100 border rounded shadow-md p-3 flex flex-col items-center justify-center'>
            <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt="" />
            <div className='mt-5'>
                <h2>{original_title}</h2>
            </div>
        </div>
    );
};

export default SinglePopularMovie;