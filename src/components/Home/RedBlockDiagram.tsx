import { Locales } from '@/i18n/config';
import { Box, Flex, Image, keyframes } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React from 'react';
import { FaDotCircle, FaUserAlt } from 'react-icons/fa';
import { ImArrowDown } from 'react-icons/im';

const RedBlockDiagram: React.FC<{}> = () => {
  const { t } = useTranslation('common');

  return (
    <StyledRedBlockDiagram>
      {/* row 1 */}
      <Flex justify="center" align="flex-end">
        <StyledCard
          className="one"
          width={{ base: '100px', xl: '130px' }}
          height={{ base: '120px', xl: '150px' }}
        >
          <Box m={3} textAlign="center">
            <FaDotCircle />
          </Box>
          <Provider />
          <Box textAlign="center">1</Box>
        </StyledCard>

        <div className="empty-one">
          <div className="bigger-one left">
            <div className="smaller-one"></div>
          </div>
          <div className="bigger-one right">
            <div className="smaller-one"></div>
          </div>
        </div>

        <StyledCard
          className="three"
          width={{ base: '100px', xl: '130px' }}
          height={{ base: '120px', xl: '150px' }}
        >
          <Box m={3} textAlign="center">
            <FaDotCircle />
          </Box>
          <Provider />
          <Box textAlign="center">3</Box>
        </StyledCard>
      </Flex>

      {/* row 2 */}
      <Flex justify="center" align="flex-end">
        <StyledCard
          className="two"
          width={{ base: '100px', xl: '130px' }}
          height={{ base: '120px', xl: '150px' }}
        >
          <Box m={3} textAlign="center">
            <FaDotCircle />
          </Box>
          <Provider />
          <Box textAlign="center">2</Box>
        </StyledCard>

        <div className="bridge-two">
          <div className="upper-one left"></div>
          <div className="lower-one left"></div>
        </div>

        <Image
          src="../assets/images/home_red_block_logo.png"
          pb={10}
          alt="logo"
        />

        <div className="bridge-two">
          <div className="upper-one right"></div>
          <div className="lower-one right"></div>
        </div>

        <StyledCard
          className="four"
          width={{ base: '100px', xl: '130px' }}
          height={{ base: '120px', xl: '150px' }}
        >
          <Box m={3} textAlign="center">
            <FaDotCircle />
          </Box>
          <Provider />
          <Box textAlign="center">4</Box>
        </StyledCard>
      </Flex>

      {/* row 3 */}
      <Flex justify="center" align="flex-end">
        <div className="bridge-three left"></div>
        <div className="bridge-three right"></div>
      </Flex>

      {/* row 4 */}
      <Flex justify="center" align="flex-end">
        <div className="buy-in">{t('BuyingRate')}</div>
        <div className="empty-four"></div>
        <div className="sell-out">{t('SellingRate')}</div>
      </Flex>

      {/* row 5 */}
      <Flex justify="center">
        <div className="left"></div>
        <div className="middle">
          <div>{t('SPREAD')}</div>
        </div>
        <div className="right"></div>
      </Flex>

      {/* row 6 */}
      <Flex justify="center" align="flex-end">
        <div className="arrow-six">
          <ImArrowDown fontSize="26px" />
        </div>
      </Flex>

      {/* row 7 */}
      <Flex align="center" flexDir="column">
        <FaUserAlt fontSize="50px" />
        <Box>{t('CLIENT')}</Box>
      </Flex>
    </StyledRedBlockDiagram>
  );
};

const Provider: React.FC<{}> = () => {
  const { t } = useTranslation('common');

  const router = useRouter();
  const currentLang = router.locale as Locales;

  const isChinese = currentLang === 'cn' || currentLang === 'zh';
  return (
    <Box
      height={{ base: 'auto', xl: '80px' }}
      fontWeight={700}
      fontSize={{ base: '16px', xl: isChinese ? '22px' : 'inherit' }}
      px={isChinese ? 6 : 5}
      pt={isChinese ? 0 : 6}
      textAlign="center"
    >
      {t('PROVIDER')}
    </Box>
  );
};

