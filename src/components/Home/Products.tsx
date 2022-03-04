import { Box, Flex, Image } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';

const Products: React.FC<{}> = () => {
  const { t } = useTranslation('common');

  return (
    <Flex
      bg="#041c27"
      justify="center"
      align="center"
      color="white"
      pt={{ base: 10, md: '120px' }}
      pb={{ base: 10, md: '150px' }}
    >
      <Flex width="90vw" maxW="1100px" flexDir="column">
        <Flex
          fontSize={{ base: '24px', md: '36px' }}
          fontWeight="700"
          pb={{ base: 5, md: '80px' }}
          justify={{ base: 'center', md: 'start' }}
        >
          {t('products')}
        </Flex>
        <Flex wrap="wrap">
          <ProductsEach
            imageSrc="../assets/images/home_forex.png"
            title={t('forex')}
            text={t('offerMoreThan')}
          />

          <ProductsEach
            imageSrc="../assets/images/home_precious_metal.png"
            title={t('preciousMetal')}
            text={t('goldSilver')}
          />

          <ProductsEach
            imageSrc="../assets/images/home_energy.png"
            title={t('energy')}
            text={t('crudeOilIsNotOnly')}
          />

          <ProductsEach
            imageSrc="../assets/images/home_index.png"
            title={t('index')}
            text={t('offerVariousIndexes')}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

type ProductsEachProps = {
  imageSrc: string;
  title: string;
  text: string;
};

const ProductsEach: React.FC<ProductsEachProps> = ({
  imageSrc,
  title,
  text
}) => {
  return (
    <Flex
      flexDir="column"
      width={{ base: '85vw', md: '25%' }}
      pr={{ base: 0, md: 10 }}
      pb={{ base: 10, md: 0 }}
      align={{ base: 'start', md: 'center' }}
    >
      <Box width="30px" height="30px">
        <Image src={imageSrc} alt={text} />
      </Box>
      <Box fontSize={{ base: '24px', md: '36px' }} fontWeight="700">
        {title}
      </Box>
      <Box>{text}</Box>
    </Flex>
  );
};

export default Products;
