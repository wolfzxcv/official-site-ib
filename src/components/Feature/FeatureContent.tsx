import { Locales } from '@/i18n/config';
import { Parallax, ParallaxProvider } from '@/plugins/react-skrollr';
import { Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React from 'react';

const ParallaxSettingLeft = {
  'data-top-top': 'transform: translateX(-100%);',
  'data-center-center': 'opacity: 1;transform: translateX(0%);',
  'data-bottom-top': 'opacity: 0;'
};

const ParallaxSettingRight = {
  'data-top-top': 'transform: translateX(100%);',
  'data-center-center': 'opacity: 1;transform: translateX(0%);',
  'data-bottom-top': 'opacity: 0;'
};

const FeatureContent: React.FC<{}> = () => {
  const { t } = useTranslation('feature');
  const router = useRouter();
  const currentLang = router.locale as Locales;

  const isChinese = currentLang === 'cn' || currentLang === 'zh';

  return (
    <ParallaxProvider>
      <Flex
        bgImage="../assets/images/feature_01.png"
        bgSize="cover"
        bgPosition="top center"
        width={{ base: '95vw', md: '1570px' }}
        minH={{ base: '400px', md: '1123px' }}
        borderRadius={{ base: '30px 30px 0 0', md: '30px' }}
        mx={5}
        my={{ base: 0, md: 5 }}
        justify="center"
        align="flex-end"
        color="black"
        pt={{ base: '600px', md: 0 }}
      >
        <Flex
          mb={{ base: 5, md: 10 }}
          px={5}
          width="100%"
          minH={{ base: 'auto', md: '300px' }}
          textAlign="center"
          flexDir={{ base: 'column', md: 'row' }}
          justify={{ base: 'auto', md: 'space-around' }}
          fontWeight={600}
        >
          <Flex
            flexDir="column"
            width={{ base: '100%', md: isChinese ? '25%' : '35%' }}
          >
            <Parallax data={ParallaxSettingLeft}>
              <Box
                fontSize={{ base: '24px', md: isChinese ? '36px' : '26px' }}
                mb={3}
              >
                {t('UnlimitedRebates')}
              </Box>
              <Box
                textAlign="left"
                fontSize={{ base: isChinese ? 'auto' : '12px', md: '16px' }}
              >
                {t('WCGMarketsDoesNotSet')}
              </Box>
            </Parallax>
          </Flex>
          <Flex
            flexDir="column"
            display={{ base: 'none', md: 'block' }}
            width={isChinese ? '25%' : '35%'}
            mt={0}
          >
            <Parallax data={ParallaxSettingRight}>
              <Box fontSize={isChinese ? '36px' : '26px'} mb={3}>
                {t('ManagementToolsProvided')}
              </Box>
              <Box textAlign="left">{t('WCGMarketsWillProvide')}</Box>
            </Parallax>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        flexDir="column"
        width="95vw"
        display={{ base: 'flex', md: 'none' }}
        pt={5}
        pb={10}
        bg="white"
        justify="center"
        borderRadius="0 0 30px 30px"
        mx={5}
        px={5}
        color="black"
        fontWeight={600}
        borderTop="1px"
        borderColor="white"
      >
        <Parallax data={ParallaxSettingRight}>
          <Box fontSize="24px" mb={3} width="100%" textAlign="center">
            {t('ManagementToolsProvided')}
          </Box>
          <Box textAlign="left" fontSize={isChinese ? 'auto' : '12px'}>
            {t('WCGMarketsWillProvide')}
          </Box>
        </Parallax>
      </Flex>

      <Flex
        bgImage="../assets/images/feature_02.png"
        bgSize="cover"
        bgPosition="top left"
        width={{ base: '95vw', md: '1570px' }}
        height={{ base: '600px', md: '863px' }}
        borderRadius="30px"
        m={5}
        align={{ base: 'flex-start', md: 'center' }}
        justify={{ base: 'center', md: 'flex-end' }}
        fontWeight={600}
      >
        <Flex
          flexDir="column"
          width={{ base: '90%', md: isChinese ? '25%' : '35%' }}
          mt={{ base: '50px', md: 0 }}
          mr={{ base: 0, md: '100px' }}
        >
          <Parallax data={ParallaxSettingLeft}>
            <Box
              fontSize={{ base: '24px', md: isChinese ? '36px' : '26px' }}
              mb={3}
            >
              {t('FinancialSecurity')}
            </Box>
            <Box textAlign="left">{t('WCGMarketsIsCommitted')}</Box>
          </Parallax>
        </Flex>
      </Flex>

      <Flex
        bgImage="../assets/images/feature_03.png"
        bgSize="cover"
        bgPosition="top center"
        width={{ base: '95vw', md: '1570px' }}
        height={{ base: '800px', md: '944px' }}
        borderRadius="30px"
        m={5}
        justify="center"
        align="flex-end"
        color="black"
      >
        <Flex
          mb={{ base: 5, md: 10 }}
          px={5}
          width="100%"
          minH={{ base: 'auto', md: '300px' }}
          textAlign="center"
          flexDir={{ base: 'column', md: 'row' }}
          justify={{ base: 'auto', md: 'space-around' }}
          fontWeight={600}
        >
          <Flex
            flexDir="column"
            width={{ base: '100%', md: isChinese ? '25%' : '35%' }}
          >
            <Parallax data={ParallaxSettingLeft}>
              <Box
                fontSize={{ base: '24px', md: isChinese ? '36px' : '26px' }}
                mb={3}
              >
                {t('HighStandardRebateProgram')}
              </Box>
              <Box textAlign="left">{t('ProvideHighStandardAgency')}</Box>{' '}
            </Parallax>
          </Flex>

          <Flex
            flexDir="column"
            width={{ base: '100%', md: isChinese ? '25%' : '35%' }}
            mt={{ base: 10, md: 0 }}
          >
            <Parallax data={ParallaxSettingRight}>
              <Box
                fontSize={{ base: '24px', md: isChinese ? '36px' : '26px' }}
                mb={3}
              >
                {t('InstantRebatePayment')}
              </Box>
              <Box textAlign="left">{t('WCGMarketsFullyAutomated')}</Box>{' '}
            </Parallax>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        bgImage="../assets/images/feature_04.png"
        bgSize="cover"
        bgPosition="top left"
        width={{ base: '95vw', md: '1570px' }}
        height={{ base: '600px', md: '944px' }}
        borderRadius="30px"
        m={5}
        justify={{ base: 'center', md: 'flex-start' }}
        ml={{ base: 0, md: 10 }}
        align="center"
      >
        <Flex
          flexDir="column"
          width={{ base: '90%', md: isChinese ? '25%' : '35%' }}
          mt={{ base: '50px', md: 0 }}
          ml={{ base: 0, md: '100px' }}
        >
          <Parallax data={ParallaxSettingLeft}>
            <Box
              fontSize={{ base: '24px', md: isChinese ? '36px' : '26px' }}
              mb={3}
            >
              {t('OneToOneLiveCustomerService')}
            </Box>
            <Box textAlign="left">{t('ProvidePartnersWith')}</Box>{' '}
          </Parallax>
        </Flex>
      </Flex>

      <Flex
        bgImage="../assets/images/feature_05.png"
        bgSize="cover"
        bgPosition="top center"
        width={{ base: '95vw', md: '1570px' }}
        height={{ base: '800px', md: '944px' }}
        borderRadius="30px"
        m={5}
        justify="center"
        align="flex-end"
        color="black"
      >
        <Flex
          mb={{ base: 5, md: 10 }}
          px={5}
          width="100%"
          minH={{ base: 'auto', md: '300px' }}
          textAlign="center"
          flexDir={{ base: 'column', md: 'row' }}
          justify={{ base: 'auto', md: 'space-around' }}
          fontWeight={600}
        >
          <Flex
            flexDir="column"
            width={{ base: '100%', md: isChinese ? '25%' : '35%' }}
          >
            <Parallax data={ParallaxSettingLeft}>
              <Box
                fontSize={{ base: '24px', md: isChinese ? '36px' : '26px' }}
                mb={3}
              >
                {t('ExtraMarketing')}
              </Box>
              <Box textAlign="left">{t('ToTheQualifiedPartners')}</Box>
            </Parallax>
          </Flex>

          <Flex
            flexDir="column"
            width={{ base: '100%', md: isChinese ? '25%' : '35%' }}
            mt={{ base: 10, md: 0 }}
          >
            <Parallax data={ParallaxSettingRight}>
              <Box
                fontSize={{ base: '24px', md: isChinese ? '36px' : '26px' }}
                mb={3}
              >
                {t('YearEndBonus')}
              </Box>
              <Box textAlign="left">{t('CommonProsperity')}</Box>
            </Parallax>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        bgImage="../assets/images/feature_06.png"
        bgSize="cover"
        bgPosition="top right"
        width={{ base: '95vw', md: '1570px' }}
        height={{ base: '300px', md: '944px' }}
        borderRadius="30px"
        m={5}
        align={{ base: 'center', md: 'center' }}
        justify={{ base: 'center', md: 'flex-end' }}
        fontWeight={600}
      >
        <Flex
          flexDir="column"
          width={{ base: '90%', md: isChinese ? '25%' : '35%' }}
          mt={{ base: '50px', md: 0 }}
          mr={{ base: 0, md: '100px' }}
        >
          <Parallax data={ParallaxSettingRight}>
            <Box
              fontSize={{ base: '24px', md: isChinese ? '36px' : '26px' }}
              mb={3}
            >
              {t('VPNSupport')}
            </Box>
            <Box textAlign="left">{t('ProvideASafeNetwork')}</Box>
          </Parallax>
        </Flex>
      </Flex>

      <Flex
        bgImage="../assets/images/feature_07.png"
        bgSize="cover"
        bgPosition="top left"
        width={{ base: '95vw', md: '1570px' }}
        height={{ base: '400px', md: '944px' }}
        borderRadius="30px"
        m={5}
        justify="center"
        align="flex-end"
        color="black"
      >
        <Flex
          mb={{ base: 5, md: 10 }}
          px={5}
          width="100%"
          minH={{ base: 'auto', md: '300px' }}
          textAlign="center"
          flexDir={{ base: 'column', md: 'row' }}
          justify={{ base: 'auto', md: 'space-around' }}
          fontWeight={600}
        >
          <Flex
            flexDir="column"
            width={{ base: '100%', md: isChinese ? '25%' : '35%' }}
          >
            <Parallax data={ParallaxSettingLeft}>
              <Box
                fontSize={{ base: '24px', md: isChinese ? '36px' : '26px' }}
                mb={3}
              >
                {t('DecentDeposit')}
              </Box>
              <Box textAlign="left">{t('UnionPayOnline')}</Box>
            </Parallax>
          </Flex>

          <Flex
            flexDir="column"
            width={{ base: '100%', md: isChinese ? '25%' : '35%' }}
            mt={{ base: 10, md: 0 }}
          >
            <Parallax data={ParallaxSettingRight}>
              <Box
                fontSize={{ base: '24px', md: isChinese ? '36px' : '26px' }}
                mb={3}
              >
                {t('MultiFacetedPromotional')}
              </Box>
              <Box textAlign="left">{t('ThePartnersOfWCGMarkets')}</Box>
            </Parallax>
          </Flex>
        </Flex>
      </Flex>
    </ParallaxProvider>
  );
};

export default FeatureContent;
