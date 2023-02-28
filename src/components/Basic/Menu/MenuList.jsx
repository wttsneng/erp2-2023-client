import { styled } from "@mui/material/styles";
import { MenuList as MuiMenuList } from "@mui/material";

const StyledMenuList = styled(MuiMenuList)(({ theme }) => ({
  "& .MuiMenuList-padding": {
    paddingY: 0,
  },
}));
function MenuList({ ...props }) {
  return <StyledMenuList {...props} />;
}

export default MenuList;
