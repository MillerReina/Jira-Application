import { IEntry } from '@/interfaces';
import { createContext } from 'react';

interface ContextProps {
  entries: IEntry[];
  //Methods
  addNewEntry: (description: string) => void;
  updateEntryStatus: (entry: IEntry) => void;
}

export const EntriesContext = createContext({} as ContextProps);
