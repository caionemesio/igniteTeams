import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons"
import myTheme from "src/theme";

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: ButtonIconTypeStyleProps
}


export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`

export const Icon = styled(MaterialIcons).attrs<Props>(({ type }: Props) => ({
  size: 24,
  color: type === 'PRIMARY' ? myTheme.COLORS.GREEN_700 : myTheme.COLORS.RED
}))``