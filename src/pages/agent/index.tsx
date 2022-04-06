import Wrapper from '@/components/Base/Wrapper';
import InViewSlideFade from '@/components/Common/InViewSlideFade';
import { Locales } from '@/i18n/config';
import { Box, Flex } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';

const agent: React.FC<{}> = () => {
  const { t } = useTranslation('agent');
  const router = useRouter();
  const currentLang = router.locale as Locales;

  const isChinese = currentLang === 'cn' || currentLang === 'zh';

  return (
    <Wrapper>
      <Flex flexDir="column" color="white">
        <PageBlock />
        <Flex
          bg="#04293A"
          minH="600px"
          height={{ base: 'auto', xxl: '600px' }}
          flexDir="column"
          align="center"
        >
          <Box
            fontSize={{ base: '24px', md: '36px' }}
            textAlign="center"
            mt={10}
          >
            {t('IndividualBroker')}
          </Box>
          <Flex wrap="wrap" justify="center">
            <AgentEach
              imageSrc="../assets/images/agent_01.png"
              text={t('BecomeOurBrokerRightNow')}
            />
            <AgentEach
              imageSrc="../assets/images/agent_02.png"
              text={t('TheAgentIs')}
            />
            <AgentEach
              imageSrc="../assets/images/agent_03.png"
              text={t('ReferringCustomersCanEnjoy')}
            />
          </Flex>
        </Flex>
        <PageBlock />
        <Flex
          bg="#ee8a08"
          minH="600px"
          height={{ base: 'auto', xxl: '600px' }}
          flexDir="column"
          align="center"
        >
          <Box
            fontSize={{ base: '24px', md: '36px' }}
            textAlign="center"
            mt={10}
          >
            {t('CompanyBroker')}
          </Box>
          <Flex wrap="wrap" justify="center">
            <AgentEach
              imageSrc="../assets/images/agent_04.png"
              text={t('BestChoiceFor')}
            />
            <AgentEach
              imageSrc="../assets/images/agent_05.png"
              text={t('ProvideYouWith')}
            />
            <AgentEach
              imageSrc="../assets/images/agent_06.png"
              text={t('ProvideSpecialCustomizedAdvertisements')}
            />
          </Flex>
        </Flex>

        <Box
          height="459px"
          bgImage="../assets/images/agent_banner.jpg"
          bgRepeat="no-repeat"
          bgPosition="center top"
          zIndex={-1}
        ></Box>

        <Flex
          justify="center"
          my={{ base: '50px', md: '150px' }}
          fontSize={{
            base: isChinese ? '18px' : 'auto',
            md: isChinese ? '22px' : 'auto'
          }}
        >
          <Flex
            color="black"
            justify="space-between"
            width={{ base: '80vw', lg: '80vw' }}
            maxW="1100px"
            flexDir={{ base: 'column', lg: 'row' }}
          >
            <InViewSlideFade>
              <Flex
                width={{ base: '100%', lg: '400px' }}
                mb={{ base: 10, lg: 0 }}
                flexDir="column"
                align="center"
              >
                <Box
                  mb={5}
                  fontSize={{ base: '24px', md: isChinese ? '36px' : '26px' }}
                >
                  {t('WhiteLabelPartnershipProgram')}
                </Box>
                <Box>{t('AddressingHighEndCustomizationNeeds')}</Box>
              </Flex>
            </InViewSlideFade>
            <InViewSlideFade>
              <Flex
                width={{ base: '100%', lg: '400px' }}
                flexDir="column"
                align="center"
              >
                <Box
                  mb={5}
                  fontSize={{ base: '24px', md: isChinese ? '36px' : '26px' }}
                >
                  {t('RegionalRepresentative')}
                </Box>
                <Box>{t('ThisIsAUniqueOpportunity')}</Box>
              </Flex>
            </InViewSlideFade>
          </Flex>
        </Flex>

        <PageBlock />
      </Flex>
    </Wrapper>
  );
};

type AgentEachProps = { imageSrc: string; text: string };

const AgentEach: React.FC<AgentEachProps> = ({
  imageSrc,
  text
}: AgentEachProps) => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  const isChinese = currentLang === 'cn' || currentLang === 'zh';

  return (
    <InViewSlideFade>
      <Flex
        bgImage={imageSrc}
        bgSize="cover"
        width={{ base: '350px', md: '430px' }}
        height={{ base: '430px', md: '530px' }}
        m={5}
        justify="center"
        align="flex-end"
      >
        <Box
          mb={{ base: 5, md: 10 }}
          px={isChinese ? 5 : 2}
          width="100%"
          minH={{ base: '110px', md: '130px' }}
          textAlign="center"
          fontSize={{
            base: isChinese ? '18px' : 'auto',
            md: isChinese ? '22px' : 'auto'
          }}
        >
          {text}
        </Box>
      </Flex>
    </InViewSlideFade>
  );
};

const PageBlock: React.FC<{}> = () => (
  <Box
    display={{ base: 'none', md: 'block' }}
    bg="#041C27"
    height="100px"
    zIndex={-1}
  ></Box>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['agent', 'header', 'footer']))
  }
});

export default agent;
