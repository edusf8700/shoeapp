import { Heading, Image, IPressableProps, Pressable, Text} from 'native-base';
import { ImageSourcePropType } from 'react-native';

export type ProductProps = {
  id: string;
  brand: string;
  name: string;
  price: string;
  thumb: ImageSourcePropType;
  image: ImageSourcePropType;
  description: string;
}

type Props = IPressableProps & {
  product: ProductProps;
}


export function Product({ product, ...rest }: Props) {
  return (
    <Pressable
     bg="gray.500"
     mr={2}
     mb={2}
     p={2}
     w={40}
     h={40}
     alignItems="center"
     rounded="md"
     {...rest}
    >
      <Image 
        source={product.thumb}
        flex={1}
        resizeMode="cover"
        alt="Imagem do produto"
      />

      <Heading
        color="white"
        fontSize="lg"
        textAlign="center"
        fontFamily="heading"
        mt={2}
      >
        {product.name}
      </Heading>

      <Text
        color="gray.200"
      >
        R$ {product.price}
      </Text>
    </Pressable>
  );
} 