import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

let isSaveButtonDisabled = true;

class App extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'nomal',
      cardTrunfo: false,
      cardSave: [],
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  onSaveButtonClick() {
    const { cardSave,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    cardSave.push(
      {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      },
    );

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
    });
  }

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const maxSumCardAttr = 210;
    const maxCardAttr = 90;

    const cardAttr1Number = parseInt(cardAttr1, 10);
    const cardAttr2Number = parseInt(cardAttr2, 10);
    const cardAttr3Number = parseInt(cardAttr3, 10);

    if (cardName !== ''
    && cardDescription !== ''
    && cardImage !== ''
    && cardRare !== ''
    && (cardAttr1Number + cardAttr2Number + cardAttr3Number) <= maxSumCardAttr
    && cardAttr1Number >= 0
    && cardAttr1Number <= maxCardAttr
    && cardAttr2Number >= 0
    && cardAttr2Number <= maxCardAttr
    && cardAttr3Number >= 0
    && cardAttr3Number <= maxCardAttr
    ) {
      isSaveButtonDisabled = false;
    } else {
      isSaveButtonDisabled = true;
    }

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.handleChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
