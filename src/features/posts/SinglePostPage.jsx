import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'
import ReactionButtons from './ReactionButtons'
import TimeAgo from './TimeAgo'

const SinglePostPage = ({post}) => {
  return (
    <article>
        <Typography variant='h2'>{post.title}</Typography>
        <Typography vatiant="subtitle1">
            {post.body}
        </Typography>
        <Typography variant='subtitle1'>
            <Link to={`/post/edit/${post.id}`}><Button variant="button"></Button>Edit post</Link>
            <PostAuthor userId={post.userId} />
            <TimeAgo timestamp={post.date} />
        </Typography>
        <ReactionButtons post={post}/>
    </article>
  )
}

export default SinglePostPage