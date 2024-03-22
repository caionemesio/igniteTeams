import { TextInput, TextInputProps } from "react-native";
import { Container } from "./Style";
import myTheme from "src/theme";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
}

export default function Input({ inputRef, ...rest }: Props) {
  return (
    <Container
      ref={inputRef}
      placeholderTextColor={myTheme.COLORS.GRAY_300}
      {...rest} />
  )
}