import React from 'react';

const RecipeUsedIngredientsTable = ({ usedIngredients }) => {
  return (
    <div>
      <h2>Used Ingredients:</h2>
      <ul>
        {usedIngredients ? (
          usedIngredients.map((ingredient) => (
            <li key={ingredient.id}>
              {ingredient.name}: {ingredient.amount}
            </li>
          ))
        ) : (
          <p>No used ingredients available.</p>
        )}
      </ul>
    </div>
  );
};



export default RecipeUsedIngredientsTable;
