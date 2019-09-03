import React from 'react';

export default function Square(props) {
  return (
    <button
      className={props.winner}
      onClick={props.onClick}>
      {props.value}
    </button>
  );
}
