import React from 'react'
import { ItemList } from './ItemList';

export const Content = ({items, handleChange, handleDelete}) => {
    return (
    <>
      {(items.length)?(<ItemList
      items ={items}
      handleChange ={handleChange}
      handleDelete ={handleDelete}/>
     
      ):<p>your list is empty</p>
}
        </>
  )
}
