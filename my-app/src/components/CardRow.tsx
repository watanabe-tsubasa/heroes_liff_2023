import { Flex, Spacer, Text } from "@chakra-ui/react";

type CardRowProps = {
  statusName: '圧倒的存在感' | '声の大きさ' | '動作の激しさ' | '絶対的オーラ' | '周囲への影響力';
  param: number;
}

export const CardRow: React.FC<CardRowProps> = (props) => {

  const { statusName, param } = props;

  return (
    <Flex pl={2} pr={2} align='flex-end'>
      <Text fontSize='lg'>
        {statusName}
      </Text>
      <Spacer />
      <Text fontSize='2xl' pr={2}>
        {param}
      </Text>
    </Flex>
  );
}