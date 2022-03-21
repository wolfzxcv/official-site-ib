import { links } from '@/assets/links';
import Wrapper from '@/components/Base/Wrapper';
import { openChatWindow } from '@/utils';
import { Box, Flex, Image, Link } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const contact: React.FC<{}> = () => {
  const { t } = useTranslation('contact');

  return (
    <Wrapper>
      <Flex
        height="395px"
        bgImage="../assets/images/contact_banner.png"
        bgPosition="center"
        justify="center"
        align="end"
      >
        <Flex
          flexDir="column"
          align="center"
          color="white"
          fontSize={{ base: '20px', md: '24px' }}
          mb={{ base: '20px', md: '50px' }}
          width={{ base: '90vw', md: '70vw' }}
        >
          <Box my={{ base: 5, md: 0 }}>{t('WeWholeheartedlyProvide')}</Box>
          <Box>{t('YouCanContact')}</Box>
          <Box
            border="1px"
            borderColor="white"
            width="250px"
            textAlign="center"
            py={2}
            my={5}
          >
            {t('OfficeHours')}
          </Box>
        </Flex>
      </Flex>
      <Flex bg="#e45729" justify="center">
        <Flex
          width={{ base: '90vw', md: '700px' }}
          justify={{ base: 'space-around', md: 'center' }}
          wrap="wrap"
          mt="50px"
          mb={{ base: '50px', md: '150px' }}
        >
          <ContactIcon
            onClick={openChatWindow}
            imageSrc="../assets/images/contact_live_chat.png"
          />
          <ContactIcon
            href={links.whatsApp}
            imageSrc="../assets/images/contact_whatsapp.png"
          />
          <ContactIcon
            href={links.line}
            imageSrc="../assets/images/contact_line.png"
          />
          <ContactIcon
            href={links.telegram}
            imageSrc="../assets/images/contact_telegram.png"
          />
          <ContactIcon
            href={`mailto:${links.email}`}
            imageSrc="../assets/images/contact_email.png"
          />
          <ContactIcon
            href={`tel:${links.tel}`}
            imageSrc="../assets/images/contact_tel.png"
          />
        </Flex>
      </Flex>
    </Wrapper>
  );
};

type ContactIconProps = {
  href?: string;
  imageSrc: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const ContactIcon: React.FC<ContactIconProps> = ({
  href,
  imageSrc,
  onClick
}: ContactIconProps) => {
  return (
    <Link
      _hover={{
        opacity: 0.8,
        transition: '1s'
      }}
      mx={1}
      href={href}
      isExternal
    >
      <Image
        mx={{ base: 0, md: 5 }}
        my={10}
        onClick={onClick}
        src={imageSrc}
        alt="icon"
      />
    </Link>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['contact', 'header', 'footer']))
  }
});

export default contact;
