import { TouchableOpacity } from "react-native";
import myTheme from "src/theme";
import styled from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
    type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity) <Props>`

    flex:1;
    min-height: 56px;
    max-height: 56px;
    background-color: ${({ type }: Props) => type === 'PRIMARY' ? myTheme.COLORS.GREEN_700 : myTheme.COLORS.RED_DARK};
    border-radius: 6px;
    justify-content: center;
    align-items: center;
`

export const Title = styled.Text`
    font-size: ${myTheme.FONT_SIZE.MD}px;
    color: ${myTheme.COLORS.WHITE};
    font-family: ${myTheme.FONT_FAMILY.BOLD};
    `