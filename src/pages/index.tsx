import Banner from '@/components/Banner/Banner';
import WCG15ZJ from '@/components/Banner/WCG15ZJ';
import Wrapper from '@/components/Base/Wrapper';
import Carousel from '@/components/Carousel/Carousel';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Index: React.FC<{}> = () => {
  const sliders = [<WCG15ZJ key="WCG15ZJ" />, <Banner key="Banner" />];

  return (
    <Wrapper>
      <Carousel defaultSlider={<Banner key="Banner" />} sliders={sliders} />
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['footer', 'header']))
  }
});

export default Index;
