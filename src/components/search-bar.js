import React, { useContext } from 'react'
import { DogsContext } from '../store/context';

const SearchBar = () => {
  const { setFilter, filter } = useContext(DogsContext)
  const handleChange = e => {
    e.preventDefault();
    setFilter(e.target.value)
  }

  const handleClear = e => {
    e.preventDefault();
    setFilter('')
  }
  return (
    <div>
      <input value={filter} onChange={handleChange} />
      <button onClick={handleClear}>Clear</button>
    </div>
  )
}

export default SearchBar
