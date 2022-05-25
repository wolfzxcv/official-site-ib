import { isIOS } from '@/utils';
import { Box, Flex, Stack } from '@chakra-ui/react';
import React from 'react';

const WCG6DL: React.FC<{}> = () => {
  return (
    <>
      {/* PC layout 1280px up */}
      <Box
        display={{ base: 'none', md: 'block' }}
        bgImage="../assets/images/activity_WCG6DL.jpg"
        bgPosition="center top"
        bgRepeat="no-repeat"
        height="1103px"
      >
        <Flex pb="170px" justify="center">
          132
        </Flex>
        <Flex justify="center">
          <Stack spacing={1} color="white" width="800px" fontSize="14px">
            <WCG6DLContent />
          </Stack>
        </Flex>
      </Box>

      {/* Mobile layout less than 831px */}
      <Flex
        display={{ base: 'flex', md: 'none' }}
        height="92vh"
        overflow="hidden"
        backgroundImage="url('../assets/images/activity_WCG6DL_M.jpg')"
        bgPosition="top center"
        bgSize="cover"
        flexDir="column"
        justify="flex-start"
        align="center"
      >
        <Box mt={isIOS() ? '225px' : '200px'} width="300px" color="white">
          <WCG6DLSummary />
        </Box>

        <Box mt="60px" p={3} width="90vw" fontSize="10px" bg="white">
          <WCG6DLContent />
        </Box>
      </Flex>
    </>
  );
};

export const WCG6DLSummary: React.FC<{}> = () => (
  <>
    <span style={{ color: 'yellow' }}>
      六月代理专项活动，活动期间六名全新的激活客户，
    </span>
    随时向客户提供本次活动。每新增一个代理可以获得1000美元的额外奖金。额外增加2000美元的客户申请参加本次活动。次活动可与其他活动重复。
  </>
);

export const WCG6DLContent: React.FC<{}> = () => (
  <>
    <Box>活动規则及注意事项</Box>
    <Box>- 活动时间:6月1日-6月30日</Box>
    <Box>- 全新客户定义:过去一年未有在WCG MARKETS开户</Box>
    <Box>- 活跃客户定义:活动期间入金不低于1000美元并交易手数不低于一手</Box>
    <Box>- 獎金于活动结束14天内发放</Box>
    <Box>- 代理于达到要求之后需自行通知客服开始进行交易量计算记录</Box>
    <Box>
      -
      公司保留随时修改、暂停、终止本活动计划及任何相關规则條款之權利及其解释权，毋须事前通知客户
    </Box>
    <Box>
      -
      若客户通过超短线刷单持仓低于5分钟的订单不计入本次活动的手数，AB仓交易或者不正规交易套取赠金，
      WCG有权停止客户交易，取消活动资格井按照WCG交易细则中異常交易的处理方法进行处理
    </Box>
    <Box>
      -贵金屬，原油交易手数定义：黄金1标准手100盎司，白銀一标准手2500盎司，原油1标准手1000桶
    </Box>
    <Box>- 如活动期间出金则视为放弃本次活动</Box>
  </>
);

export default WCG6DL;
