const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const movieYear = document.querySelector('.movieYear');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');

let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.setItem('imageUrl');
let yearInStorage = localStorage.setItem('year');

console.log(titleInStorage);
console.log(imageUrlInStorage);
console.log(yearInStorage);

if(titleInStorage && imageUrlInStorage && yearInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(143, 143, 210, 0.749), rgba(33, 31, 31, 0.74)), url('${imageUrlInStorage}')`;
    movieYear.textContent = yearInStorage;
}


btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let movieYearInput = movieYear.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('year', movieYearInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    container.style.backgroundImage = `linear-gradient(rgba(143, 143, 210, 0.749), rgba(33, 31, 31, 0.74)),
    url('${posterUrlInput}')`;
    movieTitle.value = '';
    moviePosterUrl.value = '';
    movieYear.value = '';
});



