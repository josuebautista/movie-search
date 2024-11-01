import { FC } from 'react'
import {  Movie } from '../../global';

interface MoviesProps {
  movies: Movie[] | [];
}

const ListOfMovies: FC<MoviesProps> = ({
  movies
}) => {
  return (
    <ul className='movies'>
      {movies.map(movie => (
        <li key={movie.id}>
          <img 
            src={movie.poster} 
            alt={movie.title} 
            className='poster'  
          />
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
        </li>
      ))}
    </ul>
  )
}

const NoMoviesResult: FC = () => {
  return (
    <p className='no-results'>No movies found</p>
  )
}

const Movies: FC<MoviesProps> = ({ movies }) => {
  const hasMovies = movies.length > 0
  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMoviesResult />
  )
}

export default Movies