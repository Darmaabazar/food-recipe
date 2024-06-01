import axios from "axios";

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        const result = await axios(`https://forkify-api.herokuapp.com/api/v2/recipes/${this.id}?key=bdac85e7-3d7e-4f1c-aa7b-3aa175976d6a`);
        
        this.title = result.data.data.recipe.title;
        this.ingredients = result.data.data.recipe.ingredients;
        this.source_url = result.data.data.recipe.source_url;
        this.image_url = result.data.data.recipe.image_url;
        this.publisher_url = result.data.data.recipe.publisher_url;
        this.publisher = result.data.data.recipe.publisher;
        
    } catch(error){
        console.log(error);
    }

    calcTime() {
        this.time = this.ingredients.length;
    }

    calcServings() {
        this.servings = 4;
    }
}