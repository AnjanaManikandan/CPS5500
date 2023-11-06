// RecipeDetails.js
import React from 'react';

function RecipeDetails({ recipe }) {
  return (
    <div>
      <h2>{recipe.label}</h2>
      <img src={recipe.image} alt={recipe.label} />
      {/* Display other recipe information and nutrition data */}
    </div>
  );
}

export default RecipeDetails;
