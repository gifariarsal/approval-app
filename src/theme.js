import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      primary900: '#212529',
      primary800: '#343A40',
      primary700: '#495057',
      primary600: '#6C757D',
      primary500: '#ADB5BD',
      primary400: '#CED4DA',
      primary300: '#DEE2E6',
      primary200: '#E9ECEF',
      primary100: '#F8F9FA',
      primary50: '#FAFAFA',
    },
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
});

export default theme;
