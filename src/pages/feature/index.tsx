import Wrapper from '@/components/Base/Wrapper';
import InViewSlideFade from '@/components/Common/InViewSlideFade';
import { Locales } from '@/i18n/config';
import { Box, Flex, Image } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React from 'react';

const FeatureContent = dynamic(
  () => import('@/components/Feature/FeatureContent'),
  { ssr: false }
);

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
          <InViewSlideFade>
            <Box
              mt="50px"
              mb="25px"
              fontSize={{
                base: isChinese ? '24px' : '14px',
                md: isChinese ? '36px' : '26px'
              }}
              width="100%"
              textAlign="center"
            >
              {t('BrokersRegulatedBy')}
            </Box>
            <Box
              mb="150px"
              px={5}
              fontSize={{ base: isChinese ? 'auto' : '12px', md: '18px' }}
              width="100%"
              textAlign="center"
            >
              {t('WCGMarketsHolds')}
            </Box>
          </InViewSlideFade>
        </Flex>

        <FeatureContent />
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
