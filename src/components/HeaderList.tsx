import { Heading, HStack, Text } from 'native-base';

type Props = {
  brand: string;
  length: string;
}

export function HeaderList({brand, length}: Props) {
  return (
    <HStack
      alignItems="center"
      justifyContent="space-between"
      px={8}
      mt={6}
    >
      <Heading color="gray.200" fontFamily="heading" fontSize="md">
        {brand}
      </Heading>
      <Text color="gray.200" fontSize="sm">
        {length}
      </Text>
    </HStack>
  );
}