import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['The Eminence in Shadow']);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;

        setCategories([ newCategory, ...categories]);
        // setCategories(cat => [ ...cat, newCategory]);
        // setCategories(categories.concat('Lol'));
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                // setCategories={setCategories}
                onNewCategory={onAddCategory}
            />

            {
                categories.map( category => (
                    <GifGrid key={category} category={category}/>
                ))
            }

        </>
    )
}