import { VStack, Image, HStack, Heading,Text, ScrollView } from "native-base";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { ScreenHeader } from "../components/ScreenHeader";
import { Sizes } from "../components/Sizes";

import adidas from "../assets/tennis/adidas_adizero.png";

export function Details() {
  return(
    <>
      <ScreenHeader title="Detalhes do produto"/>
      <ScrollView flex={1} bg="gray.700" px={6} showsVerticalScrollIndicator={false}>
        <Image 
          source={adidas} 
          w={56} 
          h={56} 
          alt="Imagem do produto"
          alignSelf="center"
        />

        <HStack justifyContent="space-between">
          <VStack>
            <Heading color="white" fontSize="xl">
              Adidas
            </Heading>
            <Text color="gray.200" fontSize="md" fontFamily="heading">
              R$ 199,00
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, ratione eligendi modi, eum natus aliquam minus perferendis ab autem nihil architecto laudantium illum fugiat omnis ipsam veritatis nemo consectetur sed!
        </Text>
        
        <Heading color="gray.200" fontFamily="heading" fontSize="md">Tamanhos</Heading>
        <Sizes/>

        <Button title="Adicionar ao carinho" mt={8}/>
        
      </ScrollView>
    </>
  );
}