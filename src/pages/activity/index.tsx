import Wrapper from '@/components/Base/Wrapper';
import { Box, Flex } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const activity: React.FC<{}> = () => {
  const { t } = useTranslation('activity');

  return (
    <Wrapper>
      <Flex
        width="100%"
        height="1000px"
        bg="linear-gradient(to top left, #b81c22 60%, transparent 50%),
        linear-gradient(to top right, #b81c22 60%, transparent 50%), #041c27;"
      ></Flex>
      <Box>{t('ShareNow')}</Box>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['activity', 'header', 'footer']))
  }
});

export default activity;
