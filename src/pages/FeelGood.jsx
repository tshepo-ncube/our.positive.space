import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from 'react-bootstrap';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import axios from 'axios';
import { Container } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

 
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const styles = {
  div: {
    backgroundColor: '#fff',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
  },
  h1: {
    color: '#333',
    fontSize: '24px',
    margin: '0 0 20px',
  },
  p: {
    color: '#666',
    fontSize: '16px',
    lineHeight: '1.5',
    margin: '0 0 15px',
  },
};

async function requestSummary(promptString) {
  // var msgString =  JSON.stringify(msgs_list);

  // if(msgs_list.length==0){

  // }
  // const concatenatedJsonString = promptString + '\n\n RESPOND IN 569 CHARACTERS PLEASE!';

  const messageData = {
    message: promptString
  };

  try {
    // const response = await axios.post('http://localhost:8080/message', messageData, {
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });

    const response = await axios.post('https://ai-linkedin-server.onrender.com/message', messageData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    

    // Axios automatically throws an error for non-2xx responses, so no need to check response.ok

    const data = response.data;
    //console.log('Response Data:', data);
    // You can handle the response data here
    return data; // Return the data to the caller of this function if needed
  } catch (error) {
    console.error('Axios Error:', error);
    // Handle any errors that occurred during the Axios request
    throw error; // Rethrow the error to the caller if needed
  }
}

export default function FeelGood() {

  


  const [affirmation, setAffirmation] = useState(null); // Initialize with 'home'

  const affirmationEvent = () => {
    
    requestSummary("Write me a one sentence affirmation, include emojis")
        .then(data => {
          console.log("professional reponse...")
          console.log("Response In Button Function:", data.receivedMessage);
          // Handle the data here
          // newElement.textContent = data.receivedMessage;
        //   const container = document.createElement('div');
  
        // container.id = 'react-target-gpt'
        //pTag.textContent = data.receivedMessage.trim();
        //postText = data.receivedMessage.trim();
        // Insert the button alongside the current element
        // buttonElement.insertAdjacentElement('afterend', newElement);
        //   msgs_list = [];
        setAffirmation(data.receivedMessage)

        })
        .catch(error => {
          console.error("Error:", error);
          // Handle any errors that occurred during the requestSummary function call
        });
  }

  return (
    <Box sx={{ flexGrow: 1 ,marginTop:2}}>
      <Grid container spacing={2}>
        <Grid item   xs={12} sm={12} md={12} lg={8}>
          <Item style={{height:400}}>
           

                <Button size="small" onClick={affirmationEvent} style={{color:'white',background: 'linear-gradient(45deg, #FF4081,#eeaeca)',marginTop:65}}>
                  
                 

                      {affirmation !== null && (
                        <>Next Affirmation</>
                      )} 

                      {affirmation === null && (
                        <>  Read an affirmation</>
                      )} 
                
                </Button>

                {affirmation !== null && (
                <Container>
                  {/* Content to display when 'Stories' is selected */}
                   
                  

                  <center>
                  <Card sx={{ maxWidth: 345 ,marginTop:3}}>
                  <CardActionArea>
                    
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Affirmation
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      {affirmation}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                  </center>
                </Container>
          )} 
          </Item>
           
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Item>
          <div style={styles.div}>
      <h1 style={styles.h1}>The Power of Affirmations</h1>
      <p style={styles.p}>
        Affirmations are positive statements that can transform your mindset and well-being. They work by reshaping your thoughts and beliefs, promoting self-confidence, reducing stress, and increasing motivation.
      </p>
      <p style={styles.p}>
        Create effective affirmations by making them positive, present-tense, and specific. Repeat them daily for the best results. Belief in your affirmations is essential for their success.
      </p>
    </div>

          </Item>
        </Grid>
         
      </Grid>
    </Box>
  );
}


