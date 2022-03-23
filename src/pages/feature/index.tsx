import Wrapper from '@/components/Base/Wrapper';
import InViewSlideFade from '@/components/Common/InViewSlideFade';
import { Box, Flex, Image } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const feature: React.FC<{}> = () => {
  const { t } = useTranslation('feature');

  return (
    <Wrapper>
      <Flex
        bg="#041C27"
        color="white"
        flexDir="column"
        align="center"
        py={{ base: '50px', md: '150px' }}
      >
        <Flex flexDir="column" align="center">
          <Image
            width={270}
            height={114}
            src="../assets/images/logo.png"
            alt="logo"
          />

          <Box mt="50px" mb="25px" fontSize={{ base: '24px', md: '36px' }}>
            {t('BrokersRegulatedBy')}
          </Box>
          <Box mb="150px">{t('WCGMarketsHolds')}</Box>
        </Flex>

        <InViewSlideFade>
          <Flex
            bgImage="../assets/images/feature_01.png"
            bgSize="cover"
            bgPosition="top center"
            width={{ base: '80vw', md: '1570px' }}
            minH={{ base: '600px', md: '1123px' }}
            borderRadius="30px"
            m={5}
            justify="center"
            align="flex-end"
            color="black"
          >
            <Box
              mb={{ base: 5, md: 10 }}
              px={5}
              width="100%"
              minH={{ base: '110px', md: '130px' }}
              textAlign="center"
            >
              123
            </Box>
          </Flex>
        </InViewSlideFade>

        <InViewSlideFade>
          <Flex
            bgImage="../assets/images/feature_02.png"
            bgSize="cover"
            bgPosition="top left"
            width={{ base: '80vw', md: '1570px' }}
            height={{ base: '600px', md: '863px' }}
            borderRadius="30px"
            m={5}
            justify="center"
            align="flex-end"
          >
            <Box
              mb={{ base: 5, md: 10 }}
              px={5}
              width="100%"
              minH={{ base: '110px', md: '130px' }}
              textAlign="center"
            >
              123
            </Box>
          </Flex>
        </InViewSlideFade>

        <InViewSlideFade>
          <Flex
            bgImage="../assets/images/feature_03.png"
            bgSize="cover"
            bgPosition="top center"
            width={{ base: '80vw', md: '1570px' }}
            height={{ base: '600px', md: '944px' }}
            borderRadius="30px"
            m={5}
            justify="center"
            align="flex-end"
            color="black"
          >
            <Box
              mb={{ base: 5, md: 10 }}
              px={5}
              width="100%"
              minH={{ base: '110px', md: '130px' }}
              textAlign="center"
            >
              123
            </Box>
          </Flex>
        </InViewSlideFade>

        <InViewSlideFade>
          <Flex
            bgImage="../assets/images/feature_04.png"
            bgSize="cover"
            bgPosition="top left"
            width={{ base: '80vw', md: '1570px' }}
            height={{ base: '600px', md: '944px' }}
            borderRadius="30px"
            m={5}
            justify="center"
            align="flex-end"
          >
            <Box
              mb={{ base: 5, md: 10 }}
              px={5}
              width="100%"
              minH={{ base: '110px', md: '130px' }}
              textAlign="center"
            >
              123
            </Box>
          </Flex>
        </InViewSlideFade>

        <InViewSlideFade>
          <Flex
            bgImage="../assets/images/feature_05.png"
            bgSize="cover"
            bgPosition="top center"
            width={{ base: '80vw', md: '1570px' }}
            height={{ base: '600px', md: '963px' }}
            borderRadius="30px"
            m={5}
            justify="center"
            align="flex-end"
            color="black"
          >
            <Box
              mb={{ base: 5, md: 10 }}
              px={5}
              width="100%"
              minH={{ base: '110px', md: '130px' }}
              textAlign="center"
            >
              123
            </Box>
          </Flex>
        </InViewSlideFade>

        <InViewSlideFade>
          <Flex
            bgImage="../assets/images/feature_06.png"
            bgSize="cover"
            bgPosition="top right"
            width={{ base: '80vw', md: '1570px' }}
            height={{ base: '600px', md: '944px' }}
            borderRadius="30px"
            m={5}
            justify="center"
            align="flex-end"
          >
            <Box
              mb={{ base: 5, md: 10 }}
              px={5}
              width="100%"
              minH={{ base: '110px', md: '130px' }}
              textAlign="center"
            >
              123
            </Box>
          </Flex>
        </InViewSlideFade>

        <InViewSlideFade>
          <Flex
            bgImage="../assets/images/feature_07.png"
            bgSize="cover"
            bgPosition="top left"
            width={{ base: '80vw', md: '1570px' }}
            height={{ base: '600px', md: '944px' }}
            borderRadius="30px"
            m={5}
            justify="center"
            align="flex-end"
            color="black"
          >
            <Box
              mb={{ base: 5, md: 10 }}
              px={5}
              width="100%"
              minH={{ base: '110px', md: '130px' }}
              textAlign="center"
            >
              123
            </Box>
          </Flex>
        </InViewSlideFade>
      </Flex>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['header', 'feature', 'footer']))
  }
});

export default feature;
