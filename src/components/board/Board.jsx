import React from "react";
import Card from "../card/Card";
import "./Board.css";

class Board extends React.Component {
  #emojis = [
    "ð",
    "ð",
    "ð",
    "ð",
    "ð",
    "ð",
    "ð",
    "ð",
    "ð",
    "ðŦ",
    "ð",
    "ð",
    "ð",
    "ðĨ­",
    "ð",
    "ðĨĨ",
    "ðĨ",
    "ð",
    "ð",
    "ðĨ",
    "ðĨĶ",
    "ðĨŽ",
    "ðĨ",
    "ðķ",
    "ðŦ",
    "ð―",
    "ðĨ",
    "ðŦ",
    "ð§",
    "ð§",
    "ðĨ",
    "ð ",
    "ðĨ",
    "ðĨŊ",
    "ð",
    "ðĨ",
    "ðĨĻ",
    "ð§",
    "ðĨ",
    "ðģ",
    "ð§",
    "ðĨ",
    "ð§",
    "ðĨ",
    "ðĨĐ",
    "ð",
    "ð",
    "ðĶī",
    "ð­",
    "ð",
    "ð",
    "ð",
    "ðŦ",
    "ðĨŠ",
    "ðĨ",
    "ð§",
    "ðŪ",
    "ðŊ",
    "ðŦ",
    "ðĨ",
    "ðĨ",
    "ðŦ",
    "ðĨŦ",
    "ð",
  ];
  #randomCards = [];
  #gridSize = 16;
  MAX_TEMP_CARD_FLIPPED = 2;

  constructor(props) {
    super(props);
    this.state = {
      numOfTemporaryCardsFlipped: 0,
      canFlip: true,
      flippedEmojis: []
    };
    for (let i = 0; i < this.#gridSize / 2; i++) {
      const randomEmoji = this.getRandomEmoji();
      this.#randomCards.push(randomEmoji);
      this.#randomCards.push(randomEmoji);
    }
    this.shuffleEmojis();
  }

  getRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * this.#emojis.length);
    const randomEmoji = this.#emojis[randomIndex];
    this.#emojis.splice(randomIndex, 1);
    return randomEmoji;
  }

  shuffleEmojis() {
    for (let i = 0; i < this.#randomCards.length; i++) {
      const newIndex = Math.floor(Math.random() * this.#randomCards.length);
      const currentEmojie = this.#randomCards[i];
      this.#randomCards[i] = this.#randomCards[newIndex];
      this.#randomCards[newIndex] = currentEmojie;
    }
  }

  canFlipCard() {
    return (
      this.state.numOfTemporaryCardsFlipped + 1 < this.MAX_TEMP_CARD_FLIPPED
    );
  }

  addFlippedCard(emoji) {
    const flippedEmojis = this.state.flippedEmojis;
    flippedEmojis.push(emoji);
    this.setState({
      numOfTemporaryCardsFlipped: this.state.numOfTemporaryCardsFlipped + 1,
      canFlip: this.canFlipCard(),
      flippedEmojis: flippedEmojis
    });
  }

  render() {
    return (
      <div className="board">
        {this.#randomCards.map((emoji, index) => (
          <Card
            key={index}
            emoji={emoji}
            canFlip={this.state.canFlip}
            addFlippedCard={(emoji) => this.addFlippedCard(emoji)}
          />
        ))}
      </div>
    );
  }
}

export default Board;
