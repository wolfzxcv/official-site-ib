import { Locales } from '@/i18n/config';
import { Box, Flex, Image, Stack } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React from 'react';

const RedBlock: React.FC<{}> = () => {
  const { t } = useTranslation('common');

  const router = useRouter();
  const currentLang = router.locale as Locales;
  return (
    <Flex
      bg="#b81c22"
      justify="center"
      align="center"
      color="white"
      py={{ base: 10, md: '50px' }}
    >
      <Flex
        width="90vw"
        maxW="1100px"
        wrap="wrap-reverse"
        justify="space-between"
      >
        <Flex
          flexDir="column"
          width={{ base: '100%', md: '50%' }}
          justify={{ base: 'auto', md: 'center' }}
          my={{ base: 10, md: 0 }}
        >
          <Box
            fontSize={{ base: '24px', md: '36px' }}
            fontWeight="700"
            pb={{ base: 5, md: 10 }}
            textAlign={'left'}
          >
            {t('TheWorldsTop')}
          </Box>

          <Box pb={5}>{t('YouWilHave')}</Box>

          <Stack spacing={1} pb={{ base: 5, md: 10 }}>
            <Flex align="center">
              <Tick />
              <Box>{t('PartnerWithTop')}</Box>
            </Flex>

            <Flex align="center">
              <Tick />
              <Box>{t('PoweredByWCGMarkets')}</Box>
            </Flex>

            <Flex align="center">
              <Tick />
              <Box>{t('ProvidesStateOfTheArt')}</Box>
            </Flex>
          </Stack>

          <Box>{t('WeBringYouTheBest')}</Box>
        </Flex>
        <Flex width={{ base: '100%', md: '50%' }} my={{ base: 10, md: 0 }}>
          <Image
            src={`../assets/images/home_red_block_${currentLang}.png`}
            alt="home_red_block_pic"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

const Tick = () => (
  <Image
    mr={2}
    width="25px"
    height="15px"
    src="../assets/images/home_tick.png"
    alt="tick"
  />
);

export default RedBlock;
