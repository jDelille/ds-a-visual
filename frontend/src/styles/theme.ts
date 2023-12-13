import { createGlobalStyle, DefaultTheme } from 'styled-components';

export interface ITheme extends DefaultTheme {
  body: string;
  button: string;
  text: string;
  modal: string;
  hover: string;
  border: string;
  borderMedium: string;
  borderLarge: string;
  container: string;
  footer: string;
  unselected: string;
  white: string;
}

export const GlobalStyles = createGlobalStyle<{theme: ITheme}>`
  html {
    background: ${({ theme }: { theme: ITheme }) => theme.body};
    color: ${({ theme }: { theme: ITheme }) => theme.text};
  }
`;

export const lightTheme: ITheme = {
  body: '#E8E8E8',
  white: '#fff',
  text: '#262626',
  button: '#ffffff',
  border: '1px solid #d3d3d3',
  borderMedium: '2px solid #d3d3d3',
  borderLarge: '4px solid #d3d3d3',
  modal: '#E8E8E8',
  unselected: '#F2F2F2',
  hover: '#ffffff',
  container: '#F2F2F2',
  footer: '#fff',
};

export const darkTheme: ITheme = {
  body: '#262626',
  text: '#f1f1f1',
  white: '#fff',
  button: '#333333',
  border: '1px solid #5e5e5e',
  borderMedium: '2px solid #5e5e5e',
  borderLarge: '4px solid #5e5e5e',
  modal: '#262626',
  unselected: '#4F4F4F',
  hover: '#6B6B6B',
  container: '#333333',
  footer: '#222',
};
