import { createContext } from 'react';

interface GlobalActions {
  toggleIsInDarkMode?: () => void;
};

const globalActions: GlobalActions = {};

const GlobalActionsContext = createContext(globalActions);

export default GlobalActionsContext;