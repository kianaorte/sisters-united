import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import withStyles from '@material-ui/core/styles/withStyles';

import Post from '../components/post';
import Quote from '../components/Quote'
import './home.css';
import { Typography } from '@material-ui/core';

//TODO: Fix daily quote

const styles = ({
    theme: {
        spacing: 8
    },
    root: {
        backgroundColor: 'red',
        color: props => props.color,
    },
    main: {
        padding: 20,
        textAlign: 'center'
    },
});

export class home extends Component {
    state = {
        posts: null,
        dailyQuotes: null
    };

    componentDidMount() {
        //gets most recent post
        axios
            .get('./posts')
            .then((res) => {
                console.log(res.data)
                this.setState({
                    posts: res.data
                });
            }).catch((err) => console.log(err));
            axios
            .get('./quote')
            .then((res) => {
                console.log(res.data)
                this.setState({
                    dailyQuotes: res.data
                });
            }).catch((err) => console.log(err));
    }
    render() {
        const { classes } = this.props;
        let recentPostsMarkup = this.state.posts ? (
            this.state.posts.map((post) => <Post post={post} />)
        ) : (<p> Posts loading..</p>);
        let recentQuoteMarkup = this.state.dailyQuotes ? (
            this.state.dailyQuotes.map((dailyQuote) => <Quote dailyQuote={dailyQuote} />)
        ) : (<p> Quote loading..</p>);
        return (
            <Grid container spacing={16} >
                <Grid item sm />
                <Grid item sm={16} xs={12}>
                    <Typography variant="h4" className={classes.main}>
                        Daily Quote
                    </Typography>
                    {recentQuoteMarkup}
                    <Typography variant="h4" >
                        Recent Posts
                    </Typography>
                    {recentPostsMarkup}
                </Grid>
                <Grid item sm />
            </Grid >
        )
    }
}

export default withStyles(styles)(home)
