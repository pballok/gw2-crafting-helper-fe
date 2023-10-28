import { RecipeDto } from "./dto/recipedto";

export const fetchRecipe = (id: string): RecipeDto | null => {
    return {
        id: id,
        name: 'Recipe ' + id
    }
}