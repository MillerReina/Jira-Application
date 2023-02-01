import React, { ChangeEvent } from 'react';
import { Button, TextField, Box } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useState, useContext } from 'react';
import { EntriesContext } from '../../../context/entries/EntriesContext';
import { UIContext } from '../../../context/ui/UIContext';

const NewEntry = () => {  
  const [inputValue, setInputValue] = useState('');
  const [isFiledTouched, setIsFiledTouched] = useState(false);
  const { isAddingEntry, setAddingEntry } = useContext(UIContext)
  const { addNewEntry } = useContext(EntriesContext);

  const onTextChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const saveInputEntry = () => {
    if (inputValue.length > 0) {
      addNewEntry(inputValue);
      setAddingEntry(false);
      setIsFiledTouched(false);
      setInputValue('');
    }
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAddingEntry ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder="Ingrese una nueva tarea"
            autoFocus
            multiline
            label="Nueva entrada"
            helperText="Error ingrese un valor valido"
            value={inputValue}
            onChange={onTextChanged}
            error={inputValue.length <= 0 && isFiledTouched}
            onBlur={() => setIsFiledTouched(true)}
          ></TextField>
          <Box display="flex" justifyContent="space-between">
            <Button variant="outlined" color="secondary" onClick={saveInputEntry}>
              <SaveIcon></SaveIcon>
              Guardar
            </Button>

            <Button variant="outlined" color="secondary" onClick={() => setAddingEntry(false)}>
              Cancelar
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Button
            startIcon={<AddBoxIcon></AddBoxIcon>}
            fullWidth
            variant="outlined"
            onClick={() => setAddingEntry(true)}
          >
            {' '}
            Agregar nueva tarea
          </Button>
        </>
      )}
    </Box>
  );
};

export default NewEntry;
