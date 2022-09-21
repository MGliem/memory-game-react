import React from "react";
import Card from "../card/Card";
import "./Board.css";

class Board extends React.Component {
  #emojis = [
    "🍏",
    "🍎",
    "🍐",
    "🍊",
    "🍋",
    "🍌",
    "🍉",
    "🍇",
    "🍓",
    "🫐",
    "🍈",
    "🍒",
    "🍑",
    "🥭",
    "🍍",
    "🥥",
    "🥝",
    "🍅",
    "🍆",
    "🥑",
    "🥦",
    "🥬",
    "🥒",
    "🌶",
    "🫑",
    "🌽",
    "🥕",
    "🫒",
    "🧄",
    "🧅",
    "🥔",
    "🍠",
    "🥐",
    "🥯",
    "🍞",
    "🥖",
    "🥨",
    "🧀",
    "🥚",
    "🍳",
    "🧈",
    "🥞",
    "🧇",
    "🥓",
    "🥩",
    "🍗",
    "🍖",
    "🦴",
    "🌭",
    "🍔",
    "🍟",
    "🍕",
    "🫓",
    "🥪",
    "🥙",
    "🧆",
    "🌮",
    "🌯",
    "🫔",
    "🥗",
    "🥘",
    "🫕",
    "🥫",
    "🍝",
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
