import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    // const {setCategories} = props;
    const [inputValue, setInputValue] = useState('');


    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        // para evitar que se haga refresh al hacer intro en el input
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        // setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
        onNewCategory(inputValue.trim());
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder='Buscar gifs'
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
}
