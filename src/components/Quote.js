import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';

const styles = {
    card: {
        display: 'center',
        marginBottom: 10
    }
}

class Quote extends Component {
    render() {
        const {
            classes, 
            dailyQuote: {
                quote
            }
        } = this.props;
        return (
            <Card className={classes.card}>
                <CardMedia />
                <CardContent>
                    <Typography variant ="body5" >{quote}</Typography>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(Quote);
