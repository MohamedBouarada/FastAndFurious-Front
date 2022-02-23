import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import classes from "./Competition.module.css";

export default function Competition() {
  return (
    <Card sx={{ maxWidth: 345 }} className={classes.cardStyle}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://scx2.b-cdn.net/gfx/news/2019/3-robot.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Robotic Competition
        </Typography>
        <Typography variant="body2" color="text.secondary">
          robotics, design, construction, and use of machines (robots) to
          perform tasks done traditionally by human beings. ... Many aspects of
          robotics involve artificial intelligence
        </Typography>
      </CardContent>
      <CardActions>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Button
            variant="outlined"
            startIcon={<ArrowDownwardIcon />}
            color="success"
            className={classes.buttonStyle1}
          >
            Down
          </Button>
          <Button
            variant="outlined"
            endIcon={<SendIcon />}
            className={classes.buttonStyle2}
          >
            Participate
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}
