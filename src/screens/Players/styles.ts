import myTheme from "src/theme";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${myTheme.COLORS.GRAY_600};
  padding:24px;
`

export const Form = styled.View`
  width: 100%;
  background-color: ${myTheme.COLORS.GRAY_700};
  flex-direction: row;
  justify-content: center;
  border-radius: 6px;
`

export const HeaderList = styled.View`
  width: 100%;
  flex-direction:row ;
  align-items: center;
  margin:32px 0 12px
`

export const NumbersOfPlayers = styled.Text`
  color:${myTheme.COLORS.GRAY_200};
  font-family: ${myTheme.FONT_FAMILY.BOLD};
  font-size: ${myTheme.FONT_SIZE.SM}px;

`