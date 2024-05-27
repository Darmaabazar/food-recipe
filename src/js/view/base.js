export const elements = {
    searchForm: document.querySelector(`.search`),
    searchInput: document.querySelector('.search__field'),
    searchResultDiv: document.querySelector(`.results`),
    searchResultList: document.querySelector(`.results__list`),

};

export const elementStrings = {
    loader: 'loader',
}

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);

    if(loader) loader.parentElement.removeChild(loader);
}

export const renderLoader = parent => {
    const loader = `
        <div class="loader">
            <i class="fa-solid fa-spinner fa-spin-pulse"></i>
        </div>
    `;

    parent.insertAdjacentHTML("afterbegin", loader);
}