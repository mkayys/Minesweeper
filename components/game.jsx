import React from 'react';
import * as Minesweeper from '../minesweeper';
import Board from './board';

class Game extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            board: new Minesweeper.Board(5, 5)
        }

        this.updateGame = this.updateGame.bind(this);
    }

    updateGame() {

    }

    render() {
        return (
            <div className='game-container'>
                <Board board={this.state.board} updateGame={this.updateGame} />
            </div>
        )
    }

}

export default Game;