import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import AdContainer from './AdContainer';

const AD2: React.FC<{}> = () => {
  return (
    <AdContainer imageSrc="../assets/images/home_ad_02.jpg">
      <Flex>
        <Box>AD2</Box>
        <Box>---</Box>
      </Flex>
    </AdContainer>
  );
};

export default AD2;
