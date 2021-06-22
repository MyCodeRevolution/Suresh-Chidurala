import React from 'react';
import {useMediaQuery, useTheme} from '@material-ui/core';
import Drawer from './drawer/Drawer';
import {useHistory, useLocation} from 'react-router';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  active: {
    color: '#ffffff',
    '&::before': {
      content: "''",
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '0.1em',
      backgroundColor: '#007ced',
      opacity: 1,
      transition: 'opacity 300ms, transform 300ms',
    },
  },
}));
const menuItems = [
  {
    text: 'Home',
    path: '/',
  },
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
const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const location = useLocation();
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div className="header">
      <div className="icon">
        <h1>SC</h1>
      </div>
      <div className="name">
        <h2 style={{fontWeight: 700}}>Suresh Chidurala</h2>
      </div>
      {isMatch ? (
        <div className="drawer">
          <Drawer />
        </div>
      ) : (
        <div className="menu__bar">
          {menuItems.map((item) => (
            <li
              key={item.text}
              onClick={() => history.push(item.path)}
              className={
                location.pathname === item.path ? classes.active : null
              }
              style={{cursor: 'pointer'}}
            >
              {item.text}
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
