import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Link from 'react-router-dom/Link'

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';

const styles = {
    card: {
        marginBottom: 10,
        maxWidth: '20',
        position: 'center'
    },
}

class event extends Component {
    render() {
        const {
            classes,
            event: {
                eventBody, eventName, eventDesc
            }
        } = this.props;
        return (
            <div >
                <Card className={classes.card}>
                    <CardMedia />
                    <CardContent>
                        <Typography variant="body3" component={Link} to={`/event/${eventName}`}>{eventName}</Typography>
                        <Typography variant="body2">{eventDesc}</Typography>
                        <Typography variant="body" >{eventBody}</Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(event);
