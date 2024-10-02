const cars = [
  {
    id: 1,
    car: 'Honda',
    type: 'Civic',
    price: 12000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
  },
  {
    id: 2,
    car: 'Audi',
    type: 'Q7',
    price: 40000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
  },
  {
    id: 33,
    car: 'BMW',
    type: '5 siries',
    price: 19000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
  },
  {
    id: 3,
    car: 'Honda',
    type: 'Accord',
    price: 20000,
    number: '+380000000000',
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
  },
  {
    id: 4,
    car: 'Volvo',
    type: 'XC60',
    price: 7000,
    img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
  },
];

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  carList: document.querySelector('.js-car-list'),
  favoriteCarList: document.querySelector('.js-favorite-car-list'),
};

refs.searchForm.addEventListener('submit', onSearchCar);
refs.carList.addEventListener('click', onClickAddFavoriteCar);

refs.carList.innerHTML = createMarkup(cars);

function createMarkup(arr) {
  return arr
    .map(
      ({ id, car, type, price, img }) => `<li data-id="${id}">
      <img src="${img}" alt="${car} ${type}" width="300" />
      <div class="favorite js-favorite" data-favorite>★</div>
      <h2>${car}</h2>
      <h3>${type}</h3>
      <p>${price}</p>
      </li>`
    )
    .join('');
}

function onSearchCar(evt) {
  evt.preventDefault();

  const form = evt.currentTarget;
  const { query, select } = form.elements;
  const normalizedQuery = query.value.trim().toLowerCase();

  const filteredCars = cars.filter(car => car[select.value].toLowerCase() === normalizedQuery);

  refs.carList.innerHTML = createMarkup(filteredCars);
}

function onClickAddFavoriteCar(evt) {
  if (evt.target.hasAttribute('data-favorite')) {
    evt.target.classList.toggle('favorite-active');

    const { id } = evt.target.closest('li').dataset;
    const car = cars.find(({ id: carId }) => carId === Number(id));

    addFavorite(car);
  }
}

function addFavorite({ id, car, type }) {
  refs.favoriteCarList.insertAdjacentHTML('beforeend', `<li data-id="${id}">${car} ${type}</li>`);
}
