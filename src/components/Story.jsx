import React, { Component } from 'react'
import { HistoryInfo, PlayAgain, Options } from '.';
import data from "./data.json"


// Transform array of objects to an object
const newData = data.reduce((obj, item) => ({ ...obj, [item.id]: item }), {});

class Story extends Component {
    constructor() {
        super();
        this.state = {
            history: [],
            counter: 1,
            lastOptionSelected: '',
            positionId: "1",
            isOver: false
        }
    }

    componentDidUpdate(_, prevState) {
        if (prevState.counter !== this.state.counter) {
            if (this.state.lastOptionSelected !== "") {
                this.setState({ history: [...this.state.history, this.state.lastOptionSelected] })
            }
        }
    }
    handleClick = (e) => {
        const id = e.target.id;
        if (this.state.counter < 6) {
            this.setState({
                counter: this.state.counter + 1,
                lastOptionSelected: id,
                positionId: `${this.state.counter + 1}${id}`,
                isOver: (this.state.counter + 1) === 6
            })
        }
        if (id === "playAgain") {
            this.setState({
                history: [],
                counter: 1,
                lastOptionSelected: '',
                positionId: "1",
                isOver: false
            });
        }
    };

    historyList = () => {
        this.state.history.map(
            (element, index) => (
                <li key={index}>{element.toUpperCase()}</li>
            ),
            this.state.positionId
        )
    }


    render() {
        return (
            <div className='layout'>
                {!this.state.isOver
                    ? <h1 className="story">{newData[this.state.positionId]?.historia}</h1>
                    : <PlayAgain handleClick={this.handleClick} />
                }

                {!this.state.isOver &&
                    <Options
                        handleClick={this.handleClick}
                        optionA={newData[this.state.positionId].opciones.a}
                        optionB={newData[this.state.positionId].opciones.b}
                    />
                }
                <HistoryInfo
                    lastOptionSelected={this.state.lastOptionSelected}
                    history={this.state.history.map(
                        (element, index) => (
                            <li key={index}>{element.toUpperCase()}</li>
                        ),
                        this.state.positionId
                    )}
                />
            </div>
        )
    }
}
export default Story