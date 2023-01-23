import React, { useRef } from 'react';

const Child = ({ name, send, update }) => {

    const messageRef = useRef('')
    const nameRef = useRef('')

    function pressButton(){
        const text = messageRef.current.value
        alert(`Text: ${text}`);
    }

    function pressButtomParams(text) {
        alert(`Text: ${text}`);
    }

    function submitName(e) {
        e.preventDefault()
        update(nameRef.current.value)
    }

    return (
        <div>
            <div style={{backgroundColor: 'cyan', padding:'30px'}}>
                <p onMouseOver={() => console.log('On mouse over')}>Hello, {name}</p>
                <button onClick={() => console.log('Boton 1 pulsado')}>Boton 1</button>
                <button onClick={pressButton}>Boton 2</button>
                <button  onClick={() => pressButtomParams('Hola')}>Boton 3</button>
                <input  ref={messageRef} placeholder='Insert a text' onFocus={() => console.log('Input focus')} onChange={(e)=>console.log(e.target.value)}/>
                <button onClick={() => send(messageRef.current.value)}>Send message</button>
            </div>
            <div style={{marginTop:'20px'}}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='Name'/>
                    <button type='submit'>Update Name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