const clockwise = keyframes`
  0% {
    background-position: left top, right top, right bottom, left bottom;
  }

  100% {
    background-position: right top, right bottom, left bottom, left top;
  }
`;

const counterclockwise = keyframes`
  0% {
    background-position: right top, right bottom, left bottom, left top;
  }

  100% {
    background-position: left top, right top, right bottom, left bottom;
  }
`;

const movement = keyframes`
  0% {
    top: -20px;
    opacity: 0;
  }

  100% {
    top: -10px;
    opacity: 1;
  }
`;

const cardOneAnimation = keyframes`
  0% {
    color: #176af3;
  }

  49% {
    color: #176af3;
  }

  50% {
    color: gray;
  }

  100% {
    color: gray;
  }
`;

const leftLineOne = keyframes`
  0% {
    background: linear-gradient(90deg, #176af3 50%, transparent 50%),
      linear-gradient(0deg, #176af3 50%, transparent 50%),
      linear-gradient(90deg, #176af3 50%, transparent 50%),
      linear-gradient(0deg, #176af3 50%, transparent 50%);
    background-repeat: repeat-x, repeat-y;
    background-size: 15px 3px, 3px 15px, 15px 0px, 0px 15px;
    background-position: left top, right top, right bottom, left bottom;
  }

  49% {
    background: linear-gradient(90deg, #176af3 50%, transparent 50%),
      linear-gradient(0deg, #176af3 50%, transparent 50%),
      linear-gradient(90deg, #176af3 50%, transparent 50%),
      linear-gradient(0deg, #176af3 50%, transparent 50%);
    background-repeat: repeat-x, repeat-y;
    background-size: 15px 3px, 3px 15px, 15px 0px, 0px 15px;
    background-position: right top, right bottom, left bottom, left top;
  }

  50% {
    background: linear-gradient(90deg, gray 50%, transparent 50%),
      linear-gradient(0deg, gray 50%, transparent 50%),
      linear-gradient(90deg, gray 50%, transparent 50%),
      linear-gradient(0deg, gray 50%, transparent 50%);
    background-repeat: repeat-x, repeat-y;
    background-size: 15px 3px, 3px 15px, 15px 0px, 0px 15px;
    background-position: left top, right top, right bottom, left bottom;
  }

  100% {
    background: linear-gradient(90deg, gray 50%, transparent 50%),
      linear-gradient(0deg, gray 50%, transparent 50%),
      linear-gradient(90deg, gray 50%, transparent 50%),
      linear-gradient(0deg, gray 50%, transparent 50%);
    background-repeat: repeat-x, repeat-y;
    background-size: 15px 3px, 3px 15px, 15px 0px, 0px 15px;
    background-position: right top, right bottom, left bottom, left top;
  }
`;

const cardTwoAnimation = keyframes`
  0% {
    color: gray;
  }

  49% {
    color: gray;
  }

  50% {
    color: #176af3;
  }

  100% {
    color: #176af3;
  }
`;

const leftLineTwo = keyframes`
  0% {
    background: linear-gradient(90deg, gray 50%, transparent 50%),
      linear-gradient(0deg, gray 50%, transparent 50%),
      linear-gradient(90deg, gray 50%, transparent 50%),
      linear-gradient(0deg, gray 50%, transparent 50%);
    background-repeat: repeat-x, repeat-y;
    background-size: 15px 3px, 0px 15px, 15px 0px, 0px 15px;
    background-position: left top, right top, right bottom, left bottom;
  }

  49% {
    background: linear-gradient(90deg, gray 50%, transparent 50%),
      linear-gradient(0deg, gray 50%, transparent 50%),
      linear-gradient(90deg, gray 50%, transparent 50%),
      linear-gradient(0deg, gray 50%, transparent 50%);
    background-repeat: repeat-x, repeat-y;
    background-size: 15px 3px, 0px 15px, 15px 0px, 0px 15px;
    background-position: right top, right bottom, left bottom, left top;
  }

  50% {
    background: linear-gradient(90deg, #176af3 50%, transparent 50%),
      linear-gradient(0deg, #176af3 50%, transparent 50%),
      linear-gradient(90deg, #176af3 50%, transparent 50%),
      linear-gradient(0deg, #176af3 50%, transparent 50%);
    background-repeat: repeat-x, repeat-y;
    background-size: 15px 3px, 0px 15px, 15px 0px, 0px 15px;
    background-position: left top, right top, right bottom, left bottom;
  }

  100% {
    background: linear-gradient(90deg, #176af3 50%, transparent 50%),
      linear-gradient(0deg, #176af3 50%, transparent 50%),
      linear-gradient(90deg, #176af3 50%, transparent 50%),
      linear-gradient(0deg, #176af3 50%, transparent 50%);
    background-repeat: repeat-x, repeat-y;
    background-size: 15px 3px, 0px 15px, 15px 0px, 0px 15px;
    background-position: right top, right bottom, left bottom, left top;
  }
`;

