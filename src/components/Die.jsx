function Die({ die, handleHoldDice }) {
    return (
        <div 
            className='die-face' 
            style={{
                backgroundColor: die.isHeld === true && '#59E391',
                border: die.isHeld === true && '1px dotted gray '
            }}
            onClick={ () => handleHoldDice(die.id) }
        >
            <img src={`../../assets/dice-${die.value}.png`} alt='' />
        </div>
    );
}


export default Die ;
