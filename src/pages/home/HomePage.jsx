import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'


const HomePage = () => {

    const location = useLocation();
    const navigate = useNavigate();
    console.log('we are in route: ', location.pathname);

    return (
        <div>
            <h1>Home page</h1>
            <div>
                <button onClick={() => navigate('/profile')}>
                    Go to profile
                </button>
            </div>
        </div> 
    );
}

export default HomePage;
