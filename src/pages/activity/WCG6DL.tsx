import HTMLHead from '@/components/Base/HTMLHead';
import LiveChat from '@/components/Base/LiveChat';
import { openChatWindow } from '@/utils';
import { Box, Flex, Image, Link } from '@chakra-ui/react';
import React from 'react';

const WCG6DL: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />
      <LiveChat />
      {/* PC layout 1280px up */}
      <Flex
        display={{ base: 'none', md: 'block' }}
        bgImage="../assets/images/activity_WCG6DL.jpg"
        bgPosition="top center"
        bgSize="cover"
        height="1103px"
      >
        <Flex flexDir="column" align="center" justify="center">
          <Box pt="370px" width="600px" color="white">
            <WCG6DLSummary />
          </Box>

          <Flex pt="60px" justify="space-evenly" width="700px">
            <Link
              _hover={{
                opacity: 0.8,
                transition: '1s'
              }}
              href="/"
              isExternal
            >
              <Image
                _hover={{
                  opacity: 0.8,
                  transition: '1s',
                  cursor: 'pointer'
                }}
                src="../assets/images/activity_WCG6DL_b1.png"
                alt="activity_WCG6DL_b1"
              />
            </Link>

            <Link
              _hover={{
                opacity: 0.8,
                transition: '1s'
              }}
              href={process.env.NEXT_PUBLIC_USERS_CENTER_ZH}
              isExternal
            >
              <Image
                src="../assets/images/activity_WCG6DL_b2.png"
                alt="activity_WCG6DL_b2"
              />
            </Link>

            <Box
              _hover={{
                opacity: 0.8,
                transition: '1s',
                cursor: 'pointer'
              }}
              onClick={openChatWindow}
            >
              <Image
                src="../assets/images/activity_WCG6DL_b3.png"
                alt="activity_WCG6DL_b3"
              />
            </Box>
          </Flex>
          <Box pt="20px" width="600px" fontSize="12px" fontWeight="600">
            <WCG6DLContent isDesktop />
          </Box>
        </Flex>
      </Flex>

      {/* Mobile layout less than 831px */}
      <Flex
        display={{ base: 'flex', md: 'none' }}
        minH="710px"
        bg="#34c0e1"
        backgroundImage="url('../assets/images/activity_WCG6DL_M.jpg')"
        bgPosition="top center"
        bgSize="cover"
        flexDir="column"
        align="center"
      >
        <Box mt="210px" width="300px" color="white">
          <WCG6DLSummary />
        </Box>

        <Flex pt="20px" pb="10px" justify="center">
          <Link href="/" isExternal width="30%">
            <Image
              src="../assets/images/activity_WCG6DL_b1.png"
              alt="Instagram"
              mr={3}
            />
          </Link>

          <Link
            href={process.env.NEXT_PUBLIC_USERS_CENTER_ZH}
            isExternal
            width="30%"
          >
            <Image
              src="../assets/images/activity_WCG6DL_b2.png"
              alt="Instagram"
              mr={3}
            />
          </Link>

          <Box width="30%" onClick={openChatWindow}>
            <Image
              src="../assets/images/activity_WCG6DL_b3.png"
              alt="Instagram"
            />
          </Box>
        </Flex>

        <Box p={3} width="90vw" fontSize="8px" bg="white">
          <WCG6DLContent />
        </Box>
      </Flex>
    </>
  );
};

export const WCG6DLSummary: React.FC<{}> = () => (
  <>
    <span style={{ color: 'yellow' }}>
      六月代理专享活动，活动期间新增六名全新的活跃客户，
    </span>
    即可向客服申请参加本次活动。每新增一个客户该代理即可获得100美元额外奖金。额外奖金上限2000美元。本次活动可与其他活动重复。
  </>
);

const WCG6DLContentSign: React.FC<WCG6DLContentProps> = ({
  isDesktop = false
}) => <>{isDesktop ? '● ' : '- '}</>;

type WCG6DLContentProps = {
  isDesktop?: boolean;
};

export const WCG6DLContent: React.FC<WCG6DLContentProps> = ({
  isDesktop = false
}) => (
  <>
    <Box my={3}>活动規则及注意事项</Box>
    <Box>
      <WCG6DLContentSign isDesktop={isDesktop} />
      活动时间:6月1日-6月30日
    </Box>
    <Box>
      <WCG6DLContentSign isDesktop={isDesktop} />
      全新客户定义:过去一年未有在WCG MARKETS开户
    </Box>
    <Box>
      <WCG6DLContentSign isDesktop={isDesktop} />
      活跃客户定义:活动期间入金不低于1000美元并交易手数不低于一手
    </Box>
    <Box>
      <WCG6DLContentSign isDesktop={isDesktop} />
      獎金于活动结束14天内发放
    </Box>
    <Box>
      <WCG6DLContentSign isDesktop={isDesktop} />
      代理于达到要求之后需自行通知客服开始进行交易量计算记录
    </Box>
    <Box>
      <WCG6DLContentSign isDesktop={isDesktop} />
      公司保留随时修改、暂停、终止本活动计划及任何相關规则條款之權利及其解释权，毋须事前通知客户
    </Box>
    <Box>
      <WCG6DLContentSign isDesktop={isDesktop} />
      若客户通过超短线刷单持仓低于5分钟的订单不计入本次活动的手数，AB仓交易或者不正规交易套取赠金，
      WCG有权停止客户交易，取消活动资格井按照WCG交易细则中異常交易的处理方法进行处理
    </Box>
    <Box>
      <WCG6DLContentSign isDesktop={isDesktop} />
      贵金屬，原油交易手数定义：黄金1标准手100盎司，白銀一标准手2500盎司，原油1标准手1000桶
    </Box>
    <Box>
      <WCG6DLContentSign isDesktop={isDesktop} />
      如活动期间出金则视为放弃本次活动
    </Box>
  </>
);

export default WCG6DL;
