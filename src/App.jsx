import Die from "./Die.jsx";
import React from "react";
import {nanoid} from "nanoid"

export default function App() {

    const [dice, setDice] = React.useState(generateAllNewDice)

    // hold function
    function hold(id) {
        setDice(prevState => {
            return prevState.map((diceObject) => {
                if (diceObject.id === id) {
                    return {...diceObject, isHeld: !diceObject.isHeld}
                }
                return diceObject
            })
        })
    }

    function generateAllNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push({value: Math.ceil(Math.random() * 6), isHeld: false, id: nanoid()})
        }
        return newDice
    }

    // reroll dice
    function rollDice() {
        setDice(generateAllNewDice())
    }

    // map over each dice and create Die component
    const diceElements = dice.map(object => {
        return <Die key={object.id}
                    value={object.value}
                    isHeld={object.isHeld}
                    hold={()=> hold(object.id)}/>
    })

    return <main>
        <div className="app">
            {diceElements}
        </div>
        <button className="roll-dice" onClick={rollDice}>Roll</button>
    </main>
}