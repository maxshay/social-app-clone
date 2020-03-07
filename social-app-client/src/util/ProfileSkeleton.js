import React from 'react'
import PropTypes from 'prop-types';
import NoImg from '../images/no-image.png';
//Mui
import { withStyles } from '@material-ui/core';

// mui styles
import Paper from '@material-ui/core/Paper';

import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import CalendarToday from '@material-ui/icons/CalendarToday';


const styles = theme => ({
    ...theme.spreadIt,
    handle: {
        height: 20,
        backgroundColor: theme.palette.primary.main,
        width: 60,
        margin: '0 auto 7px auto'
      },
      fullLine: {
        height: 15,
        backgroundColor: 'rgba(0,0,0,0.1)',
        width: '100%',
        marginBottom: 10
      },
      halfLine: {
        height: 15,
        backgroundColor: 'rgba(0,0,0,0.1)',
        width: '50%',
        marginBottom: 10
      }
})

const ScreamSkeleton = props => {
    const { classes } = props;

    return (
        <Paper className={classes.paper}>
            <div className={classes.profile}>
                <div className="image-wrapper">
                    <img src={NoImg} alt="profile" className="profile-image" />
                </div>
                <hr />
                <div className="profile-details">
                    <div className={classes.handle} />
                    <hr />
                    <div className={classes.fullLine} />
                    <div className={classes.fullLine} />
                    <LocationOn color="primary" /> Location
                    <hr />
                    <LinkIcon color="primary" /> https://website.com
                    <hr />
                    <CalendarToday color="primary"/> Joined date
                </div>
            </div>
        </Paper>
    )
}

ScreamSkeleton.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ScreamSkeleton);