import { Input as NativeBaseInput, IInputProps } from 'native-base';

export function Input({...rest}: IInputProps) {
  return (
    <NativeBaseInput
      bg="gray.800"
      borderColor="gray.600"
      h={14}
      color="white"
      fontSize="sm"
      px={4}
      placeholderTextColor="gray.300"
      _focus={{
        bg:"gray.800",
        borderColor: "gray.600"
      }}
      {...rest}
    />
  );
}