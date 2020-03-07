import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

//mui stuff
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


//redux 
import { connect } from 'react-redux';
import { submitComment } from '../../redux/actions/dataActions';
import { Grid } from '@material-ui/core';


const styles = theme => ({
    ...theme.spreadIt
});


class CommentForm extends Component {

    state = {
        body: '',
        errors:{}

    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if(nextProps.UI.errors) {
            this.setState({
                errors: nextProps.UI.errors
            });
        }
        if(!nextProps.UI.errors && !nextProps.UI.loading) {
            this.setState({
                body:''
            })
        }
    }
    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.submitComment(this.props.screamId, {body: this.state.body});
    }


    render() {
        const { classes, authenticated } = this.props;
        const errors = this.state.errors;
        const commentFormMarkUp = authenticated ? (
            <Grid item sm={12} style={{textAlign: 'center'}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        name="body"
                        type="text"
                        label="Comment on scream"
                        helperText={errors.comment}
                        value={this.state.body}
                        onChange={this.handleChange}
                        fullWidth
                        className={classes.TextField}
                    />
                    <Button type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.button}>
                        Submit
                    </Button>
        
                </form>
                <hr className={classes.invisibleSeperator} />
            </Grid>
        ) : (
            null
        );
        return commentFormMarkUp;
    }
}

CommentForm.propTypes = {
    submitComment: PropTypes.func.isRequired,
    UI: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    authenticated: PropTypes.bool.isRequired,
    screamId: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
    UI: state.UI,
    authenticated: state.user.authenticated
})

export default connect(mapStateToProps, {submitComment})(withStyles(styles)(CommentForm));
