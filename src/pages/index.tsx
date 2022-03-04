import Banner from '@/components/Banner/Banner';
import WCG15ZJ from '@/components/Banner/WCG15ZJ';
import Wrapper from '@/components/Base/Wrapper';
import Carousel from '@/components/Carousel/Carousel';
import HorizontalStrip from '@/components/Home/HorizontalStrip';
import Products from '@/components/Home/Products';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Index: React.FC<{}> = () => {
  const sliders = [<WCG15ZJ key="WCG15ZJ" />, <Banner key="Banner" />];

  return (
    <Wrapper>
      <Carousel defaultSlider={<Banner key="Banner" />} sliders={sliders} />

      {/* $25up no limit */}
      <HorizontalStrip />

      {/* Products */}
      <Products />
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['common', 'header', 'footer']))
  }
});

export default Index;
