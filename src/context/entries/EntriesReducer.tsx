import { IEntry } from '@/interfaces';
import { EntriesState } from './';

type EntriesActionType = { type: 'Add Entry'; payload: IEntry } | { type: 'Update Entry State'; payload: IEntry };

export const EntriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
  switch (action.type) {
    case 'Add Entry':
      return { ...state, entries: [...state.entries, action.payload] };
    case 'Update Entry State':
      return {
        ...state,
        entries: state.entries.map((entry) => {
          if (entry._id === action.payload._id) {
            entry.status = action.payload.status;
            entry.description = action.payload.description;
          }
          return entry;
        }),
      };
    default:
      return state;
  }
};
