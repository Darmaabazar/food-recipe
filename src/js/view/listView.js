import { elements } from "./base";


export const renderList = item => {
    const html = `
        <li class="shopping__item">
            <div class="shopping__count">
                <input type="number" value="${item.quantity}" step="100">
                <p>${item.unit}</p>
            </div>
            <p class="shopping__description">${item.description}</p>
            <button class="shopping__delete btn-tiny">
                <svg>
                    <use href="img/icons.svg#icon-circle-with-cross"></use>
                </svg>
            </button>
        </li>
    `;

    elements.shoppingList.insertAdjacentHTML("beforeend", html);
};

export const clearList = () => {
    elements.shoppingList.innerHTML = "";
};