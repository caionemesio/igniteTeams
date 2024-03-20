import { TouchableOpacity } from "react-native";
import myTheme from "src/theme";
import styled, { css } from "styled-components/native";

export type FilterStyleProps = {
  isActive?: boolean;
}

export const Container = styled(TouchableOpacity) <FilterStyleProps>`
 ${({ isActive }: FilterStyleProps) =>
    isActive && css`border: 1px solid ${myTheme.COLORS.GREEN_700}`};
  
 border-radius:4px;
 margin-right:12px;
 height:38px;
 width:70px;
 align-items:center;
 justify-content:center;
`

export const Title = styled.Text`
  text-transform: uppercase;
  font-family: ${myTheme.FONT_FAMILY.BOLD};
  font-size:${myTheme.FONT_SIZE.SM}px;
  color: ${myTheme.COLORS.WHITE};
`












