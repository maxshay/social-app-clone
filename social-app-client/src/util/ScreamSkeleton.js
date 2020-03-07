import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import NoImg from '../images/no-image.png';
//Mui
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    ...theme.spreadIt,
    card: {
        display: 'flex',
        marginBottom: 20,
    },
    CardContent: {
        width: '100%',
        flexDirection: 'column',
        padding: 25
    },
    cover: {
        minWidth: 200,
        objectFit: 'cover'
    },
    handle: {
        width: 60,
        height: 18,
        backgroundColor: '#33c9dc',
        marginBottom: 7
    },
    date: {
        height: 14,
        width: 100,
        backgroundColor: 'rgba(0,0,0,0.3)',
        marginBottom: 20
    },
    fullLine: {
        height: 15,
        width: '90%',
        marginBottom: 10,
        backgroundColor: 'rgba(0,0,0,0.1)',
    },
    halfLine: {
        height: 15,
        width: '50%',
        marginBottom: 10, 
        backgroundColor: 'rgba(0,0,0,0.1)',
    }
});

const ProfileSkeleton = props => {
    const { classes } = props;

    const content = Array.from({length: 5}).map((item, index) => (
        <Card className={classes.card} key={index}>
            <CardMedia className={classes.cover} image={NoImg}/>
            <CardContent className={classes.CardContent}>
                <div className={classes.handle} />
                <div className={classes.date} />
                <div className={classes.fullLine} />
                <div className={classes.fullLine} />
                <div className={classes.halfLine} />
            </CardContent>
        </Card>
    ));
    return <Fragment>{content}</Fragment>
}

ProfileSkeleton.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProfileSkeleton);