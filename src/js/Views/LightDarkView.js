import icons from '../../img/icons.svg';

class LightDarkView {
  _btn = document.querySelector('.header__modes');

  addHandlerLightDarkMode(handlerFunc) {
    this._btn.addEventListener('click', () => {
      this._selectElements();
      this._darkTheme();
      // handlerFunc();
    });
  }

  _selectElements() {
    this._html = document.documentElement;
    this._body = document.body;
    this._header = document.querySelector('.header');
    this._headerIcon = document.querySelector('.header__icon');
    this._headerSwitchText = document.querySelector('.header__switch-text');
    this._searchInput = document.querySelector('.search__input');
    this._searchInputIcon = document.querySelector('.search__icon');
    this._input = document.getElementById('search-input');
    this._searchFilter = document.querySelector('.search__filter');
    this._btnFilter = document.querySelector('.btn--filter');
    this._btnFilterIcon = document.querySelector('.btn__icon--filter');
    this._searchOptions = document.querySelector('.search__options');
    this._searchOptionsLists = document.querySelectorAll(
      '.search__options--list'
    );
    this._cards = document.querySelectorAll('.country');
    this._btnBack = document.querySelector('.btn--back');
    this._btnBackIcon = document.querySelector('.btn--back .btn__icon');
    this._neighbourList = document.querySelectorAll(
      '.country-detail__borders-neighbour'
    );
  }

  _darkTheme() {
    this._html.classList.toggle('dark');
    this._body.classList.toggle('dark-mode-background');
    this._body.classList.toggle('dark-mode-text');
    this._header.classList.toggle('dark-mode-elements');
    this._headerIcon.classList.toggle('dark-mode-fill');
    this._searchInput.classList.toggle('dark-mode-elements');
    this._searchInputIcon.classList.toggle('dark-mode-fill');
    this._input.classList.toggle('dark-mode-elements');
    this._input.classList.toggle('search-input-dark-mode');
    this._searchFilter.classList.toggle('dark-mode-elements');
    this._btnFilter.classList.toggle('dark-mode-elements');
    this._btnFilter.classList.toggle('dark-mode-text');
    this._btnFilterIcon.classList.toggle('dark-mode-fill');
    this._searchOptions.classList.toggle('dark-mode-elements');
    this._cards.forEach(card => card.classList.toggle('card-dark-mode'));
    this._searchOptionsLists.forEach(list =>
      list.classList.toggle('search__options--dark')
    );
    this._btnBack?.classList.toggle('button--dark');
    this._btnBackIcon?.classList.toggle('icon--dark');
    this._neighbourList.forEach(list =>
      list.classList.toggle('neighbour--dark')
    );

    if (this._html.classList.contains('dark')) {
      this._headerSwitchText.textContent = 'Light Mode';

      this._headerIcon.innerHTML = `
        <svg class="header__icon dark-mode-fill">
          <use href="${icons}#icon-sun"></use>
        </svg>
      `;
    } else {
      this._headerSwitchText.textContent = 'Dark Mode';

      this._headerIcon.innerHTML = `
        <svg class="header__icon">
          <use href="${icons}#icon-brightness-contrast"></use>
        </svg>
      `;
    }
  }
}

export default new LightDarkView();
