import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function ApiCheck() {
  const [data, setData] = useState([])

  let getData = ()=> {
    axios.get('https://fakestoreapi.com/products').then((success)=>{
            console.log(success.data);
            setData(success.data)
          }).catch((err)=>{
            alert(err)
          })
  }

  useEffect(()=>{getData();
  console.log(data)},[])
  return (
    <div>
        <h1>Api Check</h1>

        <h2>Data</h2>

        <Box>
          <Container maxWidth='lg'>
            <Grid container >
              {
                data.map((e,i)=>(
                  <Grid item md={3}>
                    <img style={{display:'block'}} height='200px' width='200px' src={e.image} />
                    <Typography sx={{textAlign:'center',padding:'10px'}} variant='subtitle2'>
                      {e.title}
                    </Typography>
                  </Grid>
                ))
              }
            </Grid>
          </Container>
        </Box>
    </div>
  )
}

export default ApiCheck