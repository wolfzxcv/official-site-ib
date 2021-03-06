import AD1 from '@/components/Banner/AD1';
import AD2 from '@/components/Banner/AD2';
import AD3 from '@/components/Banner/AD3';
import AD5 from '@/components/Banner/AD5';
import AD6 from '@/components/Banner/AD6';
import WCGBY from '@/components/Banner/WCGBY';
import Wrapper from '@/components/Base/Wrapper';
import Carousel from '@/components/Carousel/Carousel';
import HorizontalStrip from '@/components/Home/HorizontalStrip';
import MediaAwards from '@/components/Home/MediaAwards';
import Products from '@/components/Home/Products';
import RedBlock from '@/components/Home/RedBlock';
import IntroductionVideo from '@/components/PopUp/IntroductionVideo';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Index: React.FC<{}> = () => {
  const sliders = [
    <WCGBY key="WCGBY" />,
    <AD1 key="AD1" />,
    <AD2 key="AD2" />,
    <AD3 key="AD3" />,
    <AD5 key="AD5" />,
    <AD6 key="AD6" />
  ];

  return (
    <Wrapper>
      <IntroductionVideo />

      {/* Carousel */}
      <Carousel defaultSlider={<AD1 key="AD1" />} sliders={sliders} />

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
