import { IMenuItem, menuList } from '@/assets/menuList';
import { Locales } from '@/i18n/config';
import { Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const DesktopNav: React.FC<{}> = () => {
  return (
    <Flex>
      {menuList.map((each) => (
        <DesktopNavItem key={each.href} i18n={each.i18n} href={each.href} />
      ))}
    </Flex>
  );
};

const DesktopNavItem: React.FC<IMenuItem> = ({ i18n, href }: IMenuItem) => {
  const { t } = useTranslation('header');
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <NextLink passHref={true} href={href} locale={currentLang}>
      <Box
        _hover={{
          cursor: 'pointer',
          bg: '#e2e2e2',
          opacity: 0.7
        }}
        px="5"
        py="2"
        transition={'all .5s ease'}
        fontWeight={700}
      >
        {t(i18n)}
      </Box>
    </NextLink>
  );
};

export default DesktopNav;
