import { Chip } from "@mui/material";
import WithTooltipHOC from "./WithTooltipHOC";
import { useTheme } from "@mui/material/styles";
import { useTagColor } from "@src/hooks/basic";

interface IProps {
  item: {
    name: string;
    description: string;
    [key: string]: any;
  };
  onClick: (item: any) => void;
  deleted: boolean;
  readOnly: boolean;
  writable: boolean;
  selected: boolean;
  [key: string]: any;
}
function TagWithTooltip({
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
    <WithTooltipHOC item={item}>
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
    </WithTooltipHOC>
  );
}

export default TagWithTooltip;
