import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;

    if (cardName !== '' && cardName !== undefined) {
      return (
        <div className="card">
          <p data-testid="name-card">{cardName}</p>
          <img data-testid="image-card" src={ cardImage } alt={ cardName } />
          <p className="card-info" data-testid="description-card">{cardDescription}</p>
          <div className="Attr-container">
            <p data-testid="attr1-card">{(`Attr01  ➞ ${cardAttr1}`)}</p>
            <p data-testid="attr2-card">{(`Attr02  ➞ ${cardAttr2}`)}</p>
            <p data-testid="attr3-card">{(`Attr03  ➞ ${cardAttr3}`)}</p>
          </div>
          <p data-testid="rare-card">{cardRare}</p>
          {
            cardTrunfo === true
          && <p className="super-trunfo" data-testid="trunfo-card">Super Trunfo</p>
          }
        </div>
      );
    }
    return (
      <div className="card" />
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
};

Card.defaultProps = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
};
export default Card;
