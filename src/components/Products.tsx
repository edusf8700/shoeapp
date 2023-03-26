import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'native-base';
import { Product, ProductProps } from './Product';

type Props = {
  products: ProductProps[];
};

export function Products({ products }: Props) {
  const { navigate } = useNavigation();
  
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={({ item })=> (
        <Product 
          product={item}
          onPress={()=>navigate('Details', { productId: item.id})}
        />
      )}
      _contentContainerStyle={{ px: 8, paddingBottom: 10 }}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      mt={15}
    />
  );
}