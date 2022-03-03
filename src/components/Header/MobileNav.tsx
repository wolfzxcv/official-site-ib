import { IMenuItem, menuList } from '@/assets/menuList';
import { Locales } from '@/i18n/config';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose
}: MobileNavProps) => {
  const { t } = useTranslation('header');

  return (
    <Drawer
      placement={'left'}
      onClose={onClose}
      isOpen={isOpen}
      blockScrollOnMount={true}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px" onClick={onClose}>
          <Flex align="center" fontWeight="700" fontSize="16px">
            <AiOutlineMenu /> <Box ml="2">{t('menu')}</Box>
          </Flex>
        </DrawerHeader>
        <DrawerBody>
          <Flex flexDirection="column">
            {menuList.map((each) => (
              <MobileNavItem
                key={each.href}
                i18n={each.i18n}
                href={each.href}
              />
            ))}
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

const MobileNavItem: React.FC<IMenuItem> = ({ i18n, href }: IMenuItem) => {
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

export default MobileNav;
