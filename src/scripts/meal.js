const getFood = async () => {
  const baseUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=French';
  try {
    const response = await fetch(`${baseUrl}`, { method: 'GET' });
    const food = await response.json();
    loadFood(food.meals);
  } catch (e) {
    throw e;
  }
};

getFood();

const loadFood = (data) => {
  const foodList = document.querySelector('.food__list');
  foodList.innerHTML = '';

  data.slice(-8).forEach((meal) => {
    const { strMealThumb, strMeal } = meal;
    const food = `
        <div class="food" tabindex="0">
          <img loading=lazy class="food__img" src="${strMealThumb}" alt="${strMeal} Image" />
          <div class="food__info">
            <p>${strMeal}</p>
          </div>
        </div>
      `;
    foodList.innerHTML += food;
  });
};
