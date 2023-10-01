import { Flex, Spinner } from "@chakra-ui/react"

export const CommonSpinner = () => {
  return (
    <Flex w='100%' h='90vH' align='center' justify='center'>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
    </Flex>
  )
}