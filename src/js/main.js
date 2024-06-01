require(`@babel/polyfill`);
import "../css/style.css";
import Search from "./model/search";
import Recipe from "./model/recipe";
import List from "./model/list";
import { elements, renderLoader, clearLoader } from "./view/base";
import * as searchView from "./view/searchView";
import * as listView from "./view/listView";
import {renderRecipe, clearRecipe, highlightSelectedRecipe} from "./view/recipeView";


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

    if(id) {
        state.recipe = new Recipe(id);
    
        clearRecipe();
        renderLoader(elements.recipeDiv);
        
        highlightSelectedRecipe(id);
        await state.recipe.getRecipe();

        clearLoader();
        state.recipe.calcTime();
        state.recipe.calcServings();

        renderRecipe(state.recipe);
    }

    
};

// window.addEventListener("hashchange", controlRecipe);
// window.addEventListener("load", controlRecipe);

["hashchange", "load"].forEach(e => window.addEventListener(e, controlRecipe));



const controlList = async() => {
    state.list = new List();

    listView.clearList();
    
    state.recipe.ingredients.forEach(e => {
        state.list.addItem(e);
        listView.renderList(e);
    });
    
};


elements.recipeDiv.addEventListener("click", e => {
    if(e.target.matches('.recipe__btn, .recipe__btn *')) {
        controlList();
    }
});
