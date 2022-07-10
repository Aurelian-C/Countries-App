import * as Model from './Model';
import CountriesView from './Views/CountriesView';
import FilterView from './Views/FilterView';
import SearchView from './Views/SearchView';
import { TIMEOUT_FILTER } from './Config';
import CountryView from './Views/CountryView';
import LightDarkView from './Views/LightDarkView';

const controlAllCountries = async function () {
  try {
    CountriesView.renderSpinner();
    await Model.getAllCountries();
    CountriesView.render(Model.state.allCountries);
  } catch (err) {
    CountriesView.renderErrorMessage(err);
  }
};

const controlFilteredCountries = function (query) {
  if (Model.state.allCountries.length === 0) return;
  CountriesView.renderSpinner();
  Model.filterCountries(query);
  CountriesView.render(Model.state.filteredCountries);
  setTimeout(() => {
    FilterView.toggleFilterVisibility();
  }, TIMEOUT_FILTER * 1000);
};

const controlSearchCountry = async function (countryName) {
  try {
    CountriesView.renderSpinner();
    await Model.getCountry(countryName);
    CountriesView.render(Model.state.country);
  } catch (err) {
    CountriesView.renderErrorMessage(
      `Sorry, there is not such a name ("${countryName}") for a country! Please try another country name!`
    );
  }
};

const controlAddPageCountry = async function (countryName) {
  try {
    await Model.getCountry(countryName);
    CountryView.render(
      Model.state.country[0],
      Model.state.allCountryShortcutName
    );
  } catch (err) {
    console.log(err);
  }
};

// const controlLightDarkMode = function () {
//   CountryView.render(
//     Model.state.country[0],
//     Model.state.allCountryShortcutName
//   );
// };

const init = function () {
  controlAllCountries();
  FilterView.addHandlerFilteredCountries(controlFilteredCountries);
  SearchView.addHandlerSubmit(controlSearchCountry);
  CountriesView.addHandlerSelectCountry(controlAddPageCountry);
  CountryView.addHandlerRemoveCountryPage();
  LightDarkView.addHandlerLightDarkMode();
};
init();
