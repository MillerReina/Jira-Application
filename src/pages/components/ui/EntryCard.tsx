import { DragEvent } from 'react';
import { Card, CardActionArea, Typography, CardContent, CardActions } from '@mui/material';
import { IEntry } from '../../../interfaces/entry';
import { useContext } from 'react';
import { UIContext } from '../../../context/ui/UIContext';

interface Props {
  entry: IEntry;
}

const EntryCard: React.FC<Props> = ({ entry }) => {
  const { startDragging, endDragging } = useContext(UIContext);

  const onDragStart = (event: DragEvent) => {
    event.dataTransfer.setData('text', entry._id);
    startDragging();
  };

  return (
    <Card sx={{ marginBottom: 1 }} draggable={true} onDragStart={onDragStart} onDragEnd={endDragging}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 2 }}>
          <Typography variant="body2">Hora: 1h atrás</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default EntryCard;
