import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from '../assets/variedadesluz.png';
import { ShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/material';

export default function Navbar() {
  return (
    <div >
      <AppBar position="fixed" sx={{ backgroundColor: "#000000", height: 70 }}>
        <Toolbar>
          <IconButton edge="start" >
            <img src={logo} alt="Nevit" className="logo" />
          </IconButton>
          <div className="search" />
          <div>
            <Typography variant="h5" component="p" sx={{ fontSize: 14,marginLeft:10,padding:3 }} >
              Hello Guest
            </Typography>
          </div>
          <div>
            <Button variant='outlined'>
              <h5 className='font-titles'>Iniciar sesión</h5>
            </Button>
            <IconButton aria-label="show cart items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart fontSize='large' color='primary' />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