const cardThreeAnimation = keyframes`
  0% {
    color: gray;
  }

  24% {
    color: gray;
  }

  25% {
    color: #78f78b;
  }

  100% {
    color: #78f78b;
  }
`;

const rightLineOne = keyframes`
  0% {
    background: linear-gradient(90deg, gray 50%, transparent 50%),
      linear-gradient(0deg, gray 50%, transparent 50%),
      linear-gradient(90deg, gray 50%, transparent 50%),
      linear-gradient(0deg, gray 50%, transparent 50%);
    background-repeat: repeat-x, repeat-y;
    background-size: 15px 3px, 0px 15px, 15px 0px, 3px 15px;
    background-position: right top, right bottom, left bottom, left top;
  }

  49% {
    background: linear-gradient(90deg, gray 50%, transparent 50%),
      linear-gradient(0deg, gray 50%, transparent 50%),
      linear-gradient(90deg, gray 50%, transparent 50%),
      linear-gradient(0deg, gray 50%, transparent 50%);
    background-repeat: repeat-x, repeat-y;
    background-size: 15px 3px, 0px 15px, 15px 0px, 3px 15px;
    background-position: left top, right top, right bottom, left bottom;
  }

  50% {
    background: linear-gradient(90deg, #78f78b 50%, transparent 50%),
      linear-gradient(0deg, #78f78b 50%, transparent 50%),
      linear-gradient(90deg, #78f78b 50%, transparent 50%),
      linear-gradient(0deg, #78f78b 50%, transparent 50%);
    background-repeat: repeat-x, repeat-y;
    background-size: 15px 3px, 0px 15px, 15px 0px, 3px 15px;
    background-position: right top, right bottom, left bottom, left top;
  }

  100% {
    background: linear-gradient(90deg, #78f78b 50%, transparent 50%),
      linear-gradient(0deg, #78f78b 50%, transparent 50%),
      linear-gradient(90deg, #78f78b 50%, transparent 50%),
      linear-gradient(0deg, #78f78b 50%, transparent 50%);
    background-repeat: repeat-x, repeat-y;
    background-size: 15px 3px, 0px 15px, 15px 0px, 3px 15px;
    background-position: left top, right top, right bottom, left bottom;
  }
`;

const cardFourAnimation = keyframes`
  0% {
    color: #78f78b;
  }

  24% {
    color: #78f78b;
  }

  25% {
    color: gray;
  }

  100% {
    color: gray;
  }
`;

