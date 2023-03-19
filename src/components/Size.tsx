import { IPressableProps, Pressable, Text} from 'native-base';

type Props = IPressableProps & {
  selected: string;
  sizeItem: string;
  setSelected: (sizeItem:string) => void;
}


export function Size({ selected,  sizeItem, setSelected, ...rest }: Props) {
  return (
    <Pressable
     bg="gray.600"
     mr={3}
     w={10}
     h={10}
     alignItems="center"
     justifyContent="center"
     overflow="hidden"
     rounded="xs"
     isPressed={selected === sizeItem}
     _pressed={{
        borderColor: "green.500",
        borderWidth: 1
     }}
     onPress={() => setSelected(sizeItem)}
     {...rest}
    >
      <Text color={selected === sizeItem ? "green.500": "gray.200"} fontSize="xs">{sizeItem}</Text>
    </Pressable>
  );
} 