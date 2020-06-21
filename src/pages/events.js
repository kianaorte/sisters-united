import React, { Component } from 'react';
import axios from 'axios';

import Divider from '@material-ui/core/Divider';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-bootstrap/Carousel'
//import pages
import Event from '../components/event';
//import for images
import bnb1 from '../images/bnb1.png';
import bnb2 from '../images/bnb2.jpg';
import bnb3 from '../images/bnb3.jpg';
import bnb4 from '../images/bnb4.jpg';
import bnb5 from '../images/bnb5.jpg';

const styles = {
    root: {
        backgroundColor: 'red',
        color: props => props.color,
    },
};

export class event extends Component {
    state = {
        events: null,
        dailyQuote: null
    };
    componentDidMount() {
        //gets most recent post
        axios
            .get('./events')
            .then((res) => {
                console.log(res.data)
                this.setState({
                    events: res.data
                });
            }).catch((err) => console.log(err));
    }
    render() {
        const { classes } = this.props;
        let recentEventsMarkup = this.state.events ? (
            this.state.events.map((event) => <Event event={event} />)
        ) : (<p> Events loading..</p>);
        return (
            <div>
                <Grid container spacing={16}>
                    <Grid item sm />
                    <Grid item sm={16} xs={12}>
                        <h1>Events</h1>
                        {recentEventsMarkup}
                        <Divider />
                        <h1>Past Events</h1>
                    </Grid>
                </Grid >
                <Carousel>
                    <Carousel.Item>
                        <img src={bnb1} style={{ 'height': "300px" }} className={classes.images} />
                        <Carousel.Caption>
                            Launch of our Brown and Beautiful Campaign
                </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={bnb2} style={{ 'height': "300px" }} className={classes.images} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={bnb3} style={{ 'height': "300px" }} className={classes.images} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={bnb4} style={{ 'height': "300px" }} className={classes.images} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={bnb5} style={{ 'height': "300px" }} className={classes.images} />
                    </Carousel.Item>
                </Carousel>
                <h1>Yikes</h1>
            </div>
        )
    }
}

export default withStyles(styles)(event)
