require("@babel/polyfill");
import "../css/style.css";
import axios from "axios";


async function doSearch(search) {
    try{

        let response = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${search}`);
        let recipes = response.data.recipes;
        console.log(recipes);
    
        response = await axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${recipes[1].recipe_id}`);
        console.log(response.data.recipe.ingredients);
    } catch(error){
        alert(error);
    }
}

doSearch("pizza");