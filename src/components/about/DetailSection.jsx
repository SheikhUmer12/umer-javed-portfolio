import React from 'react';
import { Box, Typography } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { motion } from 'framer-motion';
const DetailSection = ({ selected }) => {
  const variants = {
    hidden: {
      y: 300,
    },
    visible: {
      y: 0,
      transition: {
        type: 'spring',
      },
    },
  };
  return (
    <Box
      component={motion.div}
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: '#fff',
          borderBottom: '1px solid #1E2D3D',
          p: '10px 2px',
        }}
      >
        <ArrowRightIcon />
        <Typography variant="body1">{selected.name}</Typography>
      </Box>

      {selected.id === 0 || selected.id === 2 ? (
        <Box
          sx={{
            p: '20px',
            textAlign: 'justify',
          }}
        >
          <Typography variant="body1" sx={{ color: '#607B96' }}>
            {selected.detail}
          </Typography>
        </Box>
      ) : (
        <Box sx={{ p: '20px' }}>
          <Box sx={{ color: '#607B96', mb: '20px' }}>
            <Typography variant="bod1">
              I work with these tecnologies to build great websites and I always
              learning new technologies to give best results to my clients
            </Typography>
          </Box>
          {selected.detail.map((item) => (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                mb: '10px',
                color: '#607B96',
                '&:hover': {
                  color: '#FEA55F',
                  cursor: 'pointer',
                },
              }}
            >
              <img
                src={item.icon}
                alt={`${item.name}-icon`}
                style={{ width: '30px' }}
              />
              <Typography variant="body1">{item.name}</Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default DetailSection;
