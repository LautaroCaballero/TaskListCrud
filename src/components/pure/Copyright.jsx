import React from 'react';
import { Link } from '@mui/material';
import Typography from '@mui/material/Typography';

const Copyright = () => {
    return (
        <Typography variant="body2" color="GrayText" align="center">
            { 'Copyright (C)' }
            <Link color="inherit" href="https://google.com">
                Imaginary Company
            </Link>
            { ' ' }
            { new Date().getFullYear() }
        </Typography>
    );
}

export default Copyright;
