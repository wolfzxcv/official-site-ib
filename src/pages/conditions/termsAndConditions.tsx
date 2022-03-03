import Wrapper from '@/components/Base/Wrapper';
import InfoTitle from '@/components/Common/InfoTitle';
import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const termsAndConditions: React.FC<{}> = () => {
  const { t } = useTranslation('conditions');

  return (
    <Wrapper>
      {/* terms and conditions */}
      <Flex my={10} direction="column" align="center">
        <Box>
          <InfoTitle title={t('conditions')} />
        </Box>

        <Image my={3} src="../assets/images/home_divider.png" alt="divider" />

        <Text width={'80vw'} textAlign={'left'}>
          {t('whenYouUseThisWebsite')}
        </Text>

        <Box width={'80vw'} my={2} textAlign={'left'}>
          <InfoTitle size="22px" title={`1.${t('visitWebsite')}`} />

          <Stack spacing={5}>
            <Text>{`• ${t('theCopyrightsOfThisWebsiteAndAllText')}`}</Text>
            <Text>{`• ${t('theInformationOnThisWebsite')}`}</Text>
            <Text>{`• ${t(
              'exceptAsExpresslyStipulatedInThisAgreement'
            )}`}</Text>
            <Text>{`• ${t('forTheAboveMentionedPurposes')}`}</Text>
          </Stack>
        </Box>

        <Box width={'80vw'} my={2} textAlign={'left'}>
          <InfoTitle size="22px" title={`2.${t('entireAgreement')}`} />

          <Text>{t('thisAgreementContains')}</Text>
        </Box>

        <Box width={'80vw'} my={2} textAlign={'left'}>
          <InfoTitle size="22px" title={`3.${t('thirdPartyInformation')}`} />

          <Text width={'80vw'}>{t('thisWebsiteMayContain')}</Text>
        </Box>

        <Box width={'80vw'} my={2} textAlign={'left'}>
          <InfoTitle
            size="22px"
            title={`4.${t('responsibilitiesOfWCGInternational')}`}
          />

          <Stack spacing={5}>
            <Text>{`• ${t('whenYouRegisterAs')}`}</Text>
            <Text>{`• ${t(
              'inAdditionToTheAboveMentionedServiceDescriptions'
            )}`}</Text>
            <Text>{`• ${t('youSufferAnyIndirect')}`}</Text>
          </Stack>
        </Box>

        <Box width={'80vw'} my={2} textAlign={'left'}>
          <InfoTitle size="22px" title={`5.${t('yourInformation')}`} />

          <Text>{t('inAdditionToYourObligation')}</Text>
        </Box>

        <Box width={'80vw'} my={2} textAlign={'left'}>
          <InfoTitle size="22px" title={`6.${t('companyInformation')}`} />

          <Text>{t('WCGInternational')}</Text>
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

export default termsAndConditions;
