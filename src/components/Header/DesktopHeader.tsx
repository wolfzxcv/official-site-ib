import { links } from '@/assets/links';
import { openChatWindow } from '@/utils';
import { Box, Flex, Image, Link } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';
import DesktopLangSelector from './DesktopLangSelector';
import DesktopNav from './DesktopNav';
import Logo from './Logo';

const DesktopHeader: React.FC<{}> = () => {
  const { t } = useTranslation('header');

  return (
    <Flex flexDir="column" borderBottom="1px">
      <Flex
        bg="#e2e2e2"
        height="55px"
        justify="center"
        borderBottom="1px"
        borderColor="#a9a9a9"
      >
        <Flex borderLeft="1px" borderRight="1px" borderColor="#a9a9a9" px="5">
          <DownloadLink
            href={links.mt4Android}
            imageSrc="../assets/images/header_google_play.png"
            text="Google Play"
          />

          <DownloadLink
            href={links.mt4IOS}
            imageSrc="../assets/images/header_apple_store.png"
            text="Apple Store"
          />

          <DownloadLink
            href={links.mt4APP}
            imageSrc="../assets/images/web_trader.png"
            text="Web Trader"
          />
        </Flex>
        <Flex
          height="100%"
          align="center"
          fontWeight="600"
          fontSize="14px"
          pl={{ base: 0, lg: '50px', xl: '250px' }}
        >
          <ClickLink
            text={t('liveChat')}
            onClick={openChatWindow}
            imageSrc="../assets/images/live_chat.png"
          />

          <ClickLink
            text={t('login')}
            href={process.env.NEXT_PUBLIC_USERS_CENTER}
            imageSrc="../assets/images/login.png"
          />

          <ClickLink
            text={t('register')}
            onClick={openChatWindow}
            border="2px"
            borderColor="#29a643"
            bg="#29a643"
            color="white"
          />

          <DesktopLangSelector />
        </Flex>
      </Flex>

      <Flex align="center" justify="center" bg="white">
        <Flex
          height="80px"
          justify="space-between"
          align="center"
          width="80vw"
          maxW="1000px"
          minW="835px"
        >
          <Logo />
          <DesktopNav />
        </Flex>
      </Flex>
    </Flex>
  );
};

type DownloadLinkProps = {
  href: string;
  imageSrc: string;
  text: string;
};

const DownloadLink: React.FC<DownloadLinkProps> = ({
  href,
  imageSrc,
  text
}: DownloadLinkProps) => {
  return (
    <Link
      _hover={{
        opacity: 0.5,
        transition: '1s',
        borderRadius: '10px'
      }}
      p={1}
      mx={1}
      href={href}
      isExternal
    >
      <Flex height="100%" align="center" px={{ base: 0, xl: 1 }}>
        <Image width="17px" height="17px" src={imageSrc} alt={text} />
        <Box fontWeight="600" fontSize="12px" pl={2}>
          {text}
        </Box>
      </Flex>
    </Link>
  );
};

type ClickLinkProps = {
  ref?: React.MutableRefObject<undefined>;
  href?: string;
  onClick?: () => void;
  text: string;
  imageSrc?: string;
  border?: '1px' | '2px';
  borderColor?: string;
  bg?: string;
  color?: string;
};

export const ClickLink: React.FC<ClickLinkProps> = ({
  href,
  onClick,
  text,
  imageSrc,
  border = '1px',
  borderColor = '#919191',
  bg = 'white',
  color = 'inherit'
}: ClickLinkProps) => {
  return (
    <Link
      href={href}
      isExternal
      _hover={{
        textDecoration: 'none'
      }}
    >
      <ClickLinkBase
        onClick={onClick}
        text={text}
        imageSrc={imageSrc}
        border={border}
        borderColor={borderColor}
        bg={bg}
        color={color}
      />
    </Link>
  );
};

type ClickLinkBaseProps = {
  onClick?: () => void;
  text: string;
  imageSrc?: string;
  border?: '1px' | '2px';
  borderColor?: string;
  bg?: string;
  color?: string;
};

export const ClickLinkBase: React.FC<ClickLinkBaseProps> = ({
  onClick,
  text,
  imageSrc,
  border = '1px',
  borderColor = '#919191',
  bg = 'white',
  color = 'inherit'
}: ClickLinkProps) => {
  return (
    <Flex
      _hover={{
        transition: '1s',
        opacity: 0.5
      }}
      onClick={onClick}
      bg={bg}
      border={border}
      borderColor={borderColor}
      px="2"
      mx="2"
      color={color}
      align="center"
      width="max-content"
    >
      {imageSrc && (
        <Image width="13px" height="13px" mr="2" src={imageSrc} alt={text} />
      )}
      <Box>{text}</Box>
    </Flex>
  );
};

export default DesktopHeader;
