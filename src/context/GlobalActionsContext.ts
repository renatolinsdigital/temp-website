import { createContext } from 'react';

interface GlobalActions {
  toggleIsInDarkMode?: () => void;
};

const GlobalActionsContext = createContext<GlobalActions>({});

export default GlobalActionsContext;