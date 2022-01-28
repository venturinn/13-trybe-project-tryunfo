import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          <input id="name-input" type="text" data-testid="name-input" />
        </label>
        <br />
        <label htmlFor="description-input">
          <input id="description-input" type="textarea" data-testid="description-input" />
        </label>
        <br />
        <label htmlFor="attr1-input">
          <input id="attr1-input" type="number" data-testid="attr1-input" />
        </label>
        <br />
        <label htmlFor="attr2-input">
          <input id="attr2-input" type="number" data-testid="attr2-input" />
        </label>
        <br />
        <label htmlFor="attr3-input">
          <input id="attr3-input" type="number" data-testid="attr3-input" />
        </label>
        <br />
        <label htmlFor="image-input">
          <input id="image-input" type="text" data-testid="image-input" />
        </label>
        <br />
        <label htmlFor="rare-input">
          <select id="rare-input" data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <br />
        <label htmlFor="trunfo-input">
          <input id="trunfo-input" type="checkbox" data-testid="trunfo-input" />
        </label>
        <br />
        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
