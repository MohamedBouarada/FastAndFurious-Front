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

import ScrollIntoView from "react-scroll-into-view";

export default function Competition(props) {
  return (
    <Card sx={{ maxWidth: 345 }} className={classes.cardStyle}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="480"
        image={props.img}
        // className={classes.imgStyle}
      />
      {/* <div className={classes.titleStyle}>
        <h3>{props.title}</h3>
        <Button
            variant="contained"
            startIcon={<ArrowDownwardIcon />}
            color="success"
            className={classes.buttonStyle}
            style={{marginBottom : '5px'}}
          >
            Down
        </Button>
        <Button
            variant="contained"
            startIcon={<SendIcon />}
            className={classes.buttonStyle}
          >
            Participate
          </Button>
      </div> */}
     <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
        {/* {.about==="" && <Typography color="red" fontSize={12} > 
          specifications will be published the night before the competition
          </Typography>

          } */}
      </CardContent> 
     <CardActions>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          {props.about!=""&& <Button
            variant="outlined"
            startIcon={<ArrowDownwardIcon />}
            href={props.about}
            target="_blank"
            color="success"
            className={classes.buttonStyle1}
          >
            Down
          </Button>}
          
          <ScrollIntoView selector="#inscription">
          <Button
            variant="outlined"
            startIcon={<SendIcon />}
            className={classes.buttonStyle2}
          >
            Participate
          </Button>
        
          </ScrollIntoView>
          </Stack>
      </CardActions>
    </Card>
    // <div className={classes.content_img}>
    //   <img src={props.img} width='100%' height='100%'/>
    //   <div className={classes.titleStyle}>Image 1 Text</div>
    // </div>
  );
}
