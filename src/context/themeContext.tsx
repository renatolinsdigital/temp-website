import { createContext, useContext } from 'react';
import { useStorageState } from 'shared/hooks';
import { DefaultTheme } from 'styled-components';
import { defaultTheme, lightVariantColors, darkVariantColors } from '../theme';

interface ProviderProps {
  children: JSX.Element;
}

interface ThemeContextProps {
  theme?: DefaultTheme;
}

const ThemeContext = createContext<ThemeContextProps>({});
const ToggleDarkModeContext = createContext<() => void>(() => null);

const useThemeContext = function () {
  return useContext(ThemeContext);
};

const useToggleDarkModeContext = function () {
  return useContext(ToggleDarkModeContext);
};

const AppThemeProvider = ({ children }: ProviderProps) => {

  const [isInDarkMode, setIsInDarkMode] = useStorageState<boolean>('isInDarkMode', true);

  const toggleIsInDarkMode = () => {
    setIsInDarkMode(value => !value);
  };

  const theme: DefaultTheme = {
    isInDarkMode,
    ...defaultTheme,
    variantColors: isInDarkMode ? darkVariantColors : lightVariantColors
  };

  return (
    <ThemeContext.Provider value={{ theme }}>
      <ToggleDarkModeContext.Provider value={toggleIsInDarkMode}>
        {children}
      </ToggleDarkModeContext.Provider>
    </ThemeContext.Provider>);
};


export { AppThemeProvider, useThemeContext, useToggleDarkModeContext };