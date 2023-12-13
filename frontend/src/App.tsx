import { useState } from 'react';
import './styles/global.scss';
import { ThemeProvider } from 'styled-components';
import  { GlobalStyles, darkTheme, lightTheme, ITheme } from './styles/theme';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

function App() {
  const [theme, setTheme] = useState<keyof ITheme>('dark');
  const isDarkTheme = theme === 'dark';
  const toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');
  const currentTheme: ITheme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <>
        <GlobalStyles theme={currentTheme} />
        <div className='page'>
          <Navbar />
          <Hero />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
