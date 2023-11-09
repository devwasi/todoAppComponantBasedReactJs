import { Button,Stack, } from "@mui/material"

const CustomButton = ({onClick,label, variant}) => {
   
    
  return (
    <>
   <Stack>
  
       <Button onClick={onClick} variant={variant} >{label}</Button>
   </Stack>
    </>
  )
}

export default CustomButton