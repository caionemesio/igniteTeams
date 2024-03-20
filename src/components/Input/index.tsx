import { TextInputProps } from "react-native";
import { Container } from "./Style";
import myTheme from "src/theme";



export default function Input({ ...rest }: TextInputProps) {
  return (
    <Container
      placeholderTextColor={myTheme.COLORS.GRAY_300}
      {...rest} />
  )
}