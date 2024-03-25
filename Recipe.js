export class Recipe {
    constructor(name, difficulty) {
        this.name = name;
        this.difficulty = difficulty;
    }

    getRecipeInfo() {
        console.log(this.name, this.difficulty)
    }
}
