import React from "react";
import './FrontCard.css';

class FrontCard extends React.Component {
    render() {
        return (
            <div className="front-card">
                {this.props.emoji}
            </div>
        );
    }
}

export default FrontCard;