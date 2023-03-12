import { FlatList } from 'native-base';
import { Product, ProductProps } from './Product';

type Props = {
  products: ProductProps[];
};

export function Products({ products }: Props) {
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={({ item })=> (
        <Product 
          product={item}
        />
      )}
      _contentContainerStyle={{ px: 8, paddingBottom: 10 }}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      mt={15}
    />
  );
}