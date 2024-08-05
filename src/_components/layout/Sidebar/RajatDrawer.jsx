"use client";

import { Close, Mail, Menu, MoveToInbox } from "@mui/icons-material";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  styled,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiListItem from "@mui/material/ListItem";
import MuiListItemText from "@mui/material/ListItemText";
import { MenuItems } from "./MenuItems";
import { Fragment } from "react";
import Image from "next/image";

const drawerWidth = 256;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  background: "transparent",
  ...(open && {
    visibility: "visible !important",
    boxShadow: "unset",
    borderRight: "1px dashed #bec8d0",
  }),
});

const closedMixin = (theme, open) => {
  return {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    background: "transparent",
    width: 0,
    paddingRight: 0,
    ...(!open && {
      [theme.breakpoints.down("sm")]: {
        padding: 0,
      },
      [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(7)} + 35px)`,
      },
      [theme.breakpoints.up("md")]: {
        borderRight: "1px dashed #bec8d0",
        width: drawerWidth,
      },
    }),
    ...(open && {
      width: drawerWidth,
    }),
  };
};

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const DrawerList = ({ open, handleDrawerOpen }) => {
  // const location = useLocation();
  // const { pathname } = location;
  const pathname = "/";

  return (
    <Box
      sx={{
        height: "100%",
        borderRadius: "10px",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
        backgroundColor: "white",
      }}
    >
      <DrawerHeader>
        <Image
          src="https://ableproadmin.com/assets/images/logo-dark.svg"
          alt="logo"
          width={100}
          height={30}
        />
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        >
          {open ? <Close /> : <Menu />}
        </IconButton>
      </DrawerHeader>

      <Divider />
      <List>
        {MenuItems.map((val, index) => (
          // <Link
          //   to={val.path}
          //   className={`link-override ${pathname === val.path ? "active" : ""}`}
          //   key={index}
          // >
          <ListItem disablePadding key={index}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                // px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : { md: 3 },
                  justifyContent: "center",
                }}
              >
                {index % 2 === 0 ? <MoveToInbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={val.label} open={open} />
            </ListItemButton>
          </ListItem>
          // </Link>
        ))}
      </List>
    </Box>
  );
};

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  ...theme,
  position: "fixed",
  zIndex: 3,
  width: drawerWidth,
  flexShrink: 0,
  height: "100vh",
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  visibility: "visible",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme, open),
    "& .MuiDrawer-paper": closedMixin(theme, open),
  }),
}));

const ListItemText = styled(MuiListItemText, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  opacity: 0,
  ...(!open && {
    [theme.breakpoints.up("md")]: {
      opacity: 1,
    },
  }),
  ...(open && {
    opacity: 1,
  }),
}));

const ListItem = styled(MuiListItem)(({ theme }) => ({
  display: "block",
  // borderBottomRightRadius: 24,
  // borderTopRightRadius: 24,
  transition: theme.transitions.create(["backgroundColor", "transform"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.standard,
  }),
  "&:hover": {
    // "& .MuiListItemIcon-root": {
    //   color: "#2d2d2d",
    // },
    // "& .MuiTypography-root": {
    //   fontWeight: "bold",
    // },
  },
}));

export default function RajatDrawer({ open, handleDrawerOpen }) {
  return (
    <Fragment>
      <Drawer
        sx={{ display: { xs: "none", sm: "block" } }}
        variant="permanent"
        open={open}
      >
        <DrawerList open={open} handleDrawerOpen={handleDrawerOpen} />
      </Drawer>

      <Drawer
        position="fixed"
        className={open && "backDrop"}
        variant="temporary"
        ModalProps={{
          keepMounted: true,
        }}
        open={open}
        sx={{ display: { xs: "block", sm: "none" } }}
        onClose={handleDrawerOpen}
      >
        <DrawerList open={open} handleDrawerOpen={handleDrawerOpen} />
      </Drawer>
    </Fragment>
  );
}
