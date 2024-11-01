import './App.css'
import Loader from './components/Loader'
import Movies from './components/Movies'
import SortButton from './components/SortButton'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import { useSort } from './hooks/useSort'


function App() {
  const { search, setSearch, errorSearch } = useSearch()
  const { sort, setSort } = useSort()
  const { movies, loading, errorMovies, getMovies } = useMovies({ search, sort })

  const handleSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value
    setSearch(() => newSearch)
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


//forma no controlada
// function App1() {
//   const { movies } = useMovies()
//   const inputRef = useRef<HTMLInputElement | null>(null)

//   const handleSumbit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault()
//     if (inputRef.current === null) return
//     const inputEl = inputRef.current
//     const value = inputEl.value
//     console.log(value)
//   }

//   return (
//     <div className='page'>
//       <header>
//         <h1>Movies Search</h1>
//         <form className='form' onSubmit={handleSumbit}>
//           <input 
//             ref={inputRef} 
//             type="text" 
//             placeholder='Avenger, Star Wars...' 
//           />
//           <button type='submit'>Search</button>
//         </form>
//       </header>
//       <main>
//         <Movies movies={movies} />
//       </main>
//     </div>
//   )
// }