import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Play extends React.Component {
  render() {
    const { nextCard,
      shuffle,
      selectCard,
      nextCardDisabled,
      shuffleDisabled,
      nextCardColor,
      shuffleColor,
      counter,
    } = this.props;

    return (
      <div className="cards-view">
        <p>Vamos Jogar!</p>
        <div className="selected-card" key={ selectCard.cardName }>
          <Card
            cardName={ selectCard.cardName }
            cardDescription={ selectCard.cardDescription }
            cardAttr1={ selectCard.cardAttr1 }
            cardAttr2={ selectCard.cardAttr2 }
            cardAttr3={ selectCard.cardAttr3 }
            cardImage={ selectCard.cardImage }
            cardRare={ selectCard.cardRare }
            cardTrunfo={ selectCard.cardTrunfo }
          />
          <button
            type="button"
            className=" shuffle-button"
            disabled={ shuffleDisabled }
            onClick={ shuffle }
            style={ { backgroundColor: shuffleColor } }
          >
            Embaralhar Cartas
          </button>
          <button
            type="button"
            className="next-button"
            disabled={ nextCardDisabled }
            onClick={ nextCard }
            style={ { backgroundColor: nextCardColor } }
          >
            Próxima carta...
          </button>
          <p>{`Cartas Restantes: ${counter}`}</p>
        </div>
      </div>
    );
  }
}

Play.propTypes = {
  nextCard: PropTypes.object.isRequired,
  shuffle: PropTypes.func.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Play;
