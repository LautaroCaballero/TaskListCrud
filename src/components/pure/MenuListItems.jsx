import {List, ListItem, ListItemIcon, ListItemText} from '@mui/material'
import {Home, Settings} from '@mui/icons-material'
import React from 'react';
import { useNavigate } from 'react-router-dom';

const getIcon = () => {
    switch (icon) {
        case 'HOME':
            return (<Home />)   
        case 'TASKS':
            return (<Home />)
        case 'SETTINS':
            return (<Settings />)    
        default:
            return (<Home />)  
    }
}

const MenuListItems = ({list}) => {
    const navigate = useNavigate()
    return(
        <List>
            {list.map(({text,path,icon},index) =>
                (
                    <ListItem key={index} button onClick={() => navigate(path)}>
                        <ListItemIcon>
                            {getIcon(icon)}
                            <ListItemText primary={text}/>
                        </ListItemIcon>
                    </ListItem>
                )
            )}
        </List>
    )
}

export default MenuListItems;