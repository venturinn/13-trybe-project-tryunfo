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
      <div className="cards-play-view">
        <p>Vamos Jogar!</p>
        <div className="buttons">
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
        </div>
        <p>{`Cartas Restantes: ${counter}`}</p>

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

        </div>
      </div>
    );
  }
}

Play.propTypes = {
  nextCard: PropTypes.func.isRequired,
  shuffle: PropTypes.func.isRequired,
  nextCardDisabled: PropTypes.bool.isRequired,
  shuffleDisabled: PropTypes.bool.isRequired,
  nextCardColor: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  shuffleColor: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired,
  selectCard: PropTypes.shape({
    cardName: PropTypes.string,
    cardDescription: PropTypes.string,
    cardAttr1: PropTypes.string,
    cardAttr2: PropTypes.string,
    cardAttr3: PropTypes.string,
    cardImage: PropTypes.string,
    cardRare: PropTypes.bool,
    cardTrunfo: PropTypes.bool,
  }),
};

Play.defaultProps = {
  selectCard: {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: false,
    cardTrunfo: false,
  },

};

export default Play;
