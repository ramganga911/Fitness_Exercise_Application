import React from 'react';
import { Box, Stack, Typography, Link } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <Box mt="60px" bgcolor="#FFF3F4" py="20px">
    <Stack direction="column" spacing="40px" sx={{ alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', px: '40px' }}>
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">xaesthetic.ram</Typography>
    </Stack>
    <Typography variant="body2" color="textSecondary" align="center" mt="20px">
      I'm on the journey to build my best physique.
    </Typography>
    <Typography variant="body2" color="textSecondary" align="center" mt="20px">
      Follow us on:
    </Typography>
    <Stack direction="row" spacing="20px" sx={{ justifyContent: 'center', mt: '20px' }}>
      <Link href="https://www.instagram.com/xaesthetic.ram/" target="_blank" rel="noopener">
        
        <FontAwesomeIcon icon={faInstagram} style={{color:"#e40c0c", width: '24px', height: '24px' }} />
      </Link>
      <Link href="https://www.linkedin.com/in/ramganga-kumar-a01752321/" target="_blank" rel="noopener">
        
        <FontAwesomeIcon icon={faLinkedin} style={{width: '24px', height: '24px' }} />
      </Link>
    </Stack>
    <Typography variant="h6" sx={{ fontSize: { lg: '20px', xs: '16px' } }} mt="20px" textAlign="center">
      &copy; {new Date().getFullYear()} Ramganga Kumar. All Rights Reserved.
    </Typography>
    <Typography variant="body2" color="textSecondary" align="center" mt="10px">
      Made with ❤️ by Ramganga Kumar
    </Typography>
  </Box>
);

export default Footer;



