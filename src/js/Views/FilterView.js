class FilterView {
  _parentElement = document.querySelector('.countries-container');
  _btn = document.querySelector('.btn--filter');
  _filter = document.querySelector('.search__options');
  _optionsContainer = document.querySelector('.search__options');

  addHandlerFilteredCountries(handlerFunc) {
    this._optionsContainer.addEventListener('click', function (e) {
      if (!e.target.classList.contains('search__options--list')) return;
      const query = e.target.dataset.region;
      handlerFunc(query);
    });
  }

  constructor() {
    this._btn.addEventListener('click', this.toggleFilterVisibility.bind(this));

    document.addEventListener('click', e => {
      if (
        !this._btn.contains(e.target) &&
        !e.target.classList.contains('search__options--list')
      )
        this._filter.classList.remove('scale-hidden');
    });
  }

  toggleFilterVisibility() {
    this._filter.classList.toggle('scale-hidden');
  }

  getQuery(query) {
    const el = document.querySelector('.');
  }
}

export default new FilterView();
