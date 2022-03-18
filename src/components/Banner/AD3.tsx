import { links } from '@/assets/links';
import { Box, Flex, Image } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';
import IBButton from '../Common/IBButton';
import AdContainer from './AdContainer';

const AD3: React.FC<{}> = () => {
  const { t } = useTranslation('common');

  const title = t('DecentDeposit');

  return (
    <AdContainer imageSrc="../assets/images/home_ad_03.jpg">
      <Flex flexDir="column" width="100%" align="center" justify="center">
        <Box
          fontSize={{ base: title.length > 25 ? '16px' : '24px', md: '36px' }}
          mb={{ base: 5, md: 10 }}
          fontWeight={700}
          width="100%"
          textAlign={{ base: 'center', md: 'center' }}
        >
          {title}
        </Box>
        <Flex wrap="wrap" justify="center">
          <EachAD3
            text={t('UnionPay')}
            imageSrc="../assets/images/banner_UnionPay.png"
          />
          <EachAD3
            text={t('OnlineBankTransfer')}
            imageSrc="../assets/images/banner_OnlineBankTransfer.png"
          />
          <EachAD3 text={'USDT'} imageSrc="../assets/images/banner_USDT.png" />
          <EachAD3
            text={t('WireTransfer')}
            imageSrc="../assets/images/banner_WireTransfer.png"
          />
          <EachAD3
            text={t('ComprehensiveSupport')}
            imageSrc="../assets/images/banner_ComprehensiveSupport.png"
          />
        </Flex>
        <IBButton
          href={links.registerReal}
          text={t('startNow')}
          width={{ base: '50vw', md: '200px' }}
        />
      </Flex>
    </AdContainer>
  );
};

type EachAD3Props = {
  text: string;
  imageSrc?: string;
};

const EachAD3: React.FC<EachAD3Props> = ({ text, imageSrc }: EachAD3Props) => {
  return (
    <Flex
      flexDir="column"
      justify="center"
      align="center"
      mb={{ base: 1, md: 5 }}
    >
      <Box mb={{ base: 0, md: 2 }} fontWeight={700}>
        {text}
      </Box>

      {imageSrc && (
        <Flex
          justify="center"
          align="center"
          width="150px"
          height={{ base: '100px', md: '130px' }}
        >
          <Image
            mb={{ base: 0, md: 5 }}
            mr={{ base: 0, md: 2 }}
            src={imageSrc}
            alt={text}
          />
        </Flex>
      )}
    </Flex>
  );
};

export default AD3;
