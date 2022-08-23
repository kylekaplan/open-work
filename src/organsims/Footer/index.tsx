import {
  Text,
  Link,
  VStack,
} from '@chakra-ui/react';

const Footer = () => {
  return (
    <VStack mt={7} p={10} textAlign="center">
      <Text>
        We ❤️ open source (duh).
      </Text>
      <Text>
        View or contribute to our code on{' '}
        <Link
          href="https://tryopenwork.com"
          isExternal
          textDecoration="underline"
        >
          Github
        </Link>
        {'.'}
      </Text>
    </VStack>
  )
}

export default Footer;
