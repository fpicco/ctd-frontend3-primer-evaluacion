import React from 'react'

const PlayAgain = ({ handleClick }) => {

    return (
        <div className='gameOverContainer'>
            <h3 className='gameOver'> Game over!</h3>
            <div className="opcion">
                <button id="playAgain" className="button" onClick={handleClick}>
                    Empezar de nuevo
                </button>
            </div>
        </div>
    )
}

export default PlayAgain