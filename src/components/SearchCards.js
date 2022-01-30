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
      <div className="all-cards">
        <div>
          <p className="all-cards-title">Todas as cartas</p>
          <p>Filtros de Busca:</p>
          <input
            type="text"
            className="name-filter"
            data-testid="name-filter"
            onChange={ filterCard }
            placeholder="Nome da carta"
            disabled={ filterDisabled }
          />
          <label htmlFor="rare-filter">
            <select
              name="rare-filter"
              className="rare-filter"
              data-testid="rare-filter"
              placeholder="Raridade"
              onChange={ rareFilter }
              disabled={ filterDisabled }
            >
              <option>todas</option>
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <br />
          <label htmlFor="trunfo-filter">
            <input
              name="trunfo-filter"
              type="checkbox"
              className="trunfo-filter"
              data-testid="trunfo-filter"
              onChange={ trunfoFilter }
            />
          </label>
          <span>Super Trunfo</span>
        </div>
        <div className="cards-view">
          { filteredCards.map((card) => (
            <div className="card-view" key={ card.cardName }>
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
                className="delete-button"
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