const rightLineTwo = keyframes`
  0% {
    background: linear-gradient(90deg, #78f78b 50%, transparent 50%),
      linear-gradient(0deg, #78f78b 50%, transparent 50%),
      linear-gradient(90deg, #78f78b 50%, transparent 50%),
      linear-gradient(0deg, #78f78b 50%, transparent 50%);
    background-repeat: repeat-x, repeat-y;
    background-size: 15px 3px, 0px 15px, 15px 0px, 0px 15px;
    background-position: right top, right bottom, left bottom, left top;
  }

  49% {
    background: linear-gradient(90deg, #78f78b 50%, transparent 50%),
      linear-gradient(0deg, #78f78b 50%, transparent 50%),
      linear-gradient(90deg, #78f78b 50%, transparent 50%),
      linear-gradient(0deg, #78f78b 50%, transparent 50%);
    background-repeat: repeat-x, repeat-y;
    background-size: 15px 3px, 0px 15px, 15px 0px, 0px 15px;
    background-position: left top, right top, right bottom, left bottom;
  }

  50% {
    background: linear-gradient(90deg, gray 50%, transparent 50%),
      linear-gradient(0deg, gray 50%, transparent 50%),
      linear-gradient(90deg, gray 50%, transparent 50%),
      linear-gradient(0deg, gray 50%, transparent 50%);
    background-repeat: repeat-x, repeat-y;
    background-size: 15px 3px, 0px 15px, 15px 0px, 0px 15px;
    background-position: right top, right bottom, left bottom, left top;
  }

  100% {
    background: linear-gradient(90deg, gray 50%, transparent 50%),
      linear-gradient(0deg, gray 50%, transparent 50%),
      linear-gradient(90deg, gray 50%, transparent 50%),
      linear-gradient(0deg, gray 50%, transparent 50%);
    background-repeat: repeat-x, repeat-y;
    background-size: 15px 3px, 0px 15px, 15px 0px, 0px 15px;
    background-position: left top, right top, right bottom, left bottom;
  }
`;

const StyledCard = styled(Box)`
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 3px 3px;
  margin: 10px 0;
  background-color: white;

  &.one {
    animation: ${cardOneAnimation} 4s infinite alternate;
  }

  &.two {
    animation: ${cardTwoAnimation} 4s infinite alternate;
  }

  &.three {
    animation: ${cardThreeAnimation} 4s infinite alternate;
  }

  &.four {
    animation: ${cardFourAnimation} 4s infinite alternate;
  }
`;

