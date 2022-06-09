import { links } from '@/assets/links';
import { Box, Flex, Image, Link } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';
import AdContainer from './AdContainer';

const AD1: React.FC<{}> = () => {
  const { t } = useTranslation('common');

  const title = t('InstantRebatePayment');

  return (
    <AdContainer imageSrc="../assets/images/home_ad_01.jpg">
      <Flex flexDir="column" width="100%" align="center" justify="center">
        <Flex
          flexDir="column"
          align={{ base: 'center', md: 'start' }}
          mr={{ base: 0, md: '300px', xl: '700px' }}
          mt={{ base: 0, md: 10 }}
          mb={{ base: '100px', md: '100px' }}
        >
          <Box
            fontSize={{ base: title.length > 25 ? '16px' : '24px', md: '36px' }}
            mb={10}
            fontWeight={700}
            width="100%"
            textAlign={{ base: 'center', md: 'left' }}
          >
            {title}
          </Box>

          <Box width={{ base: '80%', md: '434px' }}>
            {t('WCGMarketsFullyAutomated')}
          </Box>
        </Flex>

        <Flex flexDir="column">
          <Box>{t('DownloadApp')}</Box>

          <Flex>
            <Box mr={5}>
              <Link
                _hover={{
                  opacity: 0.5,
                  transition: '1s',
                  borderRadius: '10px'
                }}
                mx={1}
                href={links.mt4Android}
                isExternal
              >
                <Image
                  width="142px"
                  height="42px"
                  src="../assets/images/banner_google_play.jpg"
                  alt="Google Play"
                />
              </Link>
            </Box>

            <Box mr={5}>
              <Link
                _hover={{
                  opacity: 0.5,
                  transition: '1s',
                  borderRadius: '10px'
                }}
                mx={1}
                href={links.mt4IOS}
                isExternal
              >
                <Image
                  width="142px"
                  height="42px"
                  src="../assets/images/banner_apple_store.jpg"
                  alt="Apple Store"
                />
              </Link>
            </Box>

            <Box>
              <Link
                _hover={{
                  opacity: 0.5,
                  transition: '1s',
                  borderRadius: '10px'
                }}
                mx={1}
                href={links.mt4HuaweiApk}
                isExternal
              >
                <Image
                  width="142px"
                  height="42px"
                  src="../assets/images/banner_app_gallery.jpg"
                  alt="App Gallery"
                />
              </Link>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </AdContainer>
  );
};

export default AD1;
