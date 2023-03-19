import { FlatList } from 'native-base';
import { useState } from 'react';
import { Size } from './Size';

const SIZES = ["35","36","37","38","39","40","41","42","43"];

export function Sizes() {
  const [selected, setSelected ] = useState("35");

  return (
    <FlatList
      data={SIZES}
      keyExtractor={item => item}
      renderItem={({ item })=> (
        <Size 
          sizeItem={item}
          selected={selected}
          setSelected={setSelected}
        />
      )}
      horizontal
      //_contentContainerStyle={{ px: 8 }}
      showsHorizontalScrollIndicator={false}
      mt={15}
      maxH={10}
      minH={10}
    />
  );
}