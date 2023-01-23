import React, {useState} from 'react';

const loggedStyle = {
    color: 'blue'
}

const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {

    const [logged, setlogged] = useState(false);
    const greetingUser = (<p>Hola, {props.name}</p>);
    const pleaseLogin = (<p>Please Login</p>);

    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
            {logged ? greetingUser : pleaseLogin}
            
            <button onClick={() => {
                console.log('Pulsado');
                setlogged(!logged);
            }}>
                { logged ? 'Logout' : 'Login' }
            </button>
        </div>
    );
}

export default GreetingStyled;
