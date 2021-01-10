import { AppBar, Container, List, ListItem, ListItemText, Toolbar, Typography } from '@material-ui/core'
import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';

import menu, { addUserData, userData } from './menudata';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
const useStyles = makeStyles((theme) => ({
    desktopmenu: {
        display: 'flex',

    },
    desktopmenu_list: {
        width: 'auto'
    },
    title: {
        flex: '1'
    },
    menulink: {
        color: '#fff',
        [theme.breakpoints.down('xs')]: {
            flexDirection: `column`,
            justifyContent: `unset`,
            width: 240
        }
    }
}))


const DesktopMenu = () => {
    const [open, setOpen] = useState(false)
    const classes = useStyles();
    const anchorRef = useRef(null)
    const handleOpen = (event) => {
        console.log(event.target)
        setOpen(!open);
        console.log(anchorRef)
    };
    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    }

    // onMouseEnter={() => setOpen(true)}
    //   onMouseLeave={() => setOpen(false)};
    return (
        <Container>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" className={classes.title} >
                        <Link to="/" className={classes.menulink}>MyResume</Link>
                    </Typography>
                    {menu.map(({ title, musicMenu, path }, index) => (
                        <List key={index} className={classes.desktopmenu}>

                            {musicMenu != null ? (
                                <ListItem key={index} onClick={handleOpen} className={classes.desktopmenu_list}>
                                    <ListItemText key={index} primary={title} />

                                    {open ? <ExpandLess /> : <ExpandMore />}

                                </ListItem>
                            ) : (

                                    <Link to={path} className={classes.menulink}><ListItem button className={classes.desktopmenu_list}>
                                        <ListItemText primary={title} to={path} />
                                    </ListItem></Link>)

                            }


                        </List>
                    ))}
                </Toolbar>
            </AppBar>
        </Container>
    )
}

export default DesktopMenu;

export const AddUserNav = () => {
    // const [open, setOpen] = useState(false)
    const classes = useStyles();
    // const handleClick = () => {
    //     console.log('clicked')
    //     setOpen(!open);
    // };
    return (<>
        <Container>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" className={classes.title} >
                        <Link to="/" className={classes.menulink}>MyResume</Link>
                    </Typography>
                    {addUserData.map(({ title, path }, index) => (
                        (<Link key={index} to={path} className={classes.menulink}> <ListItem button className={classes.desktopmenu_list}>
                            <ListItemText primary={title} component={Link} to={path} />
                        </ListItem></Link>)





                    ))}
                </Toolbar>
            </AppBar>
        </Container>
    </>)
}

export const UserNav = () => {

    const classes = useStyles();

    return (<>
        <Container>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" className={classes.title} >
                        <Link to="/" className={classes.menulink}>MyResume</Link>
                    </Typography>
                    {userData.map(({ title, path }, index) => (
                        (<Link to={path} className={classes.menulink}> <ListItem key={index} button className={classes.desktopmenu_list}>
                            <ListItemText primary={title} component={Link} to={path} />
                        </ListItem></Link>)





                    ))}
                </Toolbar>
            </AppBar>
        </Container>
    </>)
}