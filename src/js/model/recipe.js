import axios from "axios";

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        const result = await axios(`https://forkify-api.herokuapp.com/api/v2/recipes/${this.id}?key=e6902aec-e6a4-4e4d-8044-591b0ffdb5a6`);

        this.title = result.data.recipe.title;
        this.ingredients = result.data.recipe.ingredients;
        this.source_url = result.data.recipe.source_url;
        this.image_url = result.data.recipe.image_url;
        this.social_rank = result.data.recipe.social_rank;
        this.publisher_url = result.data.recipe.publisher_url;
        this.publisher = result.data.recipe.publisher;
        
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