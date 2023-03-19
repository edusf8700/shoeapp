import { Heading, HStack, Icon, Box} from 'native-base';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type Props = {
  title: string; 
}
 
export function ScreenHeader({ title }: Props) {
  const { goBack } = useNavigation();

  return (
    <HStack
      w="full" 
      pt={16}
      pb={6}
      px={6}
      bg="gray.600"
      alignItems="center"  
      justifyContent="space-between"
    >
      <Icon 
        as={Feather} 
        name='arrow-left' 
        size={6} 
        color="green.500" 
        onPress={goBack}
      />

      <Heading color="white" fontSize="xl">
        {title}
      </Heading>

      <Box w={6} h={6}/>
    </HStack>
  );
}