import myTheme from "src/theme";
import styled from "styled-components/native";


export const Container = styled.View`
    width: 100%;
    margin: 32px 0;
`

export const Title = styled.Text`
    text-align: center;
    font-size: ${myTheme.FONT_SIZE.XL}px;
    font-family: ${myTheme.FONT_FAMILY.BOLD};
    color: ${myTheme.COLORS.WHITE};
`

export const SubTitle = styled.Text`
    text-align: center;
    font-size: ${myTheme.FONT_SIZE.MD}px;
    font-family: ${myTheme.FONT_FAMILY.REGULAR};
    color: ${myTheme.COLORS.GRAY_300};
`