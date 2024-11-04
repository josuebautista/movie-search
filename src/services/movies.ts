import { Movie, SearchResponse } from "../../global"

export const searchMovies = async (search: string) => {
  if (!search) return []
  try {
    const res = await fetch(import.meta.env.VITE_ENDPOINT_API_URL + `s=${search}`)
    const json = await res.json() as SearchResponse
    const movies = json.Search
    return movies.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
      type: movie.Type,
    })) as Movie[]
  } catch (error) {
    console.error(error)
    throw new Error('Error searching movies')
  }
}
