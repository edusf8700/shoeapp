import { Image, IPressableProps, Pressable} from 'native-base';
import { ImageSourcePropType } from 'react-native';

type Brand = {
  id: string;
  name: string;
  image: ImageSourcePropType;
}

type Props = IPressableProps & {
  selected: string;
  brand: Brand;
  setSelected: (brand:string) => void;
}


export function Brand({ selected,  brand, setSelected, ...rest }: Props) {
  return (
    <Pressable
     bg="gray.600"
     mr={3}
     w={24}
     h={10}
     alignItems="center"
     justifyContent="center"
     overflow="hidden"
     rounded="md"
     isPressed={selected === brand.name}
     _pressed={{
        borderColor: "green.500",
        borderWidth: 1
     }}
     onPress={() => setSelected(brand.name)}
     {...rest}
    >
      <Image 
        source={brand.image}
        w={20}
        h={7}
        resizeMode="contain"
        alt="Brand Image"
      />
    </Pressable>
  );
} 