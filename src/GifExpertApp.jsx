import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            {/*Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={(value) => onAddCategory(value)}
            />

            {/* Listado gifs  */}
            {/* poner onAddCategory con () da error:
            Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
     */}
            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }
        </>
    )
}
