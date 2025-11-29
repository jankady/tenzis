import Die from "./Die.jsx";
import React from "react";

export default function App() {

    const [dice, setDice] = React.useState([])

    React.useEffect(()=>{
        function generateAllNewDice() {
            const newDice = []
            for (let i = 0; i < 10; i++) {
                newDice.push(Math.ceil(Math.random() * 6))
            }
            return newDice
        }
        setDice(generateAllNewDice())
    },[])


    const diceElements = dice.map(value => {
        return <Die value={value} />
    })

    return <main className="app">
        {diceElements}
    </main>
}