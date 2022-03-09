import Wrapper from '@/components/Base/Wrapper';
import HorizontalStrip from '@/components/Home/HorizontalStrip';
import MediaAwards from '@/components/Home/MediaAwards';
import RedBlock from '@/components/Home/RedBlock';
import { Flex } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';

const Products = dynamic(() => import('@/components/Home/Products'), {
  ssr: false
});

const Index: React.FC<{}> = () => {
  return (
    <Wrapper>
      <Flex
        width="100%"
        height="300px"
        bg="#041c27"
        justify="center"
        align="center"
        color="white"
      >
        banner
      </Flex>
      {/* $25up no limit */}
      <HorizontalStrip />

      {/* Products */}
      <Products />

      {/* The world's top liquidity traders provide quotations */}
      <RedBlock />

      {/* Media Awards */}
      <MediaAwards />
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['common', 'header', 'footer']))
  }
});

export default Index;
