import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const initialState = ['NBA']

  const [categories, setCategories] = useState(initialState);

  return(
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories}/>
      <hr />

      <ol>
        {
          categories.map(category =>(
            <GifGrid
              key={ category }
              category={ category }
            />
          ))
        }

      </ol>

    </>
  );
};
