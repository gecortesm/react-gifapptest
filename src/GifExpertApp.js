import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

// rafc snipper crear componente


export const GifExpertApp = () => {


    
    const [categories, setCategories] = useState(['One Punch'])

    /*
    const handleAdd = () => {
        //setcategories( [...categories , 'Hunter x Hunter']);
        setcategories(cats => [...cats, 'Hunter X Hunter']);
        console.log(categories);

    } */




    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>

           

            <ol>

                {
                    categories.map( category   =>

                         <GifGrid 
                            key={ category }
                            category={ category } />
                    )
                    
                }
        
            </ol>

        </>
        
    )

}

