import { useCallback } from 'react'
import './App.css'
import Loader from './components/Loader'
import Movies from './components/Movies'
import SortButton from './components/SortButton'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import { useSort } from './hooks/useSort'
import debounce from 'just-debounce-it'

function App() {
  const { search, setSearch, errorSearch } = useSearch()
  const { sort, setSort } = useSort()
  const { movies, loading, errorMovies, getMovies } = useMovies({ search, sort })

  const debounceGetMovies = useCallback(
    debounce((search: string) => {
      getMovies({ search })
    }, 300)
    , [])

  const handleSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value
    setSearch(() => newSearch)
    if(newSearch.length < 3) return
    debounceGetMovies(newSearch)
  }

  return (
    <div className='page'>
      <header>
        <h1>Movies Browser</h1>
        <form className='form' onSubmit={handleSumbit}>
          <input
            onChange={handleChange}
            value={search}
            name='search'
            type="text"
            placeholder='Avenger, Star Wars...'
            className={errorSearch ? 'input-error' : ''}
          />
          <div className='sort-button'>
            <span>Sort</span>
            <SortButton sort={sort} setSort={setSort} />
          </div>
          <button type='submit'>Search</button>
        </form>
        {errorSearch && <p className='error'>{errorSearch}</p>}
      </header>
      <main className='container-movies'>
        {loading ? (
          <Loader />
        ) : (
          <Movies movies={movies} />
        )}
        {errorMovies && <p className='error no-results'>{errorMovies}</p>}
      </main>
    </div>
  )
}

export default App
