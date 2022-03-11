import { Flex } from '@chakra-ui/react';
import React from 'react';

type AdContainerProps = {
  imageSrc: string;
  children?: React.ReactNode;
};

const AdContainer: React.FC<AdContainerProps> = ({
  imageSrc,
  children
}: AdContainerProps) => {
  return (
    <Flex
      minH={{ base: '630px', md: '555px' }}
      bg="#041C27"
      backgroundImage={{
        base: 'none',
        md: `url(${imageSrc})`
      }}
      bgPosition="top center"
      bgSize="cover"
      justify="center"
      align="center"
      color="white"
    >
      {children}
    </Flex>
  );
};

export default AdContainer;
