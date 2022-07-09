import icons from '../../img/icons.svg';
import { View } from './View';

class CountryView extends View {
  _parentElement = document.querySelector('.country__detail');

  addHandlerRemoveCountryPage(handlerFunc) {
    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.btn--back');
      if (!btn) return;
      this._clear();
      document.querySelector('.search').style = 'display: flex';
      document.querySelector('.countries-container').style = 'display: grid';
    });
  }

  _generateMarkup(data, neighbour) {
    const borders = data.borders?.map(border => {
      const entry = neighbour.find(name => name[0][0] === border);
      return entry[0][1];
    });

    const nativeNames = [];
    const currencies = [];
    const languages = [];

    for (const key in data.name.nativeName) {
      nativeNames.push(data.name.nativeName[key].common);
    }

    for (const key in data.currencies) {
      currencies.push(data.currencies[key].name);
    }

    for (const key in data.languages) {
      languages.push(data.languages[key]);
    }

    return `
        <button class="btn btn--back ${
          document.documentElement.classList.contains('dark') && 'button--dark'
        }">
          <svg class="btn__icon ${
            document.documentElement.classList.contains('dark') && 'icon--dark'
          }">
            <use href="${icons}#icon-arrow-left2"></use>
          </svg>
          <span>Back</span>
        </button>

        <div class="country-detail__container">
          <div class="country-detail__flag">
            <img
              src=${data.flags.png}
              alt=""
              class="country-detail__img"
            />
          </div>

          <div class="country-detail__infos">
            <h2 class="country-detail__title">${data.name.common}</h2>
            <div>
              <div class="country__date">
                <span class="info-title">Native name:</span>
                <span>${nativeNames[0]}</span>
              </div>
              <div class="country__date">
                <span class="info-title">Population:</span>
                <span>${data.population}</span>
              </div>
              <div class="country__date">
                <span class="info-title">Region:</span>
                <span>${data.region}</span>
              </div>
              <div class="country__date">
                <span class="info-title">Sub Region:</span>
                <span>${data.subregion}</span>
              </div>
              <div class="country__date">
                <span class="info-title">Capital:</span>
                <span>${data.capital}</span>
              </div>
            </div>
            <div>
              <div class="country__date">
                <span class="info-title">Top Level Domain:</span>
                <span>${data.tld}</span>
              </div>
              <div class="country__date">
                <span class="info-title">Currencies:</span>
                <span>${currencies[0]}</span>
              </div>
              <div class="country__date">
                <span class="info-title">Languages:</span>
                <span>${languages.join(', ')}</span>
              </div>
            </div>
            <div class="country-detail__borders">
              <h3>Border Countries:</h3>
              <ul class="country-detail__borders-name">
                ${
                  borders
                    ? borders.map(this._generateMarkupBorders).join('')
                    : 'This country have no neighbour/s.'
                }
              </ul>
            </div>
          </div>
        </div>
    `;
  }

  _generateMarkupBorders(border) {
    return `<li class="country-detail__borders-neighbour ${
      document.documentElement.classList.contains('dark') && 'neighbour--dark'
    }">${border}</li>`;
  }
}

export default new CountryView();
