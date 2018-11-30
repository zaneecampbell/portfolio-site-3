import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip'

const styles = theme => ({
    paperWrapper: {
        textAlign: 'center',
        background: '#ffffff',
        boxShadow: 'none',
        paddingTop: 50,
        paddingBottom: 25
    },
    paperProjects: {
        boxShadow: 'none',
        marginLeft: '75px',
        marginRight: '75px',
        [theme.breakpoints.down('sm')]: {
            margin: '10px'
        }
    },
    tooltip: {
        fontSize: '15px'
    }
});

export const Portfolio = (props) => {
  const { classes } = props;

  return (
    <Paper className={classes.paperWrapper} square={true}>
        <Grid container spacing={0}>
            <Grid item xs={12} style={{paddingBottom: '25px'}}>
                <Typography variant='h2'>
                    Portfolio
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Tooltip classes={{ tooltip: classes.tooltip }} title='Voting App'>
                    <a target='_blank' href='https://cool-poll.herokuapp.com/'>
                        <Paper classes={{root: classes.paperProjects}}>
                            <img width='100%' height='auto' src='images/Vote App.PNG' />
                        </Paper>
                    </a>
                </Tooltip>
            </Grid>
            <Grid item xs={12} lg={6}>
                <Tooltip classes={{ tooltip: classes.tooltip }} title='Placeholder'>
                    <Paper classes={{root: classes.paperProjects}}>
                        <img width='100%' height='auto' src='images/Vote App.PNG' />
                    </Paper>
                </Tooltip>
            </Grid>
            <Grid item xs={12} lg={6}>
                <Tooltip classes={{ tooltip: classes.tooltip }} title='Placeholder'>
                    <Paper classes={{root: classes.paperProjects}}>
                        <img width='100%' height='auto' src='images/Vote App.PNG' />
                    </Paper>
                </Tooltip>
            </Grid>
        </Grid>
    </Paper>
  )
}

export default withStyles(styles)(Portfolio);

// Get actual images of projects (size them appropriately using the google chrome tester!)
// Add Tooltip for images and link to project