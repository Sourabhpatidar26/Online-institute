import { Box, styled } from "@mui/material";
import RajatAppBar from "./RajatAppBar";

const drawerWidth = 256;

const MainBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  height: "100vh",
  paddingLeft: 40,
  paddingRight: 40,
  // paddingTop: 10,
  ...(!open && {
    [theme.breakpoints.up("sm")]: {
      marginLeft: `calc(${theme.spacing(7)} + 35px)`,
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: drawerWidth,
    },
  }),
  ...(open && {
    marginLeft: drawerWidth,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  }),
}));

export default function MainPage({ children, open, handleDrawerOpen }) {
  return (
    <MainBox open={open} component="main" sx={{ flexGrow: 1 }}>
      <RajatAppBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <Box
        component="article"
        sx={{
          zIndex: 2,
          position: "relative",
        }}
      >
        {children}
      </Box>
    </MainBox>
  );
}
