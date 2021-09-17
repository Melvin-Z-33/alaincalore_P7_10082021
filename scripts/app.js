/* eslint-disable */
import * as comboBox from './combo-box.js';
import * as showcards from './show-cards.js';
import * as searchGeneral from './search-general.js';
import * as searchFilters from './search-filters.js';

export const headerInput = document.getElementById('header__input');
export const searchInput = document.getElementById('search');
export const results = document.getElementById('result-cards');
export const input = document.getElementById('box_ingredients');
export let bookOfRecipes;
export let searchTerm = '';
export let arrayForIngredients = [];
export let arrayDeleteElementDuplicate = [];


//let ingredientToSelect;
//JSON REQUEST
export const fetchRecipes = async () => {
	return (bookOfRecipes = await fetch('./recipes.json').then((res) => res.json()));
};

searchGeneral.searchGeneral();

//SEARCH WITH INPUT GENERAL
headerInput.addEventListener('input', (e) => {
	searchTerm = e.target.value;
	searchGeneral.searchGeneral();
});



window.onload = () =>{
	sessionStorage.clear();
}





