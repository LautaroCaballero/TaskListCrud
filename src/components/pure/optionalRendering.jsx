import React, { useState } from 'react';


const LoginButton = ({loginAction, propStyle}) => {
    return(
        <button style={propStyle} onClick={loginAction}>Login</button>
    )
}

const LogoutButton = ({logoutAction, propStyle}) => {
    return(
        <button style={propStyle} onClick={logoutAction}>Logout</button>
    )
}

const loggedStyle = {
    backgroundColor: 'green',
    color: 'white',
    fontWeight: 'bold'
}

const unloggedStyle = {
    color: 'tomato',
    color: 'white',
    fontWeight: 'bold'
}

const OptionalRendering = () => {
    const [access, setAccess] = useState(false);
    const [nMessages, setNMessages] = useState(0);

    let optionalButton;

    const loginAction = () => {
        setAccess(true)
    }

    const logoutAction = () => {
        setAccess(false)
    }

    if(access) {
        optionalButton = <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction}>Logout</LogoutButton>
    }else {
        optionalButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction}>Login</LoginButton>
    }

    let addMessages = () => {
        setNMessages(nMessages + 1)
    }

    return (
        <div>
            { optionalButton }
            {access ? 
            (<div>
                { nMessages > 0 ? 
                <p>You have {nMessages} new message{nMessages > 1 ? 's': null}</p> : 
                <p>There are no new mewssages</p>}

                <button onClick={addMessages}>{nMessages === '0' ? 
                'Add your first message' : 
                'Add new messages'}</button>
            </div>)
            : null}
        </div>
    );
}

export default OptionalRendering;
