import { links } from '@/assets/links';
import { Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';
import IBButton from '../Common/IBButton';
import AdContainer from './AdContainer';

const AD6: React.FC<{}> = () => {
  const { t } = useTranslation('common');

  const title = t('ExtraMarketing');

  return (
    <AdContainer imageSrc="../assets/images/home_ad_06.jpg">
      <Flex flexDir="column" width="100%" align="center" justify="center">
        <Flex
          flexDir="column"
          align={{ base: 'center', md: 'start' }}
          mr={{ base: 0, md: '100px', xl: '700px' }}
          mt={{ base: 0, md: 10 }}
        >
          <Box
            fontSize={{ base: title.length > 25 ? '16px' : '24px', md: '36px' }}
            mb={10}
            fontWeight={700}
            width="100%"
            textAlign={{ base: 'center', md: 'left' }}
          >
            {title}
          </Box>

          <Box width={{ base: '80%', md: '434px' }} mb={10}>
            {t('ToTheQualifiedPartners')}
          </Box>

          <IBButton
            href={links.registerReal}
            text={t('startNow')}
            width={{ base: '50vw', md: '200px' }}
            bg="#b81c22"
          />
        </Flex>
      </Flex>
    </AdContainer>
  );
};

export default AD6;
