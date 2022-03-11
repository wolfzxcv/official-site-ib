import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import AdContainer from './AdContainer';

const AD6: React.FC<{}> = () => {
  return (
    <AdContainer imageSrc="../assets/images/home_ad_06.jpg">
      <Flex>
        <Box>AD6</Box>
        <Box>---</Box>
      </Flex>
    </AdContainer>
  );
};

export default AD6;
