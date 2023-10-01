import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Heading, Image, Spacer, Stack, StackDivider, Text } from "@chakra-ui/react";
import { testData } from "../utils/testData";
import { CardRow } from "./CardRow";
import { Liff } from "@line/liff/exports";

type UserCardProps = {
  userId: string,
  liff: Liff
}

export const UserCard: React.FC<UserCardProps> = (props) => {

  const { userId, liff } = props;

  const {
    avatar,
    overwhelmingPresence,
    powerfulVoiceOrSound,
    intenseActions,
    auraOfAwe,
    impactOnSurroundings
  } = testData;

  return (
    <Card
     h='95vH'
     w='95%'
     m={4}
    >
      <Flex h="100%" direction="column" overflow="auto">     
        <CardHeader style={{ flex: '50%' }}>
          <Flex h="100%" justify="center" align="center">
            <Image
              src={avatar}
              alt='userAvatar'
              borderRadius='lg'
            />
          </Flex>
        </CardHeader>
        <Divider />
        <CardBody style={{ flex: '40%' }}>
          <Stack mt='2' spacing='1' divider={<StackDivider />}>
            <Heading size='md'>ステータス{userId}</Heading>
            <CardRow statusName='圧倒的存在感' param={overwhelmingPresence} />
            <CardRow statusName='声の大きさ' param={powerfulVoiceOrSound} />
            <CardRow statusName='動作の激しさ' param={intenseActions} />
            <CardRow statusName='絶対的オーラ' param={auraOfAwe} />
            <CardRow statusName='周囲への影響力' param={impactOnSurroundings} />
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter style={{ flex: '10%' }}>
          <ButtonGroup spacing={2}>
            <Button variant='outline' colorScheme='blue'>
              ランキング
            </Button>
            <Button variant='solid' colorScheme='blue' onClick={() => {liff.closeWindow()}}>
              閉じる
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Flex>
    </Card>
  );
}