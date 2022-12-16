import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { FC, useEffect } from 'react'
import Header from '../../components/Header/Header'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from "../../features/posts/postsSlice";
import PostsExcerpt from '../../features/posts/PostsExcerpt';


// const api = axios.create({
//     baseUrl: 'https://api.themoviedb.org/3/person/popular'
// })

const MainPage = () => {
    const dispatch = useDispatch();

    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postStatus, dispatch])

    let content;
    if (postStatus === 'loading') {
        content = <p>"Loading..."</p>;
    } else if (postStatus === 'succeeded') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post} />)
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }

    return (
        <div>
            <Header />
            <Grid 
                container 
                spacing={2}
                sx={{
                    m: 2
                }}
            >
                {/* <Grid item xs={6} md={4} > */}
                    {/* <Card sx={{maxWidth: 345}}>
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
                                All Quiet on the western front
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            is a novel by Erich Maria Remarque, a German veteran of World War I. The book describes the German soldiers' extreme physical and mental trauma during the war, and the detachment from 
                            civilian life felt by many upon returning home from the front.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Watch</Button>
                            <Button size="small">Learn more</Button>

                            <Button size="small"><FavoriteIcon /></Button>
                        </CardActions>
                    </Card>
                </Grid>
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
                                All Quiet on the western front
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            is a novel by Erich Maria Remarque, a German veteran of World War I. The book describes the German soldiers' extreme physical and mental trauma during the war, and the detachment from 
                            civilian life felt by many upon returning home from the front.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Watch</Button>
                            <Button size="small">Learn more</Button>

                            <Button size="small"><FavoriteIcon /></Button>
                        </CardActions>
                    </Card>
                </Grid>
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
                                All Quiet on the western front
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            is a novel by Erich Maria Remarque, a German veteran of World War I. The book describes the German soldiers' extreme physical and mental trauma during the war, and the detachment from 
                            civilian life felt by many upon returning home from the front.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Watch</Button>
                            <Button size="small">Learn more</Button>

                            <Button size="small"><FavoriteIcon /></Button>
                        </CardActions>
                    </Card>
                    
                </Grid> */}
                {content}
                
            </Grid>
            
        </div>
        
    )
}

export default MainPage;