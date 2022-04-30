import * as React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import { Grid, Tooltip } from '@mui/material';
const drawerWidth = 240;
const expenditureWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  width: `calc(100% - ${theme.spacing(8)} - 1px - ${expenditureWidth}px)`,
  left: `calc(${theme.spacing(8)} + 1px)`,
  transition: theme.transitions.create(['margin', 'width', 'left'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px - ${expenditureWidth}px)`,
    left: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width', 'left'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  })
);

const Layout: React.FC = () => {
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItemButton
              key={text}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <Tooltip
                  title={<Typography sx={{ display: open ? 'none' : 'block' }}>{text}</Typography>}
                  arrow
                  placement="right-start"
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </Tooltip>
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItemButton
              key={text}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <Grid container>
        <Grid item md={10}>
          <AppBar position="absolute" open={open}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                edge="start"
                sx={{
                  marginRight: 5,
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                Mini variant drawer
              </Typography>
            </Toolbar>
          </AppBar>
          <DrawerHeader />
          <Box
            sx={{
              px: 2.5,
            }}
          >
            <Outlet />
          </Box>
        </Grid>
        <Grid item md={2}>
          <Typography>
            품으며, 싶이 얼마나 피다. 품고 인도하겠다는 얼마나 곧 피가 하는 황금시대를 이것을 가치를
            것이다. 꾸며 되려니와, 두기 남는 불어 이 가지에 곳으로 끓는다. 있음으로써 설레는 무엇이
            이것을 온갖 우리의 이것이다. 위하여, 곳으로 가슴이 있는 쓸쓸한 역사를 인간은 이것이다.
            예가 무한한 풍부하게 크고 봄바람을 원질이 것은 있는가? 가치를 든 같으며, 것은 무엇을
            것은 칼이다. 못할 소금이라 무엇을 물방아 더운지라 없는 부패뿐이다. 그림자는 그들의
            청춘의 바이며, 광야에서 하였으며, 청춘이 싹이 있는가? 바이며, 오아이스도 용감하고 수
            맺어, 운다.
            <Typography>
              옷을 수 인도하겠다는 발휘하기 열락의 군영과 아름답고 것은 웅대한 보라. 사는가 할지니,
              찾아 창공에 아름다우냐? 역사를 너의 따뜻한 영락과 설산에서 청춘의 구할 운다. 노래하며
              있는 끝까지 인류의 이상은 봄날의 것이다. 끝에 얼음이 것은 노년에게서 만천하의 있으랴?
              오아이스도 열락의 무한한 용기가 황금시대의 인생을 보라. 그러므로 꽃 청춘이 일월과 살
              고동을 말이다. 청춘의 이상은 뜨고, 꽃이 우리 이 것이다. 못할 청춘은 발휘하기 이것을
              인간의 위하여, 가치를 봄바람이다.
            </Typography>
            <Typography>
              온갖 피는 인생의 있으랴? 곳이 생명을 미인을 구하지 공자는 하는 노래하며 그리하였는가?
              돋고, 피가 밥을 붙잡아 옷을 끝까지 주는 내려온 같으며, 것이다. 그러므로 않는 못하다
              힘있다. 그들을 오직 보내는 생명을 청춘의 군영과 황금시대를 부패뿐이다. 인간에 있을
              기쁘며, 위하여서. 기쁘며, 끝에 그들의 품으며, 생의 타오르고 얼마나 얼마나 너의
              쓸쓸하랴? 부패를 밝은 인간의 앞이 주며, 봄날의 없으면 트고, 우리 교향악이다. 곧 희망의
              속잎나고, 이 뭇 구하지 청춘의 방황하였으며, 미묘한 있으랴?
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
