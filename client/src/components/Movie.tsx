import React from 'react';
import { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';
import { IMovieData, IMovieVars } from '../interfaces';

const QUERY_GET_MOVIE_BY_NAME = gql`
  query getMovie($name: String!) {
    movie(name: $name) {
      id
      name
      yearOfPublication
      isInTheaters
    }
  }
`;

const Movie = () => {
  const [search, setSearch] = useState('');
  const [getMovie, { data: movieData, loading, error: movieError }] =
    useLazyQuery<IMovieData, IMovieVars>(QUERY_GET_MOVIE_BY_NAME);
  if (movieData) {
    console.log(movieData);
  }
  return (
    <div>
      <div>
        <input
          type="text"
          value={search}
          placeholder="Enter movie name..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() =>
            getMovie({
              variables: {
                name: search,
              },
            })
          }
        >
          Fetch movie
        </button>
      </div>
      <div>
        {movieData && (
          <div>
            <h1>Movie name: {movieData.movie.name}</h1>
            <h1>Year of Publication: {movieData.movie.yearOfPublication}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Movie;
