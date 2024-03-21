import { SafeAreaView } from 'react-native-safe-area-context';
import myTheme from 'src/theme';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${myTheme.COLORS.GRAY_600};
  padding: 24px;
`;
