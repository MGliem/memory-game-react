import React from "react";
import './BackCard.css';

class BackCard extends React.Component {
    render() {
        return (
            <div 
                className="back-card"
                onClick={this.props.onClick}
            >
            </div>
        );
    }
}

export default BackCard;