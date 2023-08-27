import { nanoid } from 'nanoid' ;
import { useEffect, useState } from 'react' ;
import { useWindowSize } from 'react-use' ;
import Confetti from 'react-confetti' ;
import Die from './components/Die' ;


function App() {
    const [dice, setDice] = useState( () => allNewDice() );
    const [tenzies, setTenzies] = useState(false);

    const {width, height} = useWindowSize();
    // "width" and "height" props are recommended. 
    // They will default to the initial window dimensions, 
    // but will not respond to resize events. 
    // It is recommended to provide the dimensions yourself

    // Generate a dice between 1 - 6
    function generateNewDie() {
        return {
            value: Math.floor(Math.random() * 6) + 1, 
            isHeld: false, 
            id: nanoid()
        }
    }

    // Set all dice
    function allNewDice() {
        const newDice = [];
        for(let i = 0; i < 10; i++) {
            newDice.push(generateNewDie());
        }

        return newDice;
    }

    function rollDice() {
        if(!tenzies) {
            setDice( prevDice => {
                return prevDice.map( dice => {
                    return dice.isHeld ? dice : generateNewDie();
                });
            });
            
        } else {
            setTenzies(false);
            setDice(allNewDice());
        }
    }

    function holdDice(id) {
        setDice( prevDice => {
            return prevDice.map( dice => {
                if(dice.id === id) {
                    return {
                        ...dice,
                        isHeld: !dice.isHeld
                    }
                } else {
                    return dice;
                }
            });
        });
    }

    useEffect( () => {
        // Checking if all dice are held
        const allHeld = dice.every( die => die.isHeld);

        // If so, then check if all dice they match all the same value
        if(allHeld === true) {
            const firstValue = dice[0].value;
            const allSameValue = dice.every( die => die.value === firstValue );
            
            allSameValue && setTenzies(true);
        }

    }, [dice]);

    const diceElements = dice.map( die => {
        return (
            <Die 
                key={ die.id } 
                die={ die } 
                handleHoldDice={ holdDice } 
            />
        );
    });


    return (
        <main>
            { tenzies && <Confetti width={ width } height={ height } /> }
            <h1 className='title'>Tenzies</h1>
            <p className='instruction'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

            <div className='dice-container'>
                { diceElements }
            </div>

            <button 
                className='btn-roll-dice'
                onClick={ rollDice }
            >
                { tenzies ? 'New Game' : 'Roll' }
            </button>
        </main>
    );
}


export default App ;
