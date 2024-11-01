import { useState } from "react"

export function useSort() {
  const [sort, setSort] = useState<boolean>(false)

  return { sort, setSort }
}