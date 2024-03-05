import React from 'react';
import Movie from '../Movie/Movie';

export default function MovieList({ movies }) {
    return (
        <div>
            {movies.map((movie) => (

                <Movie key={movie.id} movie={movie} />
            ))}
        </div>
    );
}
