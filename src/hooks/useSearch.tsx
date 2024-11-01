import { useEffect, useRef, useState } from "react"

// forma controlada
export function useSearch() {
  const [search, setSearch] = useState<string>('')
  const [error, setError] = useState<string | null>(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('Cannot search movie for empty string')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('Cannot search movie by a number')
      return
    }

    if (search.length < 3) {
      setError('Cannot search movie with less than 3 characters')
      return
    }

    setError(null)
  }, [search])

  return { search, setSearch, errorSearch: error }
}