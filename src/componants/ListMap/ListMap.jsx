import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Grid, Typography } from '@mui/material';
import CustomButton from '../Button/Button';

export default function ListMap({todo, delBtn,editBtn, label}) {
  return (


     <List sx={{ width: '100%',minWidth: 300}}>
    {
        todo.map((e,i)=>{
            return <Grid key={i} container   sx={{ width: '100%',xs: 8, sm: 8, md: 12, lg: 8, xl: 8,}}>
            <ListItem sx={{boxShadow: 2,borderRadius: 2, bgcolor:'red'}}>
                <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                <Typography>
                    {e.todo}
                </Typography>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2} xl={2} >
                <CustomButton label={"Del"} onClick={() => delBtn(e.id)} variant={"outlined"} />
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                <CustomButton label={"Edit"} onClick={() => editBtn(e.id, e.todo)}  variant={"outlined"} />
                </Grid>
            </ListItem>
            </Grid>
            
        })
    }
     </List>
  );
}
