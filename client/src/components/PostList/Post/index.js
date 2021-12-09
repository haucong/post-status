import React from 'react'
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@material-ui/core';
// import {MoreVertIcon} from '@material-ui/icons'
// import {FavoriteIcon} from '@material-ui/icons'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import {Favorite} from '@material-ui/icons'
import moment from 'moment'

const Post  = ({post}) => {
    return (
      <Card>
        <CardHeader
          avatar={<Avatar aria-label='recipe'>R</Avatar>}
          title={post.author}
          subheader={moment(post.updatedAt).format('HH:MM MM DD,YYYY')}
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
        />

        <CardMedia
          image={post.attachment}
          title='Paella dish'
        />
        <CardContent>
          <Typography variant='h5' color='textPrimary'>
            {post.title}
          </Typography>
          <Typography variant='body2' component='p' color='textPrimary'>
            {post.content}
          </Typography>
        </CardContent>

        <CardActions>
          <IconButton>
            <Favorite />
            <Typography component='span' color='textSecondary'>
              {post.likeCount}
            </Typography>
          </IconButton>
        </CardActions>
      </Card>
    )
}

export default Post
