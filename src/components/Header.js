import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = ({ username }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ fontWeight: 'bold', textAlign: 'center', width: '100%' }}     component="div" sx={{ flexGrow: 1 }}>
                    CONTACT EMAIL
                </Typography>
               
            </Toolbar>
        </AppBar>
    );
}

export default Header;
