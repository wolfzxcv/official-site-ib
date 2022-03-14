import Wrapper from '@/components/Base/Wrapper';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const feature: React.FC<{}> = () => {
  return (
    <Wrapper>
      <div>feature page!</div>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['header', 'footer']))
  }
});

export default feature;
