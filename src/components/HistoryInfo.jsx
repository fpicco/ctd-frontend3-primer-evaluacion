import React from 'react'

const HistoryInfo = ({ lastOptionSelected, history }) => {
    return (
        <div className="historyContainer">
            <h3>Selección anterior: {lastOptionSelected.toUpperCase()}</h3>
            <div className='historyListContainer'>
            <h4>Historial de opciones elegidas: </h4>
            <ul className='historyList'>{history.slice(0, -1)}</ul>
            </div>
        </div>
    )
}

export default HistoryInfo