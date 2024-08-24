import React from 'react';
import { Box, Typography } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from 'framer-motion';

const CodeSnippets = () => {
  const variants = {
    hidden: {
      x: 300,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        ease: 'linear',
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
        <Typography variant="body1">code-snippet-showcase</Typography>
      </Box>
      <Box
        sx={{ p: '20px', overflowY: { lg: 'auto' }, height: { lg: '430px' } }}
      >
        <Box
          sx={{
            background: '#011221',
            border: '1px solid #1E2D3D',
            borderRadius: '8px',
          }}
        >
          <Typography variant="body1" sx={{ color: '#607B96' }}>
            <SyntaxHighlighter
              language="javascript"
              style={a11yDark}
              wrapLongLines="true"
              customStyle={{ background: 'none' }}
            >
              {`const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      //1. Is the Item already in the cart?
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      //Fist time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };`}
            </SyntaxHighlighter>
          </Typography>
        </Box>
        <Box
          sx={{
            background: '#011221',
            border: '1px solid #1E2D3D',
            borderRadius: '8px',
            mt: '20px',
          }}
        >
          <Typography variant="body1" sx={{ color: '#607B96' }}>
            <SyntaxHighlighter
              language="javascript"
              style={a11yDark}
              wrapLongLines="true"
              customStyle={{ background: 'none' }}
            >
              {`
function handleNameFilter(e) {
  e.preventDefault();
  let target = e.target.value;
            
  if (target !== '') {
    setFilteredOrders(orders.filter((x) => x.productName.includes(target)));
    return;
  }        
   setFilteredOrders(orders);}
              
              `}
            </SyntaxHighlighter>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CodeSnippets;
