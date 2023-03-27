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
import { remove, selectTodos, toggleState } from '@/slices/todosSlices';

//Utilities
import { lightBlue } from '@mui/material/colors';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Todo } from '@/types/todos';
import { Paper } from '@mui/material';

const TodoList = () => {
  const [checked, setChecked] = React.useState([0]);
  const list = useSelector(selectTodos).todos;
  const dispatch = useDispatch();

  // const handleToggle = (value: number) => () => {
  //   const currentIndex = checked.indexOf(value);
  //   const newChecked = [...checked];

  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }

  //   setChecked(newChecked);
  // };

  return (
    <Paper elevation={12}>
      <Box sx={{ width: '100%' }}>
        <List sx={{ p: 2, width: '100%', bgcolor: lightBlue[900] }}>
          {list.todos.map((todo: Todo, index) => (
            <ListItem
              key={todo.id}
              secondaryAction={
                <IconButton onClick={() => dispatch(remove(todo))} edge="end" aria-label="comments">
                  <DeleteForeverIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton role={undefined} onClick={() => dispatch(toggleState(todo))} dense>
                {/* TODO: onClick needed */}
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={todo.isDone}
                    tabIndex={-1}
                    disableRipple
                    // inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={todo.text + index} primary={todo.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Paper>
  );
};

export default TodoList;
