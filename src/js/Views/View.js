import icons from '../../img/icons.svg';

export class View {
  _data;

  render(data, neighbour) {
    this._data = data;
    const markup = this._generateMarkup(this._data, neighbour);
    this._clear();
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }

  _clear() {
    this._parentElement.textContent = '';
  }

  renderSpinner() {
    const markup = `<div class="loader"></div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }

  renderErrorMessage(message = this._errorMessage) {
    const markup = `
      <div class="error">
        <svg class="error__icon">
          <use href="${icons}#icon-warning"></use>
        </svg>
        <p class="error__text">
          ${message}
        </p>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }
}
