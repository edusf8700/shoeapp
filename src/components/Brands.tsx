import { FlatList } from 'native-base';
import { Brand } from './Brand';

import { BRANDS } from "../data/brands";

type Props = {
  selected: string;
  setSelected: (brand: string) => void;
};

export function Brands({ selected, setSelected }: Props) {
  return (
    <FlatList
      data={BRANDS}
      keyExtractor={item => item.id}
      renderItem={({ item })=> (
        <Brand 
          brand={item}
          selected={selected}
          setSelected={setSelected}
        />
      )}
      horizontal
      _contentContainerStyle={{ px: 8 }}
      showsHorizontalScrollIndicator={false}
      mt={15}
      maxH={10}
      minH={10}
    />
  );
}