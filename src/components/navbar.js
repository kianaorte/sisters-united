import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom'
//imports components
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Icon from '@material-ui/core/Icon';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
//imports for icons
import Home from '@material-ui/icons/Home';
import Create from '@material-ui/icons/Create';
import Event from '@material-ui/icons/Event';
import Forum from '@material-ui/icons/Forum';
//page imports
import sisters from '../images/sisters-united.png';
import './navbar.css';
import fire from '../config/Fire';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    logo: {
        maxWidth: 260,
        marginLeft: 45,
        marginRight: "auto"
    },
    icons: {
        marginLeft: "auto",
        marginRight: -12
    }
});

export default function SwipeableTemporaryDrawer() {

    //this.logout = this.logout.bind(this);
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });

    function logout() {
        fire.auth().signOut();
    }

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}>
            <List>
                <ListItem component={Link} to="/">
                    <ListItemIcon><Home /></ListItemIcon>
                    <Button variant="default" color="inherit">Home</Button>
                </ListItem>
                <ListItem component={Link} to="/events">
                    <ListItemIcon><Event /></ListItemIcon>
                    <Button variant="default" color="#d81b60">Events</Button>
                </ListItem>
                <ListItem component={Link} to="/topics">
                    <ListItemIcon><Forum /></ListItemIcon>
                    <Button variant="default" color="primary">Topics</Button>
                </ListItem>
                <ListItem component={Link} to="/beCreative">
                    <ListItemIcon><Create /></ListItemIcon>
                    <Button variant="default" color="#d81b60">Be Creative</Button>
                </ListItem>
                <Divider />
                <ListItem component={Link} to="/Login">
                    <Button variant="default" color="#d81b60">Login</Button>
                </ListItem>
                <ListItem component={Link} to="/signup">
                    <Button variant="default" color="#d81b60"> Signup</Button>
                </ListItem>
                <ListItem onClick={logout}>
                    <Button variant="default" color="#d81b60"> Logout</Button>
                </ListItem>
            </List>
        </div>
    );

    return (
        <div>
            <AppBar>
                <Toolbar>
                    {['left'].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <IconButton onClick={toggleDrawer(anchor, true)}><Menu /></IconButton>
                            <SwipeableDrawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                                onOpen={toggleDrawer(anchor, true)} >
                                {list(anchor)}
                            </SwipeableDrawer>
                            <img src={sisters} alt="logo" className={classes.logo} />
                        </React.Fragment>
                    ))}
                    <section className={classes.icons}>
                        <IconButton color="inherit" aria-label="Facebook" href="https://www.facebook.com/sistersunitednz/">
                            <Icon><Facebook /></Icon>
                        </IconButton>
                        <IconButton color="inherit" aria-label="Instagram" href="https://www.instagram.com/sistersunitednz/?hl=en">
                            <Icon><Instagram /></Icon>
                        </IconButton>
                    </section>
                </Toolbar>
            </AppBar>
        </div>
    );
}
