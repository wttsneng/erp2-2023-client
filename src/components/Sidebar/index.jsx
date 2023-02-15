import * as React from "react";
import {
  Box,
  Drawer,
  List,
  Typography,
  AppBar,
  Divider,
  Toolbar,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconChevronRight from "@mui/icons-material/ChevronRight";
import IconChevronLeft from "@mui/icons-material/ChevronLeft";
import { SidebarElement } from "./SidebarElement";
import SidebarLoading from "./SidebarLoading";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
const miniWidth = 40;

function Sidebar({ window, arr, children, status }) {
  const [data, setData] = React.useState([]);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isMini, setIsMini] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = (index, isParent, isChild, secondIndex) => {
    if (isParent) {
      let newData = [...data];
      if (newData[index].open === undefined) newData[index].open = false;
      newData[index].open = !newData[index].open;
      setData(newData);
    }
    if (isChild) {
      navigate(data[secondIndex].child[index].link);
    }
    if (!isParent && !isChild) {
      navigate(data[index].link);
    }
  };

  React.useEffect(() => {
    setData(arr);
  }, [arr]);

  const drawer = (
    <div>
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "flex-end",
          padding: "5px 0",
          display: { xs: "none", md: "flex" },
        }}
      >
        <IconButton
          sx={{ marginRight: `${isMini ? "" : "8px"}` }}
          onClick={() => {
            setIsMini((prev) => !prev);
          }}
        >
          {isMini ? <IconChevronRight /> : <IconChevronLeft />}
        </IconButton>
      </Box>
      <Divider
        sx={{
          display: { xs: "none", md: "block" },
        }}
      />
      <List
        sx={{
          paddingX: `${isMini ? "0px" : "10px"}`,
        }}
      >
        {status === "success" ? (
          <SidebarElement arr={arr} isMini={isMini} onClick={handleClick} />
        ) : status === "idle" || status === "loading" ? (
          <SidebarLoading />
        ) : (
          <></>
        )}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <AppBar
        position="fixed"
        color="primary"
        sx={{
          display: { xs: "block", md: "none" },
          width: {
            md: `calc(100% - ${isMini ? miniWidth : drawerWidth}px)`,
          },
          ml: { md: `${`${isMini ? "miniWidth" : drawerWidth}}`}px` },
          bottom: "0px !important",
          top: "auto important",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { md: `${isMini ? miniWidth : drawerWidth}px}` },
          flexShrink: { md: 0 },
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: `${isMini ? miniWidth : drawerWidth}px}`,
            },
          }}
          open={true}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: {
            md: `calc(100% - ${`${isMini ? miniWidth : drawerWidth}}`}px)`,
          },
        }}
      >
        <Toolbar
          sx={{
            display: { xs: "block", md: "none" },
          }}
        />
        <Box
          sx={{
            paddingX: { xs: "16px", sm: "24px" },
            marginBlockStart: { xs: "16px", md: "0" },
          }}
        >
          <main>{children}</main>
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
