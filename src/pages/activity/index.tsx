import Wrapper from '@/components/Base/Wrapper';
import IBButton, { IBButtonProps } from '@/components/Common/IBButton';
import InViewSlideFade from '@/components/Common/InViewSlideFade';
import { Box, Flex, Image, Link } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const activity: React.FC<{}> = () => {
  const { t } = useTranslation('activity');

  return (
    <Wrapper>
      <Flex
        bg="#b81c22"
        minH={{ base: '700px', md: '1051px' }}
        bgImage="../assets/images/activity_banner.jpg"
        bgRepeat="no-repeat"
        bgPosition="center top"
        justify="start"
        align="center"
        flexDir="column"
        color="white"
        py={{ base: '50px', md: '150px' }}
      >
        <Flex flexDir="column" width="100%" align="center">
          <Box fontSize={{ base: '24px', md: '36px' }}>{t('Promotions')}</Box>
          <Flex wrap="wrap" px={5} justify="center">
            <ActivityEach
              imageSrc="../assets/images/activity_10.jpg"
              summary={t('SuperAgentBonus')}
              href="/activity/WCGDLJS"
              isExternal={false}
              isFinished={false}
            />

            <ActivityEach
              imageSrc="../assets/images/activity_09.jpg"
              summary={t('JulyTopUp')}
              href="/activity/WCGQYHK"
              isExternal={false}
              isFinished={false}
            />
            <ActivityEach
              imageSrc="../assets/images/activity_08.jpg"
              summary={t('SuperSummer')}
              href="/activity/WCG6DL"
              isExternal={false}
            />

            <ActivityEach
              imageSrc="../assets/images/activity_07.jpg"
              summary={t('RebateOnFirstTimeTopUp')}
              href="https://glb.012wenchuan.com/activity/WCG15"
              isFinished={false}
            />

            <ActivityEach
              imageSrc="../assets/images/activity_06.jpg"
              summary={t('GoldEvents')}
              href="https://glb.012wenchuan.com/activity/WCG51"
            />

            <ActivityEach
              imageSrc="../assets/images/activity_05.jpg"
              summary={t('ANoteOnWeiboForBonus')}
            />

            <ActivityEach
              imageSrc="../assets/images/activity_04.jpg"
              summary={t('TradingGiftsTripleBonus')}
              href="https://glb.012wenchuan.com/activity/WCGI"
            />

            <ActivityEach
              imageSrc="../assets/images/activity_03.jpg"
              summary={t('TradingGiftsTripleBonus')}
              href="https://glb.012wenchuan.com/activity/JYSL"
            />

            <ActivityEach
              imageSrc="../assets/images/activity_02.jpg"
              summary={t('DealRebateFirstHit')}
            />

            <ActivityEach
              imageSrc="../assets/images/activity_01.jpg"
              summary={t('GoldDecemberAgency')}
            />
          </Flex>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

type ActivityEachProps = {
  imageSrc: string;
  summary: string;
  href?: IBButtonProps['href'];
  isFinished?: boolean;
  isExternal?: boolean;
};

const ActivityEach: React.FC<ActivityEachProps> = ({
  imageSrc,
  summary,
  href,
  isFinished = true,
  isExternal = true
}: ActivityEachProps) => {
  const { t } = useTranslation('activity');

  const text = isFinished ? t('Finished') : t('ShareNow');

  const bg = isFinished ? '#828282' : '#e42929';

  return (
    <Flex flexDir="column" m="50px">
      <InViewSlideFade>
        <Link
          _hover={{
            opacity: 0.8,
            transition: '1s'
          }}
          href={href}
          isExternal={isExternal}
        >
          <Box>
            <Image border="1px" src={imageSrc} alt={summary} />
          </Box>
        </Link>
        <Box width="100%" textAlign="center" my={5}>
          {summary}
        </Box>
        <Box width={{ base: '80%', md: '60%' }} mx="auto">
          <IBButton
            href={href}
            width={{ base: '100%', md: '100%' }}
            text={text}
            bg={bg}
          />
        </Box>
      </InViewSlideFade>
    </Flex>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['activity', 'header', 'footer']))
  }
});

export default activity;
