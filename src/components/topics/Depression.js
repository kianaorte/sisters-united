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
            depressionAnxiety: {
                topicDesc, topicBody
            }
        } = this.props;
        return (
            <Card className={classes.card}>
                <CardMedia />
                <CardContent class={classes.content}>
                    <Typography variant ="body" component={Link} to={`/users/${topicDesc}`} color="#fce4ec">{topicDesc}</Typography>
                    <Typography variant="body2">{topicBody}</Typography>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(post);
