import { Button as NaviteBaseButton, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
  title: string
}

export function Button({title, ...rest}: Props) {
  return (
    <NaviteBaseButton
      bg="green.700"
      w="full"
      h={14}
      {...rest}
      _pressed={{
        bg: "green.500"
      }}
    >
      <Text color="white" fontSize="sm" fontFamily="heading">{title}</Text>
    </NaviteBaseButton>
  );
}