import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
export default function Post({ post }) {
  return (
    <>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className='title'>
              {post.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {post.body}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={`/post/${post.id}`}>
                <Button size="small">comments</Button>
            </Link>
          </CardActions>
        </Card>
    </>
  );
}
