import React, { Component } from 'react';

//create button to make posts
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

export class beCreative extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container spacing={3} alignItems="center">
                <Grid item sm={12} xs={12}>
                    <h2>Be Creative</h2>
                    <Divider />
                    <h2>Create Post</h2>
                </Grid>
            </Grid>
        )
    }
}

export default beCreative;
