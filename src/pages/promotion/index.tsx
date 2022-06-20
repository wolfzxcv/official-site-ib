import Wrapper from '@/components/Base/Wrapper';
import InViewSlideFade from '@/components/Common/InViewSlideFade';
import { Locales } from '@/i18n/config';
import { Box, Flex, Link } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';

const promotion: React.FC<{}> = () => {
  const { t } = useTranslation('promotion');

  const router = useRouter();
  const currentLang = router.locale as Locales;

  const isChinese = currentLang === 'cn' || currentLang === 'zh';

  const WCG_PDF_LANG = isChinese ? 'cn' : 'en';

  return (
    <Wrapper>
      <Flex
        minH="700px"
        bgImage="../assets/images/promotion_banner.jpg"
        bgColor="#e4572a"
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
          <InViewSlideFade>
            <Box
              fontSize={{ base: '24px', md: '36px' }}
              mb={{ base: 5, md: 10 }}
            >
              {t('WCGMarketsPromotionTool')}
            </Box>
          </InViewSlideFade>

          <Flex>
            <PromotionEach
              imageSrc="../assets/images/promotion_01.png"
              text={t('VPNApplication')}
            />
            <PromotionEach
              imageSrc="../assets/images/promotion_02.png"
              text={t('ProductList')}
              href="../assets/images/WCGCPJY.jpg"
            />
          </Flex>
          <Flex>
            <PromotionEach
              imageSrc="../assets/images/promotion_03.png"
              text={t('UserCenterTutorial')}
              href="../assets/crm.pdf"
            />
            <PromotionEach
              imageSrc="../assets/images/promotion_04.png"
              text={t('Plan')}
              href={`../assets/2022WCG_${WCG_PDF_LANG}.pdf`}
            />
          </Flex>
          <Flex>
            <PromotionEach
              imageSrc="../assets/images/promotion_05.png"
              text={t('CompanyProfile')}
              href="../assets/video.mp4"
            />
          </Flex>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

type PromotionEachProps = {
  href?: string;
  imageSrc: string;
  text: string;
};

const PromotionEach: React.FC<PromotionEachProps> = ({
  href,
  imageSrc,
  text
}: PromotionEachProps) => {
  return href ? (
    <Link
      href={href}
      _hover={{
        textDecoration: 'none'
      }}
      target="_blank"
    >
      <PromotionEachBase imageSrc={imageSrc} text={text} />
    </Link>
  ) : (
    <PromotionEachBase imageSrc={imageSrc} text={text} />
  );
};

const PromotionEachBase: React.FC<PromotionEachProps> = ({
  imageSrc,
  text
}: PromotionEachProps) => {
  return (
    <InViewSlideFade>
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
    </InViewSlideFade>
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
