import { Box } from '@chakra-ui/react';
import React from 'react';
import FooterBottom from './FooterBottom';
import { FooterTop } from './FooterTop';

const footerBg = '#0d242e';
const footerFont = '#666e73';

const Footer: React.FC<{}> = () => {
  return (
    <Box
      as="footer"
      bg={footerBg}
      color={footerFont}
      pt={{ base: 0, md: '100px' }}
      fontSize={{ base: '10px', md: '12px' }}
    >
      <FooterTop borderColor={footerFont} />

      <FooterBottom />
    </Box>
  );
};

export default Footer;
