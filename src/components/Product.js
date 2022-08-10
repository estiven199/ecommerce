import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddShoppingCart } from "@mui/icons-material";
import accounting from 'accounting';

// const useStyles = styled((theme) => ({
//     root: {
//         maxWidth: 345,
//     },
//     action: {
//         marginTop: "1rem",
//     },
//     media: {
//         height: 0,
//         paddingTop: "56.25%", // 16:9
//     },
//     expand: {
//         transform: "rotate(0deg)",
//         marginLeft: "auto",
//         transition: theme.transitions.create("transform", {
//             duration: theme.transitions.duration.shortest,
//         }),
//     },
//     expandOpen: {
//         transform: "rotate(180deg)",
//     },
// }));
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
export default function RecipeReviewCard() {
    // const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345, marginTop: 11, marginLeft:3 }}>
            <CardHeader
                // avatar={
                //     <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                //         R
                //     </Avatar>
                // }
                action={
                    <Typography aria-label="settings" sx={{textDecoration:"line-through"}}>
                        {accounting.formatMoney(49999, "$", 0, ",", ".")}
                    </Typography>
                }
                title="Shoes"
                subheader="In stock"
            />
            <CardMedia
                component="img"
                height="194"
                image="https://s2.r29static.com/bin/entry/ebd/0,675,2000,1050/x,80/1929471/image.jpg"
                alt="Nike shoes"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Running shoes
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label='Add to Cart' >
                    <AddShoppingCart fontSize='large' />
                </IconButton>

                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                {/* {Array(4)
                    .fill()
                    .map((_, i) => (
                        <p>&#11088;</p>
                    ))} */}
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                        aside for 10 minutes.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
