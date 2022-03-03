import { Box } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import React from 'react';
import Footer from '../Footer/Footer';
import HTMLHead from './HTMLHead';

const LiveChat = dynamic(() => import('./LiveChat'), { ssr: false });
const Header = dynamic(() => import('../Header/Header'), { ssr: false });

type WrapperProps = {
  maxW?: string;
  children?: React.ReactNode;
};

const Wrapper: React.FC<WrapperProps> = ({
  children,
  maxW = '100vw'
}: WrapperProps) => {
  return (
    <>
      <HTMLHead />

      <LiveChat />

      <Box position="sticky" top="0" zIndex={100}>
        <Header />
      </Box>
      <Box minH="70vh" maxW={maxW} w="100%">
        {children}
      </Box>

      <Footer />
    </>
  );
};

export default Wrapper;