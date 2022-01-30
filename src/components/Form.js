import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      onInputChange,
      onSaveButtonClick,
      isSaveButtonDisabled,
    } = this.props;

    return (
      <form>
        <p>Nome:</p>
        <label htmlFor="name-input">
          <input
            name="cardName"
            className="name-input"
            type="text"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <p>Descrição:</p>
        <label htmlFor="description-input">
          <input
            name="cardDescription"
            className="description-input"
            type="textarea"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <span>Attr01:</span>
        <label htmlFor="attr1-input">
          <input
            name="cardAttr1"
            className="attr1-input"
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <span>Attr02:</span>
        <label htmlFor="attr2-input">
          <input
            name="cardAttr2"
            className="attr2-input"
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <span>Attr03:</span>
        <label htmlFor="attr3-input">
          <input
            name="cardAttr3"
            className="attr3-input"
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <p>Imagem URL:</p>
        <label htmlFor="image-input">
          <input
            name="cardImage"
            className="image-input"
            type="text"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <span>Raridade:</span>
        <label htmlFor="rare-input">
          <select
            name="cardRare"
            className="rare-input"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <br />

        {hasTrunfo === true ? (
          <p data-testid="trunfo-card">
            Você já tem um Super Trunfo em seu baralho
          </p>
        ) : (
          <div>
            <label htmlFor="trunfo-input">
              <input
                name="cardTrunfo"
                className="trunfo-input"
                type="checkbox"
                data-testid="trunfo-input"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
            </label>
            <span>Super Trunfo</span>
          </div>
        )}
        <br />
        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
