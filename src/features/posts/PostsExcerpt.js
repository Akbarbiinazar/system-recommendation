import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; 
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { Link } from "react-router-dom";

const PostsExcerpt = ({ post }) => {
    return (
        <>
            <Grid item xs={6} md={4} sx={{my: 2}} >
                <Card sx={{maxWidth: 345}}>
                    <CardMedia 
                        component="img"
                        height="140"
                        image="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        alt="film about war"
                    />
                    <CardContent>
                        <Typography
                            variant="h5" 
                            component="div"
                        >
                            {post.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {post.content}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Watch</Button>
                        <Link to={`post/${post.id}`}><Button size="small">Learn more</Button></Link>

                        <Button size="small"><FavoriteBorderIcon /></Button>
                    </CardActions>
                    {/* <ReactionButtons post={post} /> */}
                </Card>
            </Grid>
        </>
        
    )
}
export default PostsExcerpt