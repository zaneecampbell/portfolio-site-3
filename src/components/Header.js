import React from 'react';
import Particles from 'react-particles-js';
import ParticleConfig from '../assets/particles-config.json';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon'
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    tabRoot: {
        flexGrow: 1,
        maxWidth: '25vw'
    },
    appBar: {
        background: '#222222',
        color: 'white',
    },
    indicator: {
      backgroundColor: '#9c27b0',
    },
    label: {
        fontSize: '3.5vw',
        [theme.breakpoints.up('sm')]: {
            fontSize: '18px'
        }
    }
  })

class Header extends React.Component {
    state = {
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        return (
            <AppBar position='fixed' className={classes.appBar} >
                <Grid container>
                <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                classes={{indicator: classes.indicator}}
                style={{width: '100vw'}}
                >   
                        <Tab label="Top" href='#top' classes={{label: classes.label, root: classes.tabRoot}} />
                        <Tab label="About" href='#about' classes={{label: classes.label, root: classes.tabRoot}} />
                        <Tab label="Portfolio" href='#portfolio' classes={{label: classes.label, root: classes.tabRoot}} />
                        <Tab label="Contact" href='#contact' classes={{label: classes.label, root: classes.tabRoot}} />
                </Tabs>
                </Grid>
            </AppBar>
        )
    }
}

export default withStyles(styles)(Header);

// Done