const StyledRedBlockDiagram = styled.div`
  /* row 1 */
  .empty-one {
    width: 100px;
    height: 150px;
    display: flex;
    justify-content: space-between;
    position: relative;
    top: 50px;

    .bigger-one {
      width: 25px;
      height: 100%;

      &.left {
        display: flex;
        align-items: flex-end;
        padding: 3px;
        animation: ${leftLineOne} 8s infinite linear;

        .smaller-one {
          background: linear-gradient(90deg, gray 50%, transparent 50%),
            linear-gradient(0deg, gray 50%, transparent 50%),
            linear-gradient(90deg, gray 50%, transparent 50%),
            linear-gradient(0deg, gray 50%, transparent 50%);
          background-repeat: repeat-x, repeat-y;
          background-size: 15px 3px, 3px 15px, 15px 0px, 0px 15px;
          padding: 3px;
          animation: ${clockwise} 4s infinite linear;
        }
      }

      &.right {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        background: linear-gradient(90deg, gray 50%, transparent 50%),
          linear-gradient(0deg, gray 50%, transparent 50%),
          linear-gradient(90deg, gray 50%, transparent 50%),
          linear-gradient(0deg, gray 50%, transparent 50%);
        background-repeat: repeat-x, repeat-y;
        background-size: 15px 3px, 0px 15px, 15px 0px, 3px 15px;
        padding: 3px;
        animation: ${counterclockwise} 4s infinite linear;

        .smaller-one {
          padding: 3px;
          animation: ${rightLineOne} 8s infinite linear;
        }
      }

      .smaller-one {
        width: 10px;
        height: 130px;
      }
    }
  }

  /* row 2 */
  .bridge-two {
    width: 100px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    .upper-one {
      width: 100px;
      height: 60px;
      box-sizing: border-box;

      &.left {
        padding: 3px;
        animation: ${leftLineTwo} 8s infinite linear;
      }

      &.right {
        background: linear-gradient(90deg, gray 50%, transparent 50%),
          linear-gradient(0deg, gray 50%, transparent 50%),
          linear-gradient(90deg, gray 50%, transparent 50%),
          linear-gradient(0deg, gray 50%, transparent 50%);
        background-repeat: repeat-x, repeat-y;
        background-size: 15px 3px, 0px 15px, 15px 0px, 0px 15px;
        padding: 3px;
        animation: ${counterclockwise} 4s infinite linear;
      }
    }

    .lower-one {
      width: 100px;
      height: 30px;
      box-sizing: border-box;

      &.left {
        background: linear-gradient(90deg, gray 50%, transparent 50%),
          linear-gradient(0deg, gray 50%, transparent 50%),
          linear-gradient(90deg, gray 50%, transparent 50%),
          linear-gradient(0deg, gray 50%, transparent 50%);
        background-repeat: repeat-x, repeat-y;
        background-size: 15px 3px, 0px 15px, 15px 0px, 0px 15px;
        padding: 3px;
        animation: ${clockwise} 4s infinite linear;
      }

      &.right {
        padding: 3px;
        animation: ${rightLineTwo} 8s infinite linear;
      }
    }
  }

  /* row 3 */
  .bridge-three {
    width: 30px;
    height: 30px;

    &.left {
      background: linear-gradient(90deg, #176af3 50%, transparent 50%),
        linear-gradient(0deg, #176af3 50%, transparent 50%),
        linear-gradient(90deg, #176af3 50%, transparent 50%),
        linear-gradient(0deg, #176af3 50%, transparent 50%);
      background-repeat: repeat-x, repeat-y;
      background-size: 15px 0px, 0px 15px, 15px 0px, 3px 15px;
      padding: 3px;
      animation: ${counterclockwise} 1s infinite linear;
    }

    &.right {
      background: linear-gradient(90deg, #78f78b 50%, transparent 50%),
        linear-gradient(0deg, #78f78b 50%, transparent 50%),
        linear-gradient(90deg, #78f78b 50%, transparent 50%),
        linear-gradient(0deg, #78f78b 50%, transparent 50%);
      background-repeat: repeat-x, repeat-y;
      background-size: 15px 0px, 3px 15px, 15px 0px, 0px 15px;
      padding: 3px;
      animation: ${clockwise} 1s infinite linear;
    }
  }

  /* row 4 */
  .buy-in,
  .sell-out {
    width: 120px;
    height: 30px;
    border-radius: 10px;
    text-align: center;
    line-height: 2;
  }

  .buy-in {
    background-color: #176af3;
    color: white;
  }

  .sell-out {
    background-color: #78f78b;
  }

  .empty-four {
    width: 30px;
    height: 20px;
  }

  /* row 5 */
  .middle {
    width: 100px;
    height: 80px;
    text-align: center;
    display: flex;
    align-items: center;

    > div {
      width: 100%;
      background-color: #a2a2a2;
      border-radius: 10px;
      height: 30px;
      line-height: 2;
    }
  }

  .left,
  .right {
    width: 40px;
    height: 40px;
  }

  .left {
    background: linear-gradient(90deg, #176af3 50%, transparent 50%),
      linear-gradient(0deg, #176af3 50%, transparent 50%),
      linear-gradient(90deg, #176af3 50%, transparent 50%),
      linear-gradient(0deg, #176af3 50%, transparent 50%);
    background-repeat: repeat-x, repeat-y;
    background-size: 15px 0px, 0px 15px, 15px 3px, 3px 15px;
    padding: 3px;
    animation: ${counterclockwise} 1s infinite linear;
  }

  .right {
    background: linear-gradient(90deg, #78f78b 50%, transparent 50%),
      linear-gradient(0deg, #78f78b 50%, transparent 50%),
      linear-gradient(90deg, #78f78b 50%, transparent 50%),
      linear-gradient(0deg, #78f78b 50%, transparent 50%);
    background-repeat: repeat-x, repeat-y;
    background-size: 15px 0px, 3px 15px, 15px 3px, 0px 15px;
    padding: 3px;
    animation: ${clockwise} 1s infinite linear;
  }

  /* row 6 */
  .arrow-six {
    display: flex;
    flex-direction: column;
    position: relative;
    animation: ${movement} 0.5s infinite linear;
  }

  .client {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: darkblue;
    text-align: center;
    line-height: 5;
  }
`;

export default RedBlockDiagram;
