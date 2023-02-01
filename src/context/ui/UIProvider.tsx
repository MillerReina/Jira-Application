import { useReducer } from 'react';
import { UIContext, UIReducer } from './';

export interface UIState {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
};

export const UIProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

  const openSideMenu = () => dispatch({ type: 'Open Sidebar' });

  const closeSideMenu = () => dispatch({ type: 'Close Sidebar' });

  const setAddingEntry = (state: boolean) => dispatch({ type: 'Is Adding Entry', payload: state });

  const startDragging = () => dispatch({ type: 'Start Draggin' });

  const endDragging = () => dispatch({ type: 'End Draggin' });

  const values = {
    ...state,
    closeSideMenu,
    openSideMenu,
    setAddingEntry,
    startDragging,
    endDragging
  };

  return <UIContext.Provider value={values}>{children}</UIContext.Provider>;
};
