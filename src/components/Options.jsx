import React from 'react'

const Options = ({handleClick, optionA, optionB}) => {
  return (
    <div className="optionsContainer">
    <div className="option">
      <button id="a" className="button" onClick={handleClick}>
        A
      </button>
      <h2>{optionA}</h2>
    </div>
    <div className="option">
      <button id="b" className="button" onClick={handleClick}>
        B
      </button>
      <h2>{optionB}</h2>
    </div>
  </div>
  )
}

export default Options