import React from 'react';
import { List, Paper } from '@mui/material';

import { EntryStatus } from '@/interfaces';
import { useContext, useMemo, DragEvent } from 'react';
import { EntriesContext } from '../../../context/entries/EntriesContext';
import { NewEntry, EntryCard } from './';
import { UIContext } from '../../../context/ui/UIContext';
import styles from './EntryList.module.css';

interface Props {
  status: EntryStatus;
}

const EntryList: React.FC<Props> = ({ status }) => {
  const { entries, updateEntryStatus } = useContext(EntriesContext);
  const { isDragging, endDragging } = useContext(UIContext);

  const entriesByStatus = useMemo(() => entries.filter((res) => res.status == status), [entries]);

  const onDropEntry = (event: DragEvent) => {
    const idCard = event.dataTransfer.getData('text');
    const entry = entries.find((res) => res._id === idCard)!;
    entry.status = status;
    updateEntryStatus(entry);
    endDragging();
  };

  const allowDrop = (event: DragEvent) => {
    event.preventDefault();
  };

  return (
    <div onDrop={onDropEntry} onDragOver={allowDrop} className={isDragging ? styles.dragging : ''}>
      <Paper
        sx={{ height: 'calc(100vh - 150px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '1px 5px' }}
      >
        <List sx={{ opacity: isDragging ? 0.5 : 1, transition: 'all .3s' }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry}></EntryCard>
          ))}
        </List>
      </Paper>
    </div>
  );
};

export default EntryList;
