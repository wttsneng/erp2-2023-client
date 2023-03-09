import { Box as MuiBox } from "@mui/material";
import { styled } from "@mui/material/styles";

const Box = styled(MuiBox)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[400]}`,
  borderRadius: 4,
  paddingTop: 4,
  paddingLeft: 4,
  paddingRight: 4,
  marginBlockStart: 2,
}));
const AccessTagsTableStyledBox = (props) => {
  return (
    <Box
      sx={{
        height: {
          xs: "calc(100vh - 350px)",
          md: "calc(100vh - 240px)",
        },
      }}
      {...props}
    />
  );
};
export default AccessTagsTableStyledBox;
