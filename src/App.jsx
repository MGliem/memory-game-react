import React from 'react';
import Board from './components/board/Board';
import './App.css';

class App extends React.Component {
  render() {
    return (
    <div className="game">
      <Board />
    </div>
    );
  }
}

export default App;
