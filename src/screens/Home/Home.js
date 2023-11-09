import { Box, Divider, Grid, Stack, Typography, } from "@mui/material";
import React, { useState } from "react";
import InputTodoAdd from "../../componants/Input/Input";
import CustomButton from "../../componants/Button/Button";
import ListMap from "../../componants/ListMap/ListMap";
// import InputTodoAdd from "../input/Input";

const Home = () => {
  // todoApp
  let todoData = [];
  const [todo, setTodo] = useState(todoData);
  const [inputValue, setInputValue] = useState("");
  const [InputEmpty, setInputEmpty] = useState("");
  // add todo
  const addTodo = () => {
    setInputEmpty("");
    !inputValue
      ? setInputEmpty("please enter todo")
      : setTodo([
          ...todo,
          {
            id: Math.random().toString(16).slice(2),
            todo: inputValue,
          },
        ]);
    setInputValue("");
  };
  // delete
  const delTodo = (id) => {
    setTodo(
      todo.toSpliced(
        todo.findIndex((t) => t.id === id),
        1
      )
    );
  };
  // edit todo
  const editTodo = (id, prevTodo) => {
    let update = prompt("update value");

    !update
      ? setTodo(
          todo.toSpliced(
            todo.findIndex((t) => t.id === id),
            1,
            {
              id: id,
              todo: prevTodo,
            }
          )
        )
      : setTodo(
          todo.toSpliced(
            todo.findIndex((t) => t.id === id),
            1,
            {
              id: id,
              todo: update,
            }
          )
        );
  };
  // delete all
  const dellAll = () => {
    setTodo([]);
  };

  // on change handler

  return (
    <Stack
      sx={{
        bgcolor: "yellow",
        borderRadius: 10,
        padding: 10,
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* delete all button */}
      <Box sx={{ textAlign: "center" }}>
        <CustomButton
          onClick={dellAll}
          label={"Delete All"}
          variant={"outlined"}
        />
      </Box>
      {/* input and add todo */}
      <Grid container width={100 + "%"} sx={{ textAlign: "center" }}>
        {/* input componant todo */}
        <Grid item  xs={8} sm={8} md={8} lg={8}>
          <InputTodoAdd
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Grid>
        {/* Add Button todo */}
        <Grid item  xs={4} sm={4} md={4} lg={4}>
          <CustomButton onClick={addTodo} label={"add"} />
        </Grid>
        <Typography sx={{color:'red'}}>{InputEmpty}</Typography>
      </Grid>
      <Divider sx={{marginTop: 2, mb: 2}} />
      {/* list of todo */}
      <Grid container >
        <Grid item xs={12} sm={12} md={12} lg={12}>
      <ListMap todo={todo} delBtn={delTodo} editBtn={editTodo} />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Home;
