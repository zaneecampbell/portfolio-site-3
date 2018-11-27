import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Phone from '@material-ui/icons/Phone';
import Email from '@material-ui/icons/Email';
import MailOutline from '@material-ui/icons/MailOutline';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
    appBar: {
        textAlign: 'center',
        background: '#e6e6e6',
        boxShadow: 'none',
    }
});

export const Contact = (props) => {
    const { classes } = props;

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <Grid container justify='space-evenly'>
                    <Typography variant="h4" color="default">
                        Contact &nbsp; &nbsp;
                    </Typography>
                    <Typography variant="h4">
                        <Phone /> &nbsp; 1-405-535-0652
                    </Typography>
                    <Typography variant="h4">
                        <MailOutline/> &nbsp; Zanegitinit@gmail.com
                    </Typography>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default withStyles(styles)(Contact);

// Done