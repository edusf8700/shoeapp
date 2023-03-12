import { Avatar, Heading, HStack, IconButton, Text, Icon, VStack } from 'native-base';
import { Feather } from '@expo/vector-icons';

import userPhotoDefault from '../assets/userPhotoDefault.png';

export function HomeHeader() {
  return (
    <HStack
      w="full" 
      pt={16}
      pb={5}
      px={8}
      bg="gray.600"
      alignItems="center"  
    >
      <Avatar
        source={userPhotoDefault}
        size={16}
        borderColor="gray.400"
        borderWidth={2}
      />

      <VStack
        flex={1}
        pl={4}
      >
        <Text
          color="gray.100"
          fontSize="md"
        >Olá,
        </Text>
        <Heading
          color="gray.100"
          fontSize="md"
          fontFamily="heading"
        >
          Eduardo
        </Heading>
      </VStack>

      <IconButton
        icon={<Icon as={Feather} name='log-out' size={7} color="gray.200"/>}
      />
    </HStack>
  );
}