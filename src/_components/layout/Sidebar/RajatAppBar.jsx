import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import { IconButton, Toolbar, Typography } from "@mui/material";
import { MenuOpen, Menu } from "@mui/icons-material";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: 0,
  backgroundColor: "unset",
  boxShadow: "unset",
  right: "unset",
  transition: theme.transitions.create(["width", "padding"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  "& .MuiButtonBase-root": {
    margin: 0,
  },
}));

export default function RajatAppBar({ open, handleDrawerOpen }) {
  return (
    <AppBar position="sticky" open={open}>
      <Toolbar sx={{ p: { xs: 0 } }}>
        <IconButton
          // color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            p: 0.6,
            borderRadius: 2,
            display: { xs: "flex", md: "none" },
            ":hover": {
              backgroundColor: "gainsboro",
            },
          }}
        >
          {open ? <MenuOpen /> : <Menu />}
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          textTransform="uppercase"
          paddingLeft={2}
          fontSize={20}
          fontWeight={700}
          letterSpacing={1}
          color="black"
          component="div"
        >
          Dashboard
          {/* {lastPath.length ? lastPath[0] : "dashboard"} */}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
