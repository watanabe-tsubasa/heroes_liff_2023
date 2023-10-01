import { useEffect, useState } from "react";
import liff from "@line/liff";
import { Box, Flex } from "@chakra-ui/react";
import { UserCard } from "./components/UserCard";

function App() {
  const [userId, setUserId] = useState<string>('testId');
  const [liffObject, setLiffObject] = useState<any>(null);

  useEffect(() => {
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID
      })
      .then(() => {
        console.log(`liff.init() done, ${liff.getContext()}`);
        const context  = liff.getContext();
        const tempId = context?.userId || 'testId'
        setUserId(tempId);
        setLiffObject(liff)
      })
      .catch((e: Error) => {
        console.log("LIFF init failed.");
      });
  });

  return (
    <Flex
     bg="teal.100"
     w="100%"
     h="100vH"
     align="center"
     justify="center"
    >
      <UserCard userId={userId} liff={liffObject} />
    </Flex>
  );
}

export default App;
