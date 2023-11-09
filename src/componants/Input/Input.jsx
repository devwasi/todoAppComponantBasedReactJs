import {  Stack, TextField } from "@mui/material"

const  InputTodoAdd = ({value,onChange}) => {
   
    
  return (
    <>
   <Stack>
   <TextField label="Add Todo" variant="standard" value={value} onChange={onChange} />
   </Stack>
    </>
  )
}

export default InputTodoAdd