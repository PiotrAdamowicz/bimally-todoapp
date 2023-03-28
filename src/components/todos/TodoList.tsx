import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

//State
import { remove, selectTodos, toggleStateById, toggleEditById } from '@/slices/todosSlices';

//Icons
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

//Utilities
import { lightBlue } from '@mui/material/colors';
import { Todo } from '@/types/todos';
import { Paper, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Input from './Input';

const TodoList = () => {
  const list = useSelector(selectTodos);
  const dispatch = useDispatch();

  return (
    <Paper elevation={12}>
      <Box sx={{ width: '100%' }}>
        <List sx={{ p: 0, width: '100%', bgcolor: lightBlue[900] }} dense>
          {list.todos.map((todo: Todo, index: number) => (
            <ListItem
              key={todo.id}
              secondaryAction={
                <Stack direction="row" spacing={1}>
                  <IconButton onClick={() => dispatch(toggleEditById(todo.id))} edge="end" aria-label="comments">
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => dispatch(remove(todo))} edge="end" aria-label="comments">
                    <DeleteForeverIcon />
                  </IconButton>
                </Stack>
              }
              disablePadding
            >
              <ListItemButton role={undefined} onClick={() => dispatch(toggleStateById(todo))}>
                <ListItemIcon sx={{ minWidth: '30px' }}>
                  <Checkbox
                    sx={{ m: 0, p: 0 }}
                    edge="start"
                    size="small"
                    checked={todo.isDone}
                    tabIndex={-1}
                    disableRipple
                  />
                </ListItemIcon>

                {todo.editActive ? (
                  <Box sx={{ width: '72%' }}>
                    <Input edit variant="edit" id={todo.id} label={<SaveAltIcon />} text={todo.text} />
                  </Box>
                ) : (
                  <Box>
                    <ListItemText id={todo.text + index} primary={todo.text} />
                    <Typography variant="caption" sx={{ opacity: 0.8 }}>
                      {`${todo.addDate}`}
                    </Typography>
                  </Box>
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Paper>
  );
};

export default TodoList;
