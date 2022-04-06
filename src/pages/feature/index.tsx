import Wrapper from '@/components/Base/Wrapper';
import InViewSlideFade from '@/components/Common/InViewSlideFade';
import { Locales } from '@/i18n/config';
import { Box, Flex, Image } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';

const feature: React.FC<{}> = () => {
  const { t } = useTranslation('feature');
  const router = useRouter();
  const currentLang = router.locale as Locales;

  const isChinese = currentLang === 'cn' || currentLang === 'zh';

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

          <Box
            mt="50px"
            mb="25px"
            fontSize={{ base: isChinese ? '24px' : '14px', md: '36px' }}
          >
            {t('BrokersRegulatedBy')}
          </Box>
          <Box
            mb="150px"
            px={5}
            fontSize={{ base: isChinese ? 'auto' : '12px', md: 'auto' }}
          >
            {t('WCGMarketsHolds')}
          </Box>
        </Flex>

        <InViewSlideFade>
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
                <Box fontSize={{ base: '24px', md: '36px' }} mb={3}>
                  {t('UnlimitedRebates')}
                </Box>
                <Box
                  textAlign="left"
                  fontSize={{ base: isChinese ? 'auto' : '12px', md: 'auto' }}
                >
                  {t('WCGMarketsDoesNotSet')}
                </Box>
              </Flex>
              <Flex
                flexDir="column"
                display={{ base: 'none', md: 'block' }}
                width={isChinese ? '25%' : '35%'}
                mt={0}
              >
                <Box fontSize="36px" mb={3}>
                  {t('ManagementToolsProvided')}
                </Box>
                <Box textAlign="left">{t('WCGMarketsWillProvide')}</Box>
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
          >
            <Box fontSize="24px" mb={3} width="100%" textAlign="center">
              {t('ManagementToolsProvided')}
            </Box>
            <Box textAlign="left" fontSize={isChinese ? 'auto' : '12px'}>
              {t('WCGMarketsWillProvide')}
            </Box>
          </Flex>
        </InViewSlideFade>

        <InViewSlideFade>
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
              <Box fontSize={{ base: '24px', md: '36px' }} mb={3}>
                {t('FinancialSecurity')}
              </Box>
              <Box textAlign="left">{t('WCGMarketsIsCommitted')}</Box>
            </Flex>
          </Flex>
        </InViewSlideFade>

        <InViewSlideFade>
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
                <Box fontSize={{ base: '24px', md: '36px' }} mb={3}>
                  {t('HighStandardRebateProgram')}
                </Box>
                <Box textAlign="left">{t('ProvideHighStandardAgency')}</Box>
              </Flex>
              <Flex
                flexDir="column"
                width={{ base: '100%', md: isChinese ? '25%' : '35%' }}
                mt={{ base: 10, md: 0 }}
              >
                <Box fontSize={{ base: '24px', md: '36px' }} mb={3}>
                  {t('InstantRebatePayment')}
                </Box>
                <Box textAlign="left">{t('WCGMarketsFullyAutomated')}</Box>
              </Flex>
            </Flex>
          </Flex>
        </InViewSlideFade>

        <InViewSlideFade>
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
              <Box fontSize={{ base: '24px', md: '36px' }} mb={3}>
                {t('OneToOneLiveCustomerService')}
              </Box>
              <Box textAlign="left">{t('ProvidePartnersWith')}</Box>
            </Flex>
          </Flex>
        </InViewSlideFade>

        <InViewSlideFade>
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
                <Box fontSize={{ base: '24px', md: '36px' }} mb={3}>
                  {t('ExtraMarketing')}
                </Box>
                <Box textAlign="left">{t('ToTheQualifiedPartners')}</Box>
              </Flex>
              <Flex
                flexDir="column"
                width={{ base: '100%', md: isChinese ? '25%' : '35%' }}
                mt={{ base: 10, md: 0 }}
              >
                <Box fontSize={{ base: '24px', md: '36px' }} mb={3}>
                  {t('YearEndBonus')}
                </Box>
                <Box textAlign="left">{t('CommonProsperity')}</Box>
              </Flex>
            </Flex>
          </Flex>
        </InViewSlideFade>

        <InViewSlideFade>
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
              <Box fontSize={{ base: '24px', md: '36px' }} mb={3}>
                {t('VPNSupport')}
              </Box>
              <Box textAlign="left">{t('ProvideASafeNetwork')}</Box>
            </Flex>
          </Flex>
        </InViewSlideFade>

        <InViewSlideFade>
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
                <Box fontSize={{ base: '24px', md: '36px' }} mb={3}>
                  {t('DecentDeposit')}
                </Box>
                <Box textAlign="left">{t('UnionPayOnline')}</Box>
              </Flex>
              <Flex
                flexDir="column"
                width={{ base: '100%', md: isChinese ? '25%' : '35%' }}
                mt={{ base: 10, md: 0 }}
              >
                <Box fontSize={{ base: '24px', md: '36px' }} mb={3}>
                  {t('MultiFacetedPromotional')}
                </Box>
                <Box textAlign="left">{t('ThePartnersOfWCGMarkets')}</Box>
              </Flex>
            </Flex>
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
