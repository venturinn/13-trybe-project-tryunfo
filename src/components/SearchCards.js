import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class SearchCards extends React.Component {
  render() {
    const {
      filterCard,
      filterDisabled,
      rareFilter,
      trunfoFilter,
      filteredCards,
      deleteCard,
      cardsSave,
    } = this.props;

    return (
      <div>
        <div>
          <p>Filtros de Busca</p>
          <input
            type="text"
            data-testid="name-filter"
            onChange={ filterCard }
            placeholder="Nome da carta"
            disabled={ filterDisabled }
          />
          <label htmlFor="rare-filter">
            <select
              name="rare-filter"
              data-testid="rare-filter"
              onChange={ rareFilter }
              disabled={ filterDisabled }
            >
              <option>todas</option>
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo-filter">
            <input
              name="trunfo-filter"
              type="checkbox"
              data-testid="trunfo-filter"
              onChange={ trunfoFilter }
            />
          </label>
        </div>
        <div>
          { filteredCards.map((card) => (
            <div key={ card.cardName }>
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
              <button
                type="button"
                name={ cardsSave.indexOf(card) }
                onClick={ deleteCard }
                data-testid="delete-button"
              >
                Excluir
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

SearchCards.propTypes = {
  filterCard: PropTypes.func.isRequired,
  filterDisabled: PropTypes.bool.isRequired,
  rareFilter: PropTypes.func.isRequired,
  trunfoFilter: PropTypes.func.isRequired,
  filteredCards: PropTypes.arrayOf(PropTypes.object),
  cardsSave: PropTypes.arrayOf(PropTypes.object),
  deleteCard: PropTypes.func.isRequired,
};

SearchCards.defaultProps = {
  filteredCards: [],
  cardsSave: [],
};

export default SearchCards;
