const container = document.querySelector('.recipe');
const recipes = document.querySelectorAll('.recipe');

recipes.forEach(recipe => {
    const moreInfo = recipe.querySelector('.more-info');

    function showMoreInfo() {
        moreInfo.style.display = 'block';
    }

    function hideMoreInfo() {
        moreInfo.style.display = 'none';
    }

    recipe.addEventListener('mouseover', showMoreInfo);
    recipe.addEventListener('mouseout', hideMoreInfo);
});
