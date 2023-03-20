import * as React from 'react';
import {AppBar, Box, Toolbar, Typography, TextField  } from '@mui/material';



export default function SearchAppBar() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static"
                sx={{
                  borderRadius: '15px'
                }}>
          <Toolbar>
            <Typography
              padding={'10px'}
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
            Рабочее пространство
            </Typography>
                <TextField 
                  size='small'
                  variant="outlined"
                  type='search'
                  label='Search...'/>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }