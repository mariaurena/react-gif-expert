
// snippet: rafc
import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'Design' ])

  const onAddCategory = ( newCategory ) => {

    // si la categoria ya existe, no hacemos nada
    if( categories.includes(newCategory) ) return;

    setCategories( [newCategory, ...categories] ) // añadimos una nueva categoria al principio

  }

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
          // setCategories = { setCategories } 
          onNewCategory = { (value) => onAddCategory(value) }
        />

        {/* Listado de Gif */}

        { 
          categories.map( category => ( 
            <GifGrid 
              key={ category }
              category={ category } />
          ))
        }

    </>
  )
}

export default GifExpertApp

