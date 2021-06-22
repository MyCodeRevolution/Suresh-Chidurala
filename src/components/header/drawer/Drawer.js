import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import {useHistory, useLocation} from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  item: {
    color: '#adadac',
    background: 'none',
    margin: '0px 25px',
  },
  active: {
    background: 'none',
    margin: '0px 25px',
    color: 'black',
  },
}));
const menuItems = [
  {
    text: 'About',
    path: '/about',
  },
  {
    text: 'Resume',
    path: '/resume',
  },
  {
    text: 'Portfolio',
    path: '/portfolio',
  },
  {
    text: 'Contact',
    path: '/contact',
  },
];
export default function MenuAppBar() {
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <MenuIcon
          style={{
            color: '#fff',
            fontSize: 38,
          }}
        />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
        className={classes.menu}
      >
        {menuItems.map((item) => (
          <MenuItem
            onClick={() => {
              history.push(item.path);
              handleClose();
            }}
            key={item.text}
            className={
              location.pathname === item.path ? classes.active : classes.item
            }
            style={{cursor: 'pointer'}}
          >
            {item.text}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
