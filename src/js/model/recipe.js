import axios from "axios";

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        const result = await axios(`https://forkify-api.herokuapp.com/api/v2/recipes/${this.id}?key=a6fadda6-b190-48db-82cc-366c32d1465a`);
        
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