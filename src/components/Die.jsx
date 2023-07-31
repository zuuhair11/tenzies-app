function Die({ die, handleHoldDice }) {
    return (
        <div 
            className='die-face' 
            style={{
                backgroundColor: die.isHeld === true && '#59E391'
            }}
            onClick={ () => handleHoldDice(die.id) }
        >
            <h2 className='die-num'>{ die.value }</h2>
        </div>
    );
}


export default Die ;
