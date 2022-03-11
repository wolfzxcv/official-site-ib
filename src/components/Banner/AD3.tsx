import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import AdContainer from './AdContainer';

const AD3: React.FC<{}> = () => {
  return (
    <AdContainer imageSrc="../assets/images/home_ad_03.jpg">
      <Flex>
        <Box>AD3</Box>
        <Box>---</Box>
      </Flex>
    </AdContainer>
  );
};

export default AD3;
