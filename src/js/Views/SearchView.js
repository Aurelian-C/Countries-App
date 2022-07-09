class SearchView {
  _parentElement = document.querySelector('.search__form');

  addHandlerSubmit(handlerFunc) {
    this._parentElement.addEventListener('submit', e => {
      e.preventDefault();
      const query = this.getQuery();
      handlerFunc(query);
    });
  }

  getQuery() {
    const query = document.getElementById('search-input').value;
    document.getElementById('search-input').value = '';
    return query;
  }
}

export default new SearchView();
