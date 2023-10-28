import React from 'react';
import {fetchRecipe} from "../api";

type RecipeProps = {
    id: string
}
function Recipe(props: RecipeProps) {
    let recipe = fetchRecipe(props.id);
    return <div>{recipe?.name}</div>;
}

export default Recipe;
