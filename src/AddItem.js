import React from 'react'
import { FaPlus } from 'react-icons/fa6'
import { useRef } from 'react'

export const AddItem = ({newItem, setnewItem,handleSubmit}) => {
  const inputRef = useRef()
  return (
    <form className ='addform'onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor ='additem'>AddItem</label>
        <input
        autoFocus
        ref={inputRef}
        id ='additem'
        type ='text'
        placeholder='Add Item'
        required
        value={newItem}
        onChange={(e)=> setnewItem(e.target.value)}/>
        <button
        type='submit'
        aria-label='Add Item'
        onClick={() => inputRef.current.focus()}
        >
            <FaPlus/></button></form>
  )
}
