import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Card
      className="card"
      sx={{
        maxWidth: 220,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
      }}
    >
      <CardMedia
        sx={{ flex: 1, minHeight: 250 }}
        image={item.img}
        title={`imagen ${item.title}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          $ {item.price} .-
        </Typography>
      </CardContent>
      <CardActions>
        {item.stock > 0 ? (
          <Link to={`/itemDetail/${item.id}`}>
            <Button size="small" variant="outlined">
              Ver detalle
            </Button>
          </Link>
        ) : (
          <Button variant="contained" disabled>
            Sin stock
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
