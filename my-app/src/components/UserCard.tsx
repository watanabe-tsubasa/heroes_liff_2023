import { Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Heading, Image, Spacer, Stack, StackDivider, Text } from "@chakra-ui/react";
import { testData } from "../utils/testData";
import { CardRow } from "./CardRow";
import { Liff } from "@line/liff/exports";
import { useQuery } from "@tanstack/react-query";

type UserCardProps = {
  userId: string,
  liff: Liff
}

const fetchUserData = async (userId: string) => {
  const res = await fetch(`https://glorious-yodel-qggv9q7r6r42659j-3000.preview.app.github.dev/api/v1/${userId}`);
  if (!res.ok) {
    throw new Error('Network response was not ok.');
  }
  return res.json();
};

export const UserCard: React.FC<UserCardProps> = (props) => {

  const { userId, liff } = props;
  const { avatar } = testData;

  const { data: userParams, error } = useQuery(['user', userId], () => fetchUserData(userId), {
    retry: 1, // retry once on failure
  });

  if (error) {
    return <p>まだししゃもがいないみたい・・・</p>;
  }

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
            <Heading size='md'>ステータス</Heading>
            <CardRow statusName='圧倒的存在感' param={userParams.overwhelmingPresence} />
            <CardRow statusName='声の大きさ' param={userParams.powerfulVoiceOrSound} />
            <CardRow statusName='動作の激しさ' param={userParams.intenseActions} />
            <CardRow statusName='絶対的オーラ' param={userParams.auraOfAwe} />
            <CardRow statusName='周囲への影響力' param={userParams.impactOnSurroundings} />
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