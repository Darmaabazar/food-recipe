require(`@babel/polyfill`);
import "../css/style.css";
import Search from "./model/search";
import Recipe from "./model/recipe";
import { elements, renderLoader, clearLoader } from "./view/base";
import * as searchView from "./view/searchView";
import {renderRecipe, clearRecipe} from "./view/recipeView";


const state = {};

const controlSearch = async() => {
    const query = searchView.getInput();

    if(query) {
        state.search = new Search(query);

        searchView.clearInputQuery();
        searchView.clearFieldResult();
        renderLoader(elements.searchResultDiv);

        await state.search.doSearch();

        clearLoader();
        
        if(state.search.result === undefined) console.log("Хайлтаар илэрцгүй...");
        else searchView.renderRecipes(state.search.result);
    }
}

elements.searchForm.addEventListener("submit", e => {
    e.preventDefault();
    controlSearch();
});

elements.pageButtons.addEventListener("click", e => {
    const btn = e.target.closest('.btn-inline');

    if(btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearFieldResult();
        searchView.renderRecipes(state.search.result, goToPage);
    }
});



const controlRecipe = async() => {
    const id = window.location.hash.replace('#', '');
    
    state.recipe = new Recipe(id);

    clearRecipe();
    renderLoader(elements.recipeDiv);

    await state.recipe.getRecipe();

    clearLoader();
    state.recipe.calcTime();
    state.recipe.calcServings();

    renderRecipe(state.recipe);
};

window.addEventListener("hashchange", controlRecipe);