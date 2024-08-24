import { Grid, Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import SnakeGame from './SnakeGame';

const GameBoard = () => {
  const [points, setPoints] = useState(0);
  return (
    <Box
      sx={{
        overflow: 'hidden',
        position: 'relative',

        width: '100%',
        p: '40px 40px',
      }}
    >
      <img
        src="Green-lg.png"
        alt=""
        style={{ position: 'absolute', bottom: 0, right: '200px' }}
      />
      <Box
        sx={{
          border: '1px solid #0C1616',
          borderRadius: '8px',
          background:
            'linear-gradient(150.26deg, rgba(23, 85, 83, 0.7) 1.7%, rgba(67, 217, 173, 0.091) 81.82%);',
          boxShadow: 'inset 0px 2px 0px rgba(255, 255, 255, 0.3)',
          p: '20px',
        }}
      >
        <Grid container>
          <Grid xs={12} lg={8}>
            <SnakeGame points={points} setPoints={setPoints} />
          </Grid>
          <Grid xs={12} lg={4}>
            <Box sx={{}}>
              <img src="arrows.png" alt="" />
              <Box sx={{ color: '#fff' }}>
                <Typography variant="body1">Score</Typography>
                <Typography variant="body1">{points}</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default GameBoard;
