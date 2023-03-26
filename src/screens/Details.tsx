import { useEffect, useState } from "react";
import { VStack, Image, HStack, Heading,Text, ScrollView } from "native-base";
import { useRoute } from "@react-navigation/native";

import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { ScreenHeader } from "../components/ScreenHeader";
import { Sizes } from "../components/Sizes";

import { PRODUCTS } from "../data/products";
import { ProductProps } from "../components/Product";

type PropsParams = {
  productId: string;
}

export function Details() {
  const { params } = useRoute();
  const { productId } = params as PropsParams;

  const [product, setProduct] = useState<ProductProps>({} as ProductProps);

  function fetchProduct() {
    const response = PRODUCTS.find(p => p.id === productId) as ProductProps;

    setProduct(response);
    
  }  

  useEffect(() => fetchProduct(),[productId])

  return(
    <>
      <ScreenHeader title="Detalhes do produto"/>
      <ScrollView flex={1} bg="gray.700" px={6} showsVerticalScrollIndicator={false}>
        <Image 
          key={String(new Date().getTime())}
          source={product?.image} 
          w={56} 
          h={56} 
          alt="Imagem do produto"
          alignSelf="center"
        />

        <HStack justifyContent="space-between">
          <VStack>
            <Heading color="white" fontSize="xl">
              {product?.name}
            </Heading>
            <Text color="gray.200" fontSize="md" fontFamily="heading">
              R$ {product?.price}
            </Text>
          </VStack>

          <VStack alignItems="flex-end">
            <Text color="gray.200" fontSize="sm" pb={2}>Quantidade</Text>
            <Input 
              w={14} 
              keyboardType="numeric"
              textAlign="center"
            />
          </VStack>
        </HStack>  
        
        <Text color="gray.200" fontSize="md" textAlign="justify" pb={8} pt={2}>
          {product?.description}
        </Text>
        
        <Heading color="gray.200" fontFamily="heading" fontSize="md">Tamanhos</Heading>
        <Sizes/>

        <Button title="Adicionar ao carinho" mt={8}/>
        
      </ScrollView>
    </>
  );
}