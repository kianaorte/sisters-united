import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Link from 'react-router-dom/Link'

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';

const styles = {
    card: {
        display: 'center',
        marginBottom: 10,
    },
}

class post extends Component {
    render() {
        const {
            classes, 
            post: {
                body, username, createdAt, userImage, postId, noLikes, noComments
            }
        } = this.props;
        return (
            <Card className={classes.card}>
                <CardMedia />
                <CardContent class={classes.content}>
                    <Typography variant ="body" component={Link} to={`/users/${username}`} color="#fce4ec">{username}</Typography>
                    <Typography variant="body2">{body}</Typography>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(post);
