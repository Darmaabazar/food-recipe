import { elements } from "./base";

const renderRecipe = recipe => {
    const markup = `
        <li>
            <a class="results__link" href="#${recipe.id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="Test">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${recipe.title}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>
    `;

    elements.searchResultList.insertAdjacentHTML("beforeend", markup);
};

export const clearInputQuery = () => {
    elements.searchInput.value = '';
};

export const clearFieldResult = () => {
    elements.searchResultList.innerHTML = '';
    elements.pageButtons.innerHTML = '';
};

export let getInput = () => elements.searchInput.value;


const createButton = (page, type, direction) => 
    `<button class="btn-inline results__btn--${type}" data-goto=${page}>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${direction}"></use>
        </svg>
        <span>Хуудас ${page}</span>
    </button>`;

const renderButtons = (currentPage, totalPage) => {
    let buttonHtml;

    if(currentPage === 1 && totalPage > 1) {
        buttonHtml = createButton(currentPage + 1, 'next', 'right');
    } else if(currentPage < totalPage) {
        buttonHtml = createButton(currentPage - 1, 'prev', 'left');
        buttonHtml += createButton(currentPage + 1, 'next', 'right');
    } else if(currentPage === totalPage) {
        buttonHtml = createButton(currentPage - 1, 'prev', 'left');
    }

    elements.pageButtons.insertAdjacentHTML('afterbegin', buttonHtml);
};

export const renderRecipes = (recipes, currentPage = 1, resPerPage = 10) => {
    const start = (currentPage - 1) * resPerPage;
    const end = currentPage * resPerPage;

    recipes.slice(start, end).forEach(renderRecipe);

    const totalPage = Math.ceil(recipes.length / resPerPage);
    renderButtons(currentPage, totalPage);
};