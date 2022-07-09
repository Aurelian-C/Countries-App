import { View } from './View';

class CountriesView extends View {
  _parentElement = document.querySelector('.countries-container');
  _errorMessage = 'Error!!!';

  addHandlerSelectCountry(handlerFunc) {
    this._parentElement.addEventListener('click', function (e) {
      const countryEl = e.target.closest('.country');
      if (!countryEl) return;
      const { name } = countryEl.dataset;
      this.style = 'display: none';
      document.querySelector('.search').style = 'display: none';
      handlerFunc(name);
    });
  }

  _generateMarkup(data) {
    return data.map(this._generateMarkupCountry).join('');
  }

  _generateMarkupCountry(country) {
    return `
      <div class="country ${
        document.documentElement.classList.contains('dark') && 'card-dark-mode'
      }" data-name="${country.name.common}">
        <div class="country__flag" style="background-image: url('${
          country.flags.png
        }')"></div>
        <div class="country__info">
          <h3 class="country__title">${country.name.common}</h3>
          <div class="country__dates">
            <div class="country__date">
              <span class="info-title">Population:</span>
              <span>${country.population}</span>
            </div>
            <div class="country__date">
              <span class="info-title">Region:</span>
              <span>${country.region}</span>
            </div>
            <div class="country__date">
              <span class="info-title">Capital:</span>
              <span>${country.capital}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

export default new CountriesView();
