import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const FooterWorkerCard = ({image, name, job, linkedin}) => {
  return (
    <Box>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title={`${name} Photo`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {job}
        </Typography>
      </CardContent>
      <CardActions >
        <Button size="small"><a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></Button>
      </CardActions>
    </Card>
    </Box>
  )
}

export default FooterWorkerCard