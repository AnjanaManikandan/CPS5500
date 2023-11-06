// RecipeList.js
import React from 'react';
import RecipeDetails from './RecipeDetails';

function RecipeList({ recipes }) {
  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeDetails key={recipe.recipe.uri} recipe={recipe.recipe} />
      ))}
    </div>
  );
}
export default RecipeList;

