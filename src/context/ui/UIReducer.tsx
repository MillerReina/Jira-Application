import { UIState } from './';

type UIActionType =
  | { type: 'Open Sidebar' }
  | { type: 'Close Sidebar' }
  | { type: 'Is Adding Entry'; payload: boolean }
  | { type: 'Start Draggin' }
  | { type: 'End Draggin' };

export const UIReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case 'Open Sidebar':
      return { ...state, sideMenuOpen: true };
    case 'Close Sidebar':
      return { ...state, sideMenuOpen: false };
    case 'Is Adding Entry':
      return { ...state, isAddingEntry: action.payload };
    case 'Start Draggin':
      return { ...state, isDragging: true };
    case 'End Draggin':
      return { ...state, isDragging: false };
    default:
      return state;
  }
};
