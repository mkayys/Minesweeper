import React from 'react';
import * as Minesweeper from '../minesweeper';

class Board extends React.Component {
    constructor(props){
        super(props);
    }

    render() {

        let grid = this.props.board.grid.map((row, i) => {
            return (
                <div key={i} className='row-container'>{row.map((tile, i2) => {
                    return (
                        <Tile key={i2} tile={tile} updateGame={this.props.updateGame} />
                    )
                })}</div>
            )
        })

        return(
            <div className='board-container'>

            </div>
        )
    }
}

export default Board;