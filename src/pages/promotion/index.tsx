import Wrapper from '@/components/Base/Wrapper';
import { Box, Flex } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const promotion: React.FC<{}> = () => {
  const { t } = useTranslation('promotion');

  return (
    <Wrapper>
      <Flex
        minH="700px"
        bgImage="../assets/images/promotion_banner.jpg"
        bgRepeat="no-repeat"
        bgPosition="center top"
        justify="center"
      >
        <Flex
          flexDir="column"
          width="100%"
          align="center"
          py={{ base: '50px', md: '150px' }}
          color="white"
        >
          <Box fontSize={{ base: '24px', md: '36px' }} mb={{ base: 5, md: 10 }}>
            {t('WCGMarketsPromotionTool')}
          </Box>

          <Flex>
            <PromotionEach
              imageSrc="../assets/images/promotion_01.png"
              text={t('VPNApplication')}
            />
            <PromotionEach
              imageSrc="../assets/images/promotion_02.png"
              text={t('SwapCalculator')}
            />
          </Flex>
          <Flex>
            <PromotionEach
              imageSrc="../assets/images/promotion_03.png"
              text={t('UserCenterTutorial')}
            />

            <PromotionEach
              imageSrc="../assets/images/promotion_04.png"
              text={t('WebPoster')}
            />
          </Flex>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

type PromotionEachProps = { imageSrc: string; text: string };

const PromotionEach: React.FC<PromotionEachProps> = ({
  imageSrc,
  text
}: PromotionEachProps) => {
  return (
    <Flex
      bgImage={imageSrc}
      bgSize="cover"
      width={{ base: '140px', md: '327px' }}
      height={{ base: '140px', md: '327px' }}
      m={{ base: 5, md: 5 }}
      justify="center"
      align="flex-end"
    >
      <Box mb={{ base: 5, md: 10 }} fontSize={{ base: '14px', md: '30px' }}>
        {text}
      </Box>
    </Flex>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, [
      'header',
      'footer',
      'promotion'
    ]))
  }
});

export default promotion;
