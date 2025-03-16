import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const navItems = ['Login', 'SignUp'];

function Header() {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{ backgroundColor:'#000'}} >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', marginTop:"5px" } }}
          >
          <Link to='/'>
            <img src="https://upskillmafia.com/assets/logo-B7q2Hb2A.svg"  />
           </Link>
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          <Link to='/home' style={{ textDecoration: "none", color: "white" }} > 
            Home
          </Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Link to={ (item == 'Login') ? '/log-in'  : '/register'}>
                <Button key={item} sx={{ color: '#fff', backgroundColor:"#009933", margin:"5px" }}>
                        {item}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
