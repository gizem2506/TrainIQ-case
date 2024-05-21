

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import HomeIcon from '@mui/icons-material/Home';
import { DazeAccordion } from '../components/elements/Accordion';
import { BaseLayout } from './BaseLayout';
import { DazeIconMenu } from '../components/elements/IconMenu';
import { useNavigate } from 'react-router-dom';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(0)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(0)} + 1px)`,
  },
});


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);





export const MainLayout = () => {
  const [open, setOpen] = React.useState(false);
  const [pageTitle, setpageTitle] = React.useState('TrainIQ Dashboard')
  const navigate = useNavigate();

  const Pages = [

    { name: "Ana Ekran", icon: <HomeIcon fontSize='small' />, tag: "main", sub: [], disabled: false },
    { name: "Skills", icon: <PersonIcon fontSize='small' />, tag: "skills", sub: [], disabled: false, },
    { name: "Teams", icon: <PersonIcon fontSize='small' />, tag: "teams", sub: [], disabled: false },
    {
      name: "Courses", icon: <PersonIcon fontSize='small' />, tag: "", sub: [
        { name: "In Progress Courses", icon: <VerifiedUserIcon fontSize='small' />, tag: "inprogress" },
        { name: "Upcoming Courses", icon: <VerifiedUserIcon fontSize='small' />, tag: "upcoming" },
      ], disabled: false,

    }


  ]

  const toggleDrawer = () => {
    setOpen(!open);
  };

  function ClickButton(tag, name) {
    navigate('/' + tag)
    setpageTitle(name)
  }


  return (
    <BaseLayout>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ backgroundColor: "#18736f", height: 40, justifyContent: 'center' }} open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              edge="start"
              sx={{
                marginRight: 5,
              }}
            >
              <MenuIcon />

            </IconButton>

            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
              <Typography sx={{ alignSelf: "center" }} variant="h7" noWrap component="div">
                {pageTitle}
              </Typography>

            </Box>


          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} >
          <Box sx={{ height: 40 }} ></Box>
          <Box sx={{ height: 30, width: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", display: "flex", overflow: "hidden", pt: 3, pb: 3 }} >


          </Box>
          <Divider />
          <List>


            {Pages.map((d, i) => {
                return (
                  <React.Fragment key={i}>

                    <DazeAccordion hidearrow={d.tag ? true : false} onClick={() => d.tag ? ClickButton(d.tag) : {}} disabled={d.disabled} icon={d.icon} title={d.name} >
                      {d.sub.map((s, j) => {
                          return (
                            <React.Fragment key={j} >
                              <DazeIconMenu onClick={() => ClickButton(s.tag, s.name)} title={s.name} icon={s.icon} />

                            </React.Fragment>
                          )
                        })
                      }
                    </DazeAccordion>
                    <Divider />
                  </React.Fragment>
                )
              })
            }
          </List>
        </Drawer>
      </Box>
    </BaseLayout>

  );
}
