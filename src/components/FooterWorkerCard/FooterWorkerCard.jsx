import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import React from "react";

const FooterWorkerCard = ({ image, name, job, linkedin }) => {
  return (
    <Box>
      <Card sx={{ maxWidth: 345, bgcolor:"transparent", boxShadow:"none" }}>
        <CardMedia sx={{ height: 200 }} image={image} title={`${name} Photo`} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {job}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link underline="none" href={linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default FooterWorkerCard;
