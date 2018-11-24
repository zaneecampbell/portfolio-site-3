import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        color: 'white',
        position: 'absolute',
        left: 0,
        right: 0,
        top: '35%',
        margin: 'auto',
        width: '25%'
    }
})

export const Intro = (props) => {
    const { classes } = props;

    return (
        <Typography classes={{ root: classes.root }} variant='display2' align='center'>
            Hi, My name is Zane. I'm a React Web Developer.
        </Typography>
    )
};

export default withStyles(styles)(Intro);