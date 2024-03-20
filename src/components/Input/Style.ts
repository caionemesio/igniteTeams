import { TextInput } from 'react-native'
import myTheme from 'src/theme'
import styled from 'styled-components'

export const Container = styled(TextInput)`
  flex:1;
  min-height: 56px;
  max-height: 56px;
  background-color: ${myTheme.COLORS.GRAY_700};
  font-family: ${myTheme.FONT_FAMILY.REGULAR};
  font-size: ${myTheme.FONT_SIZE.MD}px;
  color: ${myTheme.COLORS.WHITE};
  border-radius: 6px;
  padding:16px;
`