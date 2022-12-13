import { makeStyles } from '@material-ui/styles'
import React from 'react'
import {
  Typography,
  Drawer,
  List,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core'
import { ListItem, ListItemButton } from '@mui/material'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material'
import { useHistory, useLocation } from 'react-router-dom'
import { AppBar, Toolbar, Avatar } from '@material-ui/core'
import { format } from 'date-fns'

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: '#f9f9f9',
      width: '100%',
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: 'flex',
    },
    active: {
      background: '#f4f4f4',
    },
    title: {
      padding: theme.spacing(3),
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1,
    },
    avatar: {
      marginLeft: theme.spacing(2),
    },
  }
})

const Layout = ({ children }) => {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()

  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color='secondary' />,
      path: '/',
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlineOutlined color='secondary' />,
      path: '/create',
    },
  ]

  return (
    <div className={classes.root} color='secondary'>
      {/* app bar */}
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Typography className={classes.date}>
            Today is the {format(new Date(), 'do MMMM Y')}
          </Typography>
          <Typography>Mario</Typography>
          <Avatar src='' className={classes.avatar} />
        </Toolbar>
      </AppBar>
      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant='permanent'
        anchor='left'
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant='h5' className={classes.title}>
            Notes
          </Typography>
        </div>

        {/* list / links */}

        <List>
          {menuItems.map((item) => (
            <ListItemButton
              key={item.text}
              onClick={() => history.push(item.path)}
              selected={location.pathname === item.path ? true : false}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  )
}

export default Layout
