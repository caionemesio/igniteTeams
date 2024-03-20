import myTheme from "src/theme";
import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'
export const Container = styled.View`
  width: 100%;
  height: 56px;
  background-color: ${myTheme.COLORS.GRAY_500};
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  border-radius: 6px;

`
export const Name = styled.Text`
  font-size: ${myTheme.FONT_SIZE.MD}px;
  color: ${myTheme.COLORS.GRAY_200};
  font-family: ${myTheme.FONT_FAMILY.REGULAR};
  flex: 1;
`
export const Icon = styled(MaterialIcons).attrs(() => ({
  size: 24,
  color: myTheme.COLORS.GRAY_200
}))`
  margin-left: 16px;
  margin-right: 4px;
  
`