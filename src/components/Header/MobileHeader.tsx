import { links } from '@/assets/links';
import { openChatWindow } from '@/utils';
import { Box, Flex, useDisclosure } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { ImEarth } from 'react-icons/im';
import { ClickLink } from './DesktopHeader';
import Logo from './Logo';
import MobileLangSelector from './MobileLangSelector';
import MobileNav from './MobileNav';

const MobileHeader: React.FC<{}> = () => {
  const { t } = useTranslation('header');

  const {
    isOpen: isOpenMobileNav,
    onOpen: onOpenMobileNav,
    onClose: onCloseMobileNav
  } = useDisclosure();

  const {
    isOpen: isOpenMobileLangSelector,
    onOpen: onOpenMobileLangSelector,
    onClose: onCloseMobileLangSelector
  } = useDisclosure();

  return (
    <>
      <Flex fontWeight="600" justify="space-between" p={3} bg="white">
        <ClickLink
          text={t('register')}
          onClick={openChatWindow}
          border="2px"
          borderColor="#29a643"
          bg="#29a643"
          color="white"
        />

        <ClickLink
          text={t('liveChat')}
          onClick={openChatWindow}
          imageSrc="../assets/images/live_chat.png"
        />

        <ClickLink
          text={t('login')}
          href={links.usersCenter}
          imageSrc="../assets/images/login.png"
        />
      </Flex>
      <Flex
        px="5"
        bg="white"
        height="60px"
        justify="space-between"
        align="center"
        fontWeight="700"
        borderBottom="1px"
      >
        <Flex onClick={onOpenMobileNav} align="center">
          <AiOutlineMenu />
          <Box ml="2">{t('menu').toUpperCase()}</Box>
        </Flex>

        <Logo />

        <Flex onClick={onOpenMobileLangSelector} align="center">
          <Box mr="2">{t('language').toUpperCase()}</Box>
          <ImEarth />
        </Flex>
      </Flex>
      <MobileNav isOpen={isOpenMobileNav} onClose={onCloseMobileNav} />
      <MobileLangSelector
        isOpen={isOpenMobileLangSelector}
        onClose={onCloseMobileLangSelector}
      />
    </>
  );
};

export default MobileHeader;
