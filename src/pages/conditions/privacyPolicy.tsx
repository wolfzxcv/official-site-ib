import Wrapper from '@/components/Base/Wrapper';
import InfoTitle from '@/components/Common/InfoTitle';
import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const privacyPolicy: React.FC<{}> = () => {
  const { t } = useTranslation('conditions');

  return (
    <Wrapper>
      {/* Privacy Policy */}
      <Flex my={10} direction="column" align="center">
        <Box>
          <InfoTitle title={t('privacyPolicy')} />
        </Box>

        <Image my={3} src="../assets/images/home_divider.png" alt="divider" />

        <Box width={'80vw'} my={2} textAlign={'left'}>
          <InfoTitle size="22px" title={t('theCustomers')} />

          <Stack spacing={5}>
            <Text>{`1. ${t('theVerificationProcedures')}`}</Text>
            <Text>{`2. ${t('dealWithCustomers')}`}</Text>
            <Text>{`3. ${t('transferSuchPersonalData')}`}</Text>
            <Text>{`4. ${t('toProvideAny')}`}</Text>
          </Stack>
        </Box>

        <Box width={'80vw'} my={2} textAlign={'left'}>
          <InfoTitle size="22px" title={t('WCGWillKeep')} />

          <Stack spacing={5}>
            <Text>{`1. ${t('WCGOtherCompanies')}`}</Text>
            <Text>{`2. ${t('agentsAndThirdPartyService')}`}</Text>
            <Text>{`3. ${t('anyRegulatoryOrGovernmentAgency')}`}</Text>
            <Text>{`4. ${t('personsDeemedAppropriate')}`}</Text>

            <Text>{t('AccordingTo')}</Text>
          </Stack>
        </Box>
      </Flex>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, [
      'common',
      'footer',
      'conditions',
      'header'
    ]))
  }
});

export default privacyPolicy;
