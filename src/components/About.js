import React from 'react';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SkillsList from './SkillsList';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    paperWrapper: {
        background: '#e6e6e6',
        boxShadow: 'none',
        paddingTop: 50,
        paddingBottom: 50
    },
    paper: {
        background: '#e6e6e6',
        boxShadow: 'none',
        padding: theme.spacing.unit * 2,
        textAlign: 'left'
    },
    paper2: {
        background: '#e6e6e6',
        boxShadow: 'none',
        padding: theme.spacing.unit * 2,
        textAlign: 'center'
    },
    typographyTitle: {
        marginLeft: 75,
    },
    typographyP1: {
        marginTop: 50,
        marginLeft: 75
    },
    typographyP2: {
        marginTop: 50,
        marginLeft: 75,
    },
    typographyTitle2: {
        textDecoration: 'underline'
    },
    skillsList: {
        marginTop: 50
    }
})

export const About = (props) => {
    const { classes } = props;

    return (
        <Paper className={classes.paperWrapper} square={true}>
            <Grid container>
                <Grid item xs={12} md={8}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.typographyTitle} variant='h2'>
                            About:
                        </Typography>
                        <Typography className={classes.typographyP1} variant='display1'>
                            Hi, I'm Zane a React focused Front-End Developer. I moved here from Oklahoma for better job opportunities and I've been studying ever since.
                            Learning is my passion and programming has been the best outlet I could have found, always looking for that next answer or practicing that
                            new library.
                        </Typography>
                        <Typography className={classes.typographyP2} variant='display1'>
                            Keeping focused has always been a strong point of mine, I keep going till the job is done and I'm satisfied with the results. Taking pride
                            in my work no matter the project. Developing always leads to something better, the problem solving challenge of it just brings me more
                            satisfaction.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper className={classes.paper2}>
                        <Typography className={classes.typographyTitle2} variant='h2'>
                            Skills
                        </Typography>
                        <div className={classes.skillsList}>
                            <SkillsList />
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default withStyles(styles)(About);