require(`@babel/polyfill`);
import "../css/style.css";
import Search from "./model/search";
import { elements, renderLoader, clearLoader } from "./view/base";
import * as searchView from "./view/searchView";


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
