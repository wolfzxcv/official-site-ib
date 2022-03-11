import Banner from '@/components/Banner/Banner';
import WCG15ZJ from '@/components/Banner/WCG15ZJ';
import XNHZ from '@/components/Banner/XNHZ';
import Wrapper from '@/components/Base/Wrapper';
import Carousel from '@/components/Carousel/Carousel';
import HorizontalStrip from '@/components/Home/HorizontalStrip';
import MediaAwards from '@/components/Home/MediaAwards';
import RedBlock from '@/components/Home/RedBlock';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';

const Products = dynamic(() => import('@/components/Home/Products'), {
  ssr: false
});

const Index: React.FC<{}> = () => {
  const sliders = [
    <WCG15ZJ key="WCG15ZJ" />,
    <Banner key="Banner" />,
    <XNHZ key="XNHZ" />
  ];

  return (
    <Wrapper>
      {/* Carousel */}
      <Carousel defaultSlider={<Banner key="Banner" />} sliders={sliders} />
      {/* <Flex
        width="100%"
        height="300px"
        bg="#041c27"
        justify="center"
        align="center"
        color="white"
      >
        banner
      </Flex> */}

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
