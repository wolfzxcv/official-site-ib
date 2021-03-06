import { Locales } from '@/i18n/config';
import { WCG6DLContent, WCG6DLSummary } from '@/pages/activity/WCG6DL';
import { Box, Flex } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const WCG6DL: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <NextLink passHref={true} href="/activity/WCG6DL" locale={currentLang}>
      <Flex
        minH={{ base: '630px', md: '555px' }}
        backgroundImage={{
          base: "url('../assets/images/activity_WCG6DL_M.jpg')",
          md: "url('../assets/images/activity_WCG6DL_banner.jpg')"
        }}
        bgPosition={{ base: 'top center', md: 'top right' }}
        bgSize="cover"
        _hover={{
          cursor: 'pointer'
        }}
        flexDir="column"
        justify="flex-start"
        align="center"
      >
        <Box
          mt="185px"
          width="300px"
          color="white"
          display={{ base: 'block', md: 'none' }}
        >
          <WCG6DLSummary />
        </Box>

        <Box
          mt={10}
          px={1}
          width="90vw"
          fontSize="8px"
          bg="white"
          display={{ base: 'block', md: 'none' }}
        >
          <WCG6DLContent />
        </Box>
      </Flex>
    </NextLink>
  );
};

export default WCG6DL;
