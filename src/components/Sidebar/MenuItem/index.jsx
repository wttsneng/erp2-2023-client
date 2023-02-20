import React from "react";
import { ListItem, ListItemIcon, Collapse } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { List, ListItemButton, ListItemText } from "./stylesLists";
import { hasChildren } from "./hasChildren";

const SingleLevel = ({ item, isMini, onClickSingle, activeId }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton
        onClick={() => onClickSingle(item.id)}
        isMini={isMini}
        selected={item.id === activeId}
        isCircle={item.icon === "fa fa-circle fa-2xs"}
      >
        <ListItemIcon>
          <i className={item.icon}></i>
        </ListItemIcon>
        <ListItemText
          isMini={isMini}
          isCircle={item.icon === "fa fa-circle fa-2xs"}
          primary={item.title}
        />
      </ListItemButton>
    </ListItem>
  );
};

const MultiLevel = ({
  item,
  isMini,
  onClickSingle,
  onClickExpanded,
  activeId,
}) => {
  const { items: children } = item;
  const open = !!item.open;

  return (
    <React.Fragment>
      <ListItem disablePadding>
        <ListItemButton
          onClick={() => {
            onClickExpanded(item.id);
          }}
          isMini={isMini}
          isCircle={item.icon === "fa fa-circle fa-2xs"}
        >
          <ListItemIcon>
            <i className={item.icon}></i>
          </ListItemIcon>
          <ListItemText
            isMini={isMini}
            isCircle={item.icon === "fa fa-circle fa-2xs"}
            primary={item.title}
          />
          {!isMini ? open ? <ExpandLessIcon /> : <ExpandMoreIcon /> : null}
        </ListItemButton>
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding isMini={isMini}>
          {children.map((child, key) => (
            <MenuItem
              key={key}
              item={child}
              onClickSingle={onClickSingle}
              onClickExpanded={onClickExpanded}
              isMini={isMini}
              activeId={activeId}
            />
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

const MenuItem = (props) => {
  const Component = hasChildren(props.item) ? MultiLevel : SingleLevel;
  return <Component {...props} />;
};
export default MenuItem;
