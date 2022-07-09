import { API_URL } from './Config';
import { AJAX } from './Helpers';

export const state = {
  allCountries: [],
  allCountryShortcutName: {},
  filteredCountries: [],
  country: {},
};

export const getAllCountries = async function () {
  try {
    state.allCountries = await AJAX(`${API_URL}all`);

    state.allCountries.forEach(
      country =>
        (country.population = new Intl.NumberFormat().format(
          country.population
        ))
    );

    state.allCountryShortcutName = state.allCountries.map(country => {
      return Object.entries({
        [country.cca3]: country.name.common,
      });
    });
  } catch (err) {
    throw err;
  }
};

export const filterCountries = function (regionName) {
  state.filteredCountries = state.allCountries.filter(
    country => country.region === regionName
  );
};

export const getCountry = async function (countryName) {
  try {
    state.country = await AJAX(`${API_URL}name/${countryName}`);
    state.country.forEach(
      country =>
        (country.population = new Intl.NumberFormat().format(
          country.population
        ))
    );
  } catch (err) {
    throw err;
  }
};

export const countriesShortcutNames = function () {
  console.log(shortcuts);
};
