import { Locales } from '@/i18n/config';
import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Banner: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <Box
      minH={{ base: '600px', md: '500px' }}
      backgroundImage="url('../assets/images/banner.png')"
      bgPosition="top center"
      bgSize="cover"
    >
      <Flex
        height="inherit"
        minH={{ base: '600px', md: '500px' }}
        direction="column"
        justify="center"
        align="center"
      >
        {/* Banner */}
        <Stack
          textAlign={'left'}
          spacing={3}
          p={2}
          width={{ base: '80vw', xl: '60vw' }}
        >
          <Text
            fontWeight="700"
            fontSize={{ base: '28px', md: '40px' }}
            color="white"
          >
            {'diversifiedProducts'}
          </Text>
          <Text
            fontWeight="700"
            fontSize={{ base: '28px', md: '40px' }}
            color="white"
          >
            {'strongAdvantages'}
          </Text>
          <Text fontSize={{ base: '20px', md: '24px' }} color="white">
            {'highLiquidity'}
          </Text>
          <Text fontSize={{ base: '20px', md: '24px' }} color="white">
            {'safetyOfFunds'}
          </Text>
        </Stack>

        {/* Button under Banner */}
        <NextLink passHref={true} href="/products" locale={currentLang}>
          <Box
            my={{ base: 10, md: 2 }}
            p={2}
            minH="48px"
            minW="200px"
            border="2px"
            borderColor="gray.100"
            bgColor="transparent"
            color="gray.100"
            textAlign="center"
            fontSize={{ base: '20px', md: '22px' }}
            _hover={{
              bgColor: 'gray.100',
              color: 'gray.700',
              cursor: 'pointer',
              transition: '1s'
            }}
          >
            {'askProductsNow'}
          </Box>
        </NextLink>
      </Flex>
    </Box>
  );
};

export default Banner;