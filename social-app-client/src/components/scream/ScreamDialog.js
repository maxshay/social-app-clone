import React, { Component, Fragment } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import MyButton from '../../util/MyButton';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import LikeButton from './LikeButton';
import Comments from './Comments';
import CommentForm from './CommentForm';
//Mui
import Dialog from '@material-ui/core/Dialog';
import CircularProgress from '@material-ui/core/CircularProgress';
import CloseIcon from '@material-ui/icons/Close';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import UnfoldMore from '@material-ui/icons/UnfoldMore'; 
import ChatIcon from '@material-ui/icons/Chat';

import { connect } from 'react-redux';
import { getScream, clearErrors } from '../../redux/actions/dataActions';

const styles = (theme) => ({
    ...theme.spreadIt,
    profileImage: {
        maxWidth: 200,
        maxHeight: 200,
        borderRadius: '50%',
        objectFit: 'cover'
    },
    dialogContent: {
        padding: 20
    }, 
    closeButton: {
        position: 'absolute',
        top:'4%',
        left: '90%'
    },
    expandButton: {
        position: 'absolute',
        right: '3%'
    },
    spinnerDiv: {
        textAlign: 'center',
        margin: '20px 0'
    }
})

class ScreamDialog extends Component {
    state = {
        open: false,
        oldPath: '',
        newPath: ''
    }
    componentDidMount() {
        if(this.props.openDialog){
            this.handleOpen();
        }
    }
    handleOpen = () => {

        let oldPath = window.location.pathname;
        const { userHandle , screamId } = this.props;
        const newPath = `/users/${userHandle}/scream/${screamId}`;

        if (oldPath === newPath) oldPath = `/users/${userHandle}`;

        window.history.pushState(null, null, newPath);


        this.setState({open: true, oldPath, newPath});
        this.props.getScream(this.props.screamId);
    }
    handleClose = () => {
        window.history.pushState(null, null, this.state.oldPath);
        this.setState({open: false});
        this.props.clearErrors();
    }
    render() {
        const { classes, scream: {screamId, body, createdAt, likeCount, commentCount, userImage, userHandle, comments}, UI:{loading}} = this.props;
        const dialogMarkup = loading ? (
            <div className={classes.spinnerDiv}>
            <CircularProgress className={classes.bigLoading} size={200}/>

            </div>
            
        )  : 
        (
            <Grid container>
                <Grid item sm={5}>
                    <img src={userImage} alt="Profile" className={classes.profileImage} />
                </Grid>
                <Grid item sm={7}>
                    <Typography
                        component={Link}
                        color="primary"
                        variant="h5"
                        to={`/users/${userHandle}`}>
                            @{userHandle}
                    </Typography>
                    <hr className={classes.invisibleSeparator} />
                    <Typography variant="body2" color="primary" >
                        {dayjs(createdAt).format('h:mm a, MMMM DD YYYY')}
                    </Typography>
                    <hr className={classes.invisibleSeparator} />
                    <Typography variant="body1">
                        {body}
                    </Typography>
                    <LikeButton screamId={screamId}/>
                    <span>{likeCount} likes</span>
                    <MyButton tip="Comments">
                        <ChatIcon color="primary"/>
                    </MyButton>
                    <span>{commentCount} Comments</span>
                </Grid>
                <hr className={classes.visibleSeperator} />
                <CommentForm screamId={screamId} />
                <Comments comments={comments}/>
            </Grid>
        );
        return (
            <Fragment>
                <MyButton onClick={this.handleOpen} tip="Expand scream" tipClassName={classes.expandButton}>
                    <UnfoldMore color="primary" />
                </MyButton>
                <Dialog open={this.state.open}
                    onClose={this.handleClose}
                    fullWidth
                    maxWidth="sm">
                    <MyButton 
                        tip="Close"
                        onClick={this.handleClose} 
                        tipClassName={classes.closeButton}><CloseIcon/>
                    </MyButton>
                
                    <DialogContent className={classes.dialogContent}>
                        {dialogMarkup}
                    </DialogContent>


                </Dialog>
            </Fragment>
        )

    }
}

ScreamDialog.propTypes = {
    clearErrors: PropTypes.func.isRequired,
    getScream: PropTypes.func.isRequired,
    screamId: PropTypes.string.isRequired,
    userHandle: PropTypes.string.isRequired,
    scream: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    scream: state.data.scream,
    UI: state.UI
})

export default connect(mapStateToProps, {getScream, clearErrors})(withStyles(styles)(ScreamDialog));