import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';

export const DazeIconMenu = ({ icon, title, shotcut, onClick }) => {
  return (
    <MenuList sx={{ m: 0, p: 0, pt: 1, pb: 1 }} >
      <MenuItem onClick={onClick} >
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText> {title} </ListItemText>
        <Typography variant="body2" color="text.secondary">
          {shotcut}
        </Typography>
      </MenuItem>


    </MenuList>
  );
}