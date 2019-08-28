import React from 'react';
import * as Minesweeper from '../minesweeper';

class Tile extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='tile-container'>
                <span>T</span>
            </div>
        )
    }
}

export default Tile;