import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import AdContainer from './AdContainer';

const AD4: React.FC<{}> = () => {
  return (
    <AdContainer imageSrc="../assets/images/home_ad_04.jpg">
      <Flex>
        <Box>AD4</Box>
        <Box>---</Box>
      </Flex>
    </AdContainer>
  );
};

export default AD4;
