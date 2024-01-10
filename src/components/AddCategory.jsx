import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {

        setInputValue(target.value)

    }

    const onSubmit = () => {

        event.preventDefault() // evitar que se refresque el navegador

        // si no escribimos nada (o solo una letra) y pulsamos enter
        if (inputValue.trim().length <= 1) return;

        onNewCategory( inputValue.trim() );

        setInputValue('') // limpiamos una vez pulsado enter
    }

    return (
        <form onSubmit={ onSubmit /* forma corta de poner (event) => onSubmit(event)  */ }>
            <input
                type="text"
                placeholder="Buscar gifts"
                value = { inputValue }
                onChange={ onInputChange }
            />
        </form>

    )
}
