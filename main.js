import { Chef } from "./Chef.js"
import { Recipe } from "./Recipe.js"

const chef4 = new Chef("Guy Fieri");
const chef5 = new Chef("James Acaster");

const recipe4 = new Recipe("Deconstructed choclate cake", "Easier");
const recipe5 = new Recipe("Burger", "Easy");
const recipe6 = new Recipe("Shakshuka", "Impossible");

chef4.learnRecipe(recipe5)
chef5.learnRecipe(recipe4, recipe6);

chef4.listRecipes();
chef5.listRecipes();

recipe4.getRecipeInfo();
recipe5.getRecipeInfo();
recipe6.getRecipeInfo();