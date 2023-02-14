import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CircleIcon from "@mui/icons-material/Circle";
import { useTheme } from "@mui/material/styles";

export const SidebarElement = ({ arr, isMini, onClick }) => {
  const [active, setActive] = React.useState([0, 0]);
  const theme = useTheme();
  return (
    <React.Fragment>
      {arr.map((obj, index) => (
        <div
          key={obj.name}
          onClick={(e) => {
            e.stopPropagation();
            if (!obj.child) {
              onClick(index, false, false);
              setActive([index, 0]);
            } else {
              onClick(index, true, false);
            }
          }}
        >
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                padding: `${isMini ? "10px 8px" : ""}`,
                borderRadius: 2,
              }}
              selected={active[0] === index && !obj.child}
            >
              <ListItemIcon>
                {obj.icon ? (
                  <Typography
                    className={obj.icon}
                    sx={{
                      fontSize: "15px",
                      marginLeft: `${isMini ? "4px" : "0px"}`,
                    }}
                  ></Typography>
                ) : (
                  <CircleIcon
                    sx={{
                      fontSize: "12px",
                      marginLeft: `${isMini ? "6px" : "0px"}`,
                    }}
                  />
                )}
              </ListItemIcon>
              {isMini ? null : <ListItemText primary={obj.name} />}
              {obj.child && (obj.open ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
          </ListItem>

          {obj.child && (
            <Collapse
              in={obj.open === undefined ? false : obj.open}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding sx={{ padding: "0px" }}>
                {obj.child.map((obj, secondIndex) => (
                  <ListItemButton
                    selected={active[1] === secondIndex && active[0] === index}
                    key={obj.name}
                    sx={{
                      padding: `${isMini ? "10px 8px" : "10px 0 10px 30px"}`,
                      color: theme.palette.text.secondary,
                      borderRadius: 2,
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onClick(secondIndex, false, true, index);
                      setActive([index, secondIndex]);
                    }}
                  >
                    <ListItemIcon>
                      <CircleIcon
                        sx={{
                          fontSize: "12px",
                          marginLeft: `${isMini ? "6px" : "0px"}`,
                        }}
                      />
                    </ListItemIcon>
                    {isMini ? null : <ListItemText primary={obj.name} />}
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          )}
        </div>
      ))}
    </React.Fragment>
  );
};
