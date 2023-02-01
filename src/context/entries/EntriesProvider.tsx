import { v4 as uuidv4 } from 'uuid';
import { EntryStatus, IEntry } from '@/interfaces';
import { useReducer } from 'react';
import { EntriesContext, EntriesReducer } from './';

export interface EntriesState {
  entries: IEntry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: 'Pendiente: Primera tarea',
      createdAt: Date.now(),
      status: EntryStatus.pending,
    },
    {
      _id: uuidv4(),
      description: 'En progreso: segunda tarea',
      createdAt: Date.now(),
      status: EntryStatus.inProgress,
    },
    {
      _id: uuidv4(),
      description: 'Finalizada:  chupaaaala tarea',
      createdAt: Date.now(),
      status: EntryStatus.finished,
    },
  ],
};

export const EntriesProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(EntriesReducer, ENTRIES_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: IEntry = {
      _id: uuidv4(),
      description: description,
      createdAt: Date.now(),
      status: EntryStatus.pending,
    };
    dispatch({ type: 'Add Entry', payload: newEntry });
  };

  const updateEntryStatus = (entry: IEntry) => {
    dispatch({ type: 'Update Entry State', payload: entry });
  };

  return <EntriesContext.Provider value={{ ...state, addNewEntry, updateEntryStatus }}>{children}</EntriesContext.Provider>;
};
