
import { VStack } from "native-base";
import { ScreenHeader } from "../components/ScreenHeader";

export function Cart() {
  return(
    <VStack flex={1} bg="gray.700">
      <ScreenHeader title="Carrinho"/>
    </VStack>
  );
}