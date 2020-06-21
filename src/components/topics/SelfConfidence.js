import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Link from 'react-router-dom/Link'

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';

const styles = {
    card: {
        display: 'inline-block',
        marginBottom: 10,
        position: 'center'
    },
}

class SelfConfidence extends Component {
    render() {
        const {
            classes,
            selfConfidence: {
                topicDesc, topicBody
            }
        } = this.props;
        return (
            <div >
                <Card className={classes.card}>
                    <CardMedia />
                    <CardContent>
                        <Typography variant="body3" component={Link} to={`/selfConfidence/${topicDesc}`}>{topicDesc}</Typography>
                        <Typography variant="body">{topicBody}</Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(SelfConfidence);
