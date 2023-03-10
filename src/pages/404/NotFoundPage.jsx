import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'


const NotFoundPage = () => {

    const location = useLocation();
    const navigate = useNavigate();
    console.log('we are in route: ', location.pathname);

    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <div>
                <button onClick={() => navigate('/')}>
                    Go to home
                </button>
                <button onClick={ () => navigate(-1) }>
                    Go back
                </button>
            </div>
        </div>
    );
}

export default NotFoundPage;
