import myTheme from "src/theme";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const Message = styled.Text`

    text-align: center;
    font-size: ${myTheme.FONT_SIZE.SM}px;
    font-family: ${myTheme.FONT_FAMILY.REGULAR};
    color: ${myTheme.COLORS.GRAY_300};
`