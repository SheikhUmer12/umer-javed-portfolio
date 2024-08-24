import React from 'react';

import Drawer from '@mui/material/Drawer';
import { Box, List, ListItem } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

export default function SideDrawer({ toggleDrawer, drawerOpen }) {
  let location = useLocation();
  const navItems = [
    {
      id: 1,
      name: '_hello',
      link: '/',
    },
    {
      id: 2,
      name: '_about-me',
      link: '/about',
    },
    {
      id: 3,
      name: '_projects',
      link: '/projects',
    },
    {
      id: 4,
      name: '_contact-me',
      link: '/contact',
    },
  ];
  return (
    // <ThemeProvider theme={darkTheme}>
    <Box>
      <Drawer
        anchor={'right'}
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ backgroundImage: 'none' }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            p: '60px 40px',
          }}
        >
          <List>
            {navItems.map((item) => (
              <Link to={item.link} key={item.id} onClick={toggleDrawer(false)}>
                <ListItem
                  sx={{
                    borderBottom:
                      location.pathname === item.link
                        ? '2px solid #FEA55F'
                        : '1px solid #1E2D3D',
                    color: location.pathname === item.link && '#fff',
                  }}
                >
                  {item.name}
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
    // </ThemeProvider>
  );
}
