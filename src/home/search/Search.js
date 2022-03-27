import React from 'react'
import './search.css'

export default function Search({query, setQuery}) {
    function onChange(e){
        setQuery(e.target.value);
    }
  return (
    <>
      <div className="search-container">
        <input
          className="search-input"
          type="search"
          placeholder="Rechercher un pokémon"
          value={query}
          onChange={onChange}
        />
      </div>
    </>
  )
}
