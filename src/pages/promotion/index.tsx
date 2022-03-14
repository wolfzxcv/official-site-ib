import Wrapper from '@/components/Base/Wrapper';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const promotion: React.FC<{}> = () => {
  return (
    <Wrapper>
      <div>promotion page!</div>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['header', 'footer']))
  }
});

export default promotion;
