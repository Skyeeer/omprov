export class Chef {
    constructor(fullname) {
        this.fullname = fullname;
        this.recipes = [];
    }

    learnRecipe(recipes) {
        this.recipes.push(recipes);
    }

    listRecipes() {
        console.log(this.recipes);
    }
}