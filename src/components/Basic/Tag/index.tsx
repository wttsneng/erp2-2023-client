import { Chip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTagColor } from "@src/hooks/basic";

interface IProps {
  item: {
    name: string;
    [key: string]: any;
  };
  onClick: (item: any) => void;
  deleted: boolean;
  readOnly: boolean;
  writable: boolean;
  selected: boolean;
  [key: string]: any;
}
function Tag({
  onClick,
  item,
  deleted,
  readOnly,
  writable,
  selected,
  ...props
}: IProps) {
  const theme = useTheme();
  const color = useTagColor({ deleted, readOnly, writable, selected });
  return (
    <Chip
      label={item.name}
      onClick={() => {
        onClick(item);
      }}
      color={color}
      sx={{
        marginRight: 1,
        marginBottom: 1,
        transition: "none",
        border: `${
          deleted && selected
            ? `3px solid ${theme.palette.error.light}`
            : "3px solid  transparent"
        }`,
      }}
      {...props}
    />
  );
}

export default Tag;
