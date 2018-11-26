import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    paperWrapper: {
        textAlign: 'center',
        background: '#ffffff',
        boxShadow: 'none',
        paddingTop: 50,
        paddingBottom: 50
    },
    paperProjects: {
        boxShadow: 'none',
        marginLeft: '75px',
        marginRight: '75px'
    }
});

const Portfolio = (props) => {
  const { classes } = props;

  return (
    <Paper className={classes.paperWrapper} square={true}>
        <Grid container spacing={0}>
            <Grid item xs={12} style={{paddingBottom: '50px'}}>
                <Typography variant='h2'>
                    Portfolio
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Paper classes={{root: classes.paperProjects}}>
                    <img width='100%' height='auto' src='images/Placeholder Project.PNG' />
                </Paper>
            </Grid>
            <Grid item xs={12} lg={6}>
                <Paper classes={{root: classes.paperProjects}}>
                    <img width='100%' height='auto' src='images/Placeholder Project.PNG' />
                </Paper>
            </Grid>
            <Grid item xs={12} lg={6}>
                <Paper classes={{root: classes.paperProjects}}>
                    <img width='100%' height='auto' src='images/Placeholder Project.PNG' />
                </Paper>
            </Grid>
        </Grid>
    </Paper>
  )
}

export default withStyles(styles)(Portfolio);

// <img src='images/Placeholder Project.PNG' />