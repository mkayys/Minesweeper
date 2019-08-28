import React from 'react';
import * as Minesweeper from '../minesweeper';

class Tile extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const { tile } = this.props;
        let text;
        let klass;
        if (tile.bombed) {
            text = "💣";
            klass = "bombed";
        } else if (tile.explored) {
            text = tile.adjacentBombCount().toString();
            klass = "explored";
        } else if (tile.flagged) {
            text = "🏁";
            klass = "flagged";
        };

        

        return(
            <div className='tile-container'>
                <span>{text}</span>
            </div>
        )
    }
}

export default Tile;