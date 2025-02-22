import { Flex, Heading, Text } from '@chakra-ui/react'

const TopNav = () => {
  return (
    <Flex w="100%" justify="space-between" align="center" pt="50px" px="100px">
      <Heading fontSize="34px" color="#007299">
        HealthConnect
      </Heading>
      <Flex justify="space-between" align="center" gap="50px">
        <Text color="#000">Features</Text>
        <Text color="#000">About Us</Text>
        <Text color="#000">Contact Us</Text>
      </Flex>
    </Flex>
  )
}

export default TopNav