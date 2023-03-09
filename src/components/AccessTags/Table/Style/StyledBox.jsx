import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

const StyledBox = (props) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        border: `1px solid ${theme.palette.grey[400]}`,
        borderRadius: 1,
        paddingTop: 1,
        paddingX: 1,
        marginBlockStart: 2,
        minHeight: {
          xs: "calc(100vh - 400px)",
          md: "calc(100vh - 240px)",
        },
      }}
      {...props}
    />
  );
};
export default StyledBox;
