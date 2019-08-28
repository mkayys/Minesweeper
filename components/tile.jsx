import React from 'react';

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