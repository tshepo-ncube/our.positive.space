import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function FeelingCard(props) {

  const handleFeeling = ()=> {
    console.log(props.feeling_name)
    props.setFeeling(props.feeling_name)

  }
  return (
    <Card sx={{ maxWidth: 345 }} onClick={handleFeeling}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.img_url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.feeling_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {/* {props.feeling_description} */}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
