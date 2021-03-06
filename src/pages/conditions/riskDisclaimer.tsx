import Wrapper from '@/components/Base/Wrapper';
import InfoTitle from '@/components/Common/InfoTitle';
import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const riskDisclaimer: React.FC<{}> = () => {
  const { t } = useTranslation('conditions');

  return (
    <Wrapper>
      {/* Risk Disclaimer */}
      <Flex my={10} direction="column" align="center">
        <Box>
          <InfoTitle title={t('riskDisclaimer')} />
        </Box>

        <Image my={3} src="../assets/images/home_divider.png" alt="divider" />

        <Box width={'80vw'} my={2} textAlign={'left'}>
          <InfoTitle
            size="22px"
            title={`1. ${t('internetConnectivityFailure')}`}
          />

          <Text>{t('sinceWCGCannotControl')}</Text>
        </Box>

        <Box width={'80vw'} my={2} textAlign={'left'}>
          <InfoTitle
            size="22px"
            title={`2. ${t('marketRiskAndOnlineTrading')}`}
          />

          <Text>{t('preciousMetalsTrading')}</Text>
        </Box>

        <Box width={'80vw'} my={2} textAlign={'left'}>
          <InfoTitle size="22px" title={`3. ${t('passwordProtection')}`} />

          <Text>{t('customersMustKeepThePassword')}</Text>
        </Box>

        <Box width={'80vw'} my={2} textAlign={'left'}>
          <InfoTitle size="22px" title={`4. ${t('incorrectPriceQuotation')}`} />

          <Text>{t('whenQuotationOrTransaction')}</Text>
        </Box>

        <Box width={'80vw'} my={2} textAlign={'left'}>
          <InfoTitle size="22px" title={`5. ${t('arbitrage')}`} />

          <Text>{t('internetIssues')}</Text>
        </Box>

        <Box width={'80vw'} my={2} textAlign={'left'}>
          <InfoTitle size="22px" title={`6. ${t('price')}`} />

          <Text>{t('WCGStrictlyProhibits')}</Text>
        </Box>

        <Box width={'80vw'} my={2} textAlign={'left'}>
          <InfoTitle size="22px" title={`7. ${t('bankruptcyDisclosure')}`} />

          <Text>{t('theTransactionsBetween')}</Text>
        </Box>

        <Box width={'80vw'} my={2} textAlign={'left'}>
          <InfoTitle
            size="22px"
            title={`8. ${t('introducingBrokerDisclosure')}`}
          />

          <Stack spacing={5}>
            <Text>{t('WCGDoesNotSupervise')}</Text>

            <Text>{`1. ${t('theClientUnderstandsAndAgrees')}`}</Text>
            <Text>{`2. ${t('becauseTheRisk')}`}</Text>
            <Text>{`3. ${t('theClientUnderstands')}`}</Text>
            <Text>{`4. ${t('ifTheCustomer')}`}</Text>
          </Stack>
        </Box>
      </Flex>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, [
      'footer',
      'conditions',
      'header'
    ]))
  }
});

export default riskDisclaimer;
