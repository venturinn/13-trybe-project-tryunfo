import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

let isSaveButtonDisabled = true;

class App extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.filterCard = this.filterCard.bind(this);
    this.rareFilter = this.rareFilter.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      cardsSave: [],
      hasTrunfo: false,
      filteredCards: [],
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
    const { cardsSave,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    cardsSave.push(
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
      cardTrunfo: false,
    });

    // Verifica se a carta adicionada é uma Super Trunfo
    if (cardTrunfo === true) {
      this.setState({
        hasTrunfo: true,
      });
    }

    // Atualiza o state que é renderizado na página (filteredCards)
    this.setState({
      filteredCards: cardsSave,
    });
  }

  deleteCard(event) {
    const { name } = event.target;
    const { cardsSave } = this.state;

    // Se um card Super Trunfo for removido, o state é atualizado com a informação de que não mais existe uma carta Super Trunfo
    if (cardsSave[name].cardTrunfo === true) {
      this.setState({
        hasTrunfo: false,
      });
    }

    // No array de cards salvos, remove apenas o card com o index correspondente ao botão, pois o 'name' do botão é sempre igual ao index do array
    this.setState(
      cardsSave.splice(name, 1),
    );
  }

  filterCard(event) {
    const { value } = event.target;
    const { cardsSave } = this.state;

    if (value !== '') {
      this.setState({
        filteredCards: cardsSave.filter((card) => card.cardName.includes(value)),
      });
    } else {
      this.setState({
        filteredCards: cardsSave,
      });
    }
  }

  rareFilter(event) {
    const { value } = event.target;
    const { cardsSave } = this.state;

    if (value === 'normal') {
      this.setState({
        filteredCards: cardsSave.filter((card) => card.cardRare === 'normal'),
      });
    } else if (value === 'raro') {
      this.setState({
        filteredCards: cardsSave.filter((card) => card.cardRare === 'raro'),
      });
    } else if (value === 'muito raro') {
      this.setState({
        filteredCards: cardsSave.filter((card) => card.cardRare === 'muito raro'),
      });
    } else {
      this.setState({
        filteredCards: cardsSave,
      });
    }
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
      hasTrunfo,
      cardsSave,
      filteredCards,
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
          hasTrunfo={ hasTrunfo }
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
        <div>
          <p>Filtro de Busca</p>
          <input
            type="text"
            data-testid="name-filter"
            onChange={ this.filterCard }
            placeholder="Nome da carta"
          />
          <label htmlFor="rare-filter">
            <select
              name="rare-filter"
              data-testid="rare-filter"
              onChange={ this.rareFilter }
            >
              <option>todas</option>
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>

        </div>

        {
          filteredCards.map((card) => (
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
                onClick={ this.deleteCard }
                data-testid="delete-button"
              >
                Excluir
              </button>
            </div>
          ))
        }
      </div>
    );
  }
}

export default App;
