import React from 'react'

export const SearchItem = ({search, setSearch}) => {
  return (
    <form className='search' onSubmit={(e) => (e.preventDefault)}>
        <label htmlFor='search'>Search</label>
        <input
        id ='search'
        type="text"
        role='searchbox'
        placeholder='Search Items'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        ></input>
    </form>
  )
}
