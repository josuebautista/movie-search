// import withResults from '../mocks/with-results.json'
// import withoutResults from '../mocks/no-results.json'
import { Movie } from '../../global'
import { useState, useRef, useMemo, useCallback } from 'react';
import { searchMovies } from '../services/movies';


export function useMovies({
  search,
  sort
}: {
  search: string,
  sort: boolean
}) {
  const [movies, setMovies] = useState<Movie[] | []>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const previousSearch = useRef<string>(search)

  const getMovies = useCallback(async ({
    search
  }: {
    search: string
  }) => {
    if (previousSearch.current === search) return
    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newMovies = await searchMovies(search)
      setMovies(newMovies)
    } catch (error) {
      setError(error as string)
      setMovies([])
    } finally {
      setLoading(false)
    }
  }, [])

  const sortedMovies = useMemo(() => {
    return sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
  }, [movies, sort])

  return {
    movies: sortedMovies,
    loading,
    errorMovies: error,
    getMovies,
  }
}
