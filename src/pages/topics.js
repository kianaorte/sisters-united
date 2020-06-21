import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

import Divider from '@material-ui/core/Divider';

import Depression from '../components/topics/Depression';
import SelfConfidence from '../components/topics/SelfConfidence';
import SelfEsteem from '../components/topics/SelfEsteem';

export class topics extends Component {
    state = {
        depression: null,
        wellbeing: null,
        selfConfidences: null,
        selfEsteems: null
    }
    componentDidMount() {
        axios
            .get('./depression')
            .then((res) => {
                console.log(res.data)
                this.setState({
                    depression: res.data
                });
            }).catch((err) => console.log(err));
        axios
            .get('./selfConfidence')
            .then((res) => {
                console.log(res.data)
                this.setState({
                    selfConfidences: res.data
                });
            }).catch((err) => console.log(err));
        axios
            .get('./selfEsteem')
            .then((res) => {
                console.log(res.data)
                this.setState({
                    selfEsteems: res.data
                });
            }).catch((err) => console.log(err))
    }
    render() {
        let depressionTopics = this.state.depression ? (
            this.state.depression.map((depressionAnxiety) => <Depression depressionAnxiety={depressionAnxiety} />)
        ) : (<p> Posts loading..</p>);
        let selfConfidenceTopics = this.state.selfConfidences ? (
            this.state.selfConfidences.map((selfConfidence) => <SelfConfidence selfConfidence={selfConfidence} />)
        ) : (<p> Posts loading..</p>);
        let selfEsteemTopics = this.state.selfEsteems ? (
            this.state.selfEsteems.map((selfEsteem) => <SelfEsteem selfEsteem={selfEsteem} />)
        ) : (<p> Posts loading..</p>);
        return (
            <div>
                <h1>Topics</h1>
                <Grid container spacing={3} alignItems="center">
                    <Grid item sm={12} xs={12}>
                        <h2>Wellbeing</h2>
                        <Divider />
                        <h2>Self-esteem</h2>
                        {selfEsteemTopics}
                        <Divider />
                        <h2>Self Confidence</h2>
                        {selfConfidenceTopics}
                        <Divider />
                        <h2>Depression and Anxiety</h2>
                        {depressionTopics}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default topics
