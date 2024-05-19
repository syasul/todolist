import React from "react";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox } from "@mui/material";

const ToDoList = ({ todos, handleCheckbox }) => {
    return (
        <div className="todo-list">
            <List>
                {todos.map((todo, index) => {
                    return (
                        <ListItem key={index} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Checkbox
                                        checked={todo.complete}
                                        onChange={() => handleCheckbox(todo.id)}
                                        disableRipple
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    primary={todo.task}
                                    className={todo.complete ? "complete" : ""}
                                />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </div>
    );
};

export default ToDoList;