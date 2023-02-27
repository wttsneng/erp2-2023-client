import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import MuiToolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import IconChevronLeft from "@mui/icons-material/ChevronLeft";
import IconChevronRight from "@mui/icons-material/ChevronRight";

import MenuList from "./MenuList";
import MoblieHeader from "../MobileHeader";
import SidebarLoading from "./SidebarLoading";

import { useSelector, useDispatch } from "react-redux";
import {
  setSidebarActiveById,
  toggleSidebarElementOpen,
  selectSidebarData,
  selectSidebarStatus,
  selectSidebarActive,
} from "@src/redux/slices/Basic/sidebarSlice";

const miniDrawerWidth = 40;
const drawerWidth = 240;

function Sidebar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isMini, setIsMini] = React.useState(false);
  const dispatch = useDispatch();
  const sidebarData = useSelector(selectSidebarData);
  const sidebarStatus = useSelector(selectSidebarStatus);
  const { activeTitle, activeId } = useSelector(selectSidebarActive);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleExpandedClick = (id) => {
    dispatch(toggleSidebarElementOpen(id));
  };
  const handleSingleClick = (id) => {
    dispatch(setSidebarActiveById(id));
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const Toolbar = styled(MuiToolbar)(({ theme }) => ({
    height: "80px",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  }));

  const drawerHeader = (
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
  );
  const drawerMenu =
    sidebarStatus === "success" ? (
      <MenuList
        arr={sidebarData}
        isMini={isMini}
        onClickExpanded={handleExpandedClick}
        onClickSingle={handleSingleClick}
        activeId={activeId}
      />
    ) : sidebarStatus === "loading" || sidebarStatus === "idle" ? (
      <SidebarLoading />
    ) : null;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <MoblieHeader onClick={handleDrawerToggle} pageName={activeTitle} />
      <Box
        component="nav"
        sx={{
          width: { md: `${isMini ? miniDrawerWidth : drawerWidth}px` },
          flexShrink: { md: 0 },
        }}
        aria-label="mailbox folders"
      >
        {/* Mobile Drawer */}
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
              overflowX: "hidden",
              width: `${isMini ? miniDrawerWidth : drawerWidth}px`,
            },
          }}
        >
          {drawerMenu}
        </Drawer>
        {/* Desktop Drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              overflowX: "hidden",
              width: `${isMini ? miniDrawerWidth : drawerWidth}px`,
            },
          }}
          open
        >
          {drawerHeader}
          <Divider sx={{ marginBlockEnd: 1 }}></Divider>

          {drawerMenu}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          px: 3,
          width: {
            md: `calc(100% - ${isMini ? miniDrawerWidth : drawerWidth}px)`,
          },
        }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}

export default Sidebar;
