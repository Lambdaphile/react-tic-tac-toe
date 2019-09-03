import React from 'react';
import Square from './Square';

export default class Board extends React.Component {
  renderSquare(i) {
    let winner = 'square'
    if (this.props.winner1 === i || this.props.winner2 === i|| this.props.winner3 === i) {
      winner = 'square winner';
    }
    return <Square 
             winner={winner}
             value={this.props.squares[i]}
             onClick={() => this.props.onClick(i)}
           />;
  }

  buildRow(i) {
    const row = [];
    for (let j = i; j < (i + 3); j++) {
      row.push(this.renderSquare(j));
    }
    return row;
  }

  renderBoard() {
    const board = [];
    for (let i = 0; i < 9; i += 3) {
      board.push(<div className="board-row">{this.buildRow(i)}</div>);
    }
    return board;
  }

  render() {
    return (
      <div>
        {this.renderBoard()}
      </div>
    );
  }
}
