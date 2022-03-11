import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import AdContainer from './AdContainer';

const AD5: React.FC<{}> = () => {
  return (
    <AdContainer imageSrc="../assets/images/home_ad_05.jpg">
      <Flex>
        <Box>AD5</Box>
        <Box>---</Box>
      </Flex>
    </AdContainer>
  );
};

export default AD5;
