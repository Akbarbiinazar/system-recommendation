import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";


const PostsExcerpt = ({ post }) => {
    return (
        <Grid item xs={6} md={4} >
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
                        {post.content.substring(0,50)}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Watch</Button>
                    <Button size="small">Learn more</Button>

                    <Button size="small"><FavoriteIcon /></Button>
                </CardActions>
            </Card>
        </Grid>
        <article>
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 100)}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    )
}
export default PostsExcerpt