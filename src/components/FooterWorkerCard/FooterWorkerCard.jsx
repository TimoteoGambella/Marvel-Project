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
      <Card
        sx={{
          marginTop: "15px",
          minWidth: 200,
          maxWidth: 345,
          bgcolor: "transparent",
          boxShadow: "none",
        }}
      >
        <CardMedia
          sx={{ height: 200, borderRadius: "50%" }}
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
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button size="small">
            <Link
              underline="none"
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              LinkedIn Profile
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default FooterWorkerCard;
