import data from '../data/DATA.json';
const dataRestaurant = data.restaurants;

const loadRestaurant = (restaurants) => {
  const restaurantlist = document.querySelector('.restaurant__list');
  restaurantlist.innerHTML = '';
  restaurants.slice(-6).forEach((resto) => {
    const { pictureId, name, city, rating, description } = resto;

    const item = `
    <div class="restaurant" tabindex="0">
      <img loading=lazy src="${pictureId}" alt="${name} Image" class="restaurant__image" />
      <div class="restaurant__content">
        <p class="restaurant__name">${name}</p>
        <div class="restaurant__info">
        <p class="restaurant__location">
          <img src="./src/icons/location.svg" alt="location" width="20px"/>${city}
        </p>
        <p class="restaurant__rating"><img src="./src/icons/star.svg" alt="rating"/>${rating}</p>
        </div>
        <p class="restaurant__description">${description}</p>
      </div>
    </div>
    `;
    restaurantlist.innerHTML += item;
  });
};

loadRestaurant(dataRestaurant);
