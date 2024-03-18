import { TouchableOpacity } from "react-native";
import myTheme from "src/theme";
import styled from "styled-components/native";
import { UsersThree } from "phosphor-react-native";

export const Container = styled(TouchableOpacity)`
    width: 100%;
    height: 90px;
    background-color:${myTheme.COLORS.GRAY_500};
    flex-direction: row;
    align-items: center;
    padding: 24px;
    margin-bottom: 12px;
`

export const Title = styled.Text`
    font-size: ${myTheme.FONT_SIZE.MD}px;
    color:${myTheme.COLORS.GRAY_200};
    font-family: ${myTheme.FONT_FAMILY.REGULAR};
`

export const Icon = styled(UsersThree).attrs(() => ({
    size: 32,
    color: myTheme.COLORS.GREEN_700,
    weight: 'fill'
}))`
    margin-right: 20px;
`