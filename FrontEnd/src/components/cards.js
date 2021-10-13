import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({ fruit }) {
  //   const { price, URL, name } = fruit;  //? Can be
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={fruit.URL} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {fruit.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price : {fruit.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
