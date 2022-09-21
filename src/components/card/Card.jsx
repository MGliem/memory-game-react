import React from 'react';
import FrontCard from '../frontCard/FrontCard';
import BackCard from '../backCard/BackCard';
import './Card.css';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false,
        };
    }

    flipCard(emoji) {
        if (this.props.canFlip) {
            this.props.addFlippedCard(emoji);
            this.setState({ isFlipped: true});
        }
        this.hideCard();
    }

    hideCard() {
        setTimeout(() => {
            this.setState({ isFlipped: false });
        }, '1000');
    }

    render() {
        return (
            <div 
                className={this.state.isFlipped ? 'card rotate': 'card'}
            >
                <FrontCard emoji={this.state.isFlipped && this.props.emoji} />
                <BackCard onClick={() => this.flipCard(this.props.emoji)} />
            </div>
        );
    }
}

export default Card;