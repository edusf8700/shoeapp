import { VStack } from "native-base";
import { useState } from "react";

import { Brands } from "../components/Brands";
import { HeaderList } from "../components/HeaderList";
import { HomeHeader } from "../components/HomeHeader";
import { Products } from "../components/Products";

import { PRODUCTS } from "../data/products";

export function Home() {
  const [selected, setSelected] = useState('Nike');

  const productsFiltered = PRODUCTS.filter(product => product.brand === selected);

  return(
    <VStack flex={1} bg="gray.700">
      <HomeHeader/>
      <Brands selected={selected} setSelected={setSelected}/>
      <HeaderList brand={productsFiltered[0].brand} length={String(productsFiltered.length)}/>
      <Products products={productsFiltered}/>
    </VStack>
  );
